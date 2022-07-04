import { resetIndent, setHeadIndentFromDom } from './computed-head-indent';
import { setRowsSplitter } from './computed-rows-splitter';
import { getPropsCellsFirstRowLength } from './computed-first-row-length';
import { isTableWide, switchTableWide } from './computed-table-wide';

const seekCols = (el) => {
  const { gridColumnEnd } = getComputedStyle(el);
  let cols = 1;
  if (gridColumnEnd.startsWith('span ')) {
    cols = Number(gridColumnEnd.slice(5));
  }
  return cols;
};

const seekCellsWidths = ({ children }) => {
  const widths = [];
  widths.length = getPropsCellsFirstRowLength.value;
  let leftFirst;
  let iCol = -1;
  Array.from(children)
    .filter(({ tagName }) => tagName === 'P')
    .filter((child) => seekCols(child) !== getPropsCellsFirstRowLength.value)
    .find((child) => {
      const { left, width } = child.getBoundingClientRect();
      if (leftFirst === undefined) leftFirst = left;

      const cols = seekCols(child);

      if (iCol === getPropsCellsFirstRowLength.value - 1) iCol = 0;
      else iCol += cols;

      if (cols === 1) widths[iCol] = width;
      return !widths.includes(undefined);
    });
  return widths.map((w) => Math.round(w));
};

const seekRowsSplitter = (domSection, clientWidth) => {
  const widths = seekCellsWidths(domSection);
  const matrix = [[]];
  widths.forEach((width) => {
    if (
      matrix[matrix.length - 1].reduce((sum, w) => sum + w, 0) + width >
      clientWidth
    ) {
      matrix.push([]);
    }
    matrix[matrix.length - 1].push(width);
  });
  return matrix.length;
};

let clientWidthOld;

const watchTableWidth = (domSection, propsCellsColsLength, changeProps) => {
  const { clientWidth } = document.documentElement;
  if (changeProps || clientWidth !== clientWidthOld) {
    clientWidthOld = clientWidth;
    setRowsSplitter(1);
    resetIndent();
    if (!isTableWide.value) switchTableWide();
    setTimeout(() => {
      if (domSection && domSection.offsetWidth > clientWidth) {
        switchTableWide();
        setTimeout(() => {
          if (domSection && domSection.offsetWidth > clientWidth) {
            setRowsSplitter(seekRowsSplitter(domSection, clientWidth));
          }
          setHeadIndentFromDom(domSection, propsCellsColsLength);
        }, 0);
      }
    }, 0);
  }
};

export { watchTableWidth };
