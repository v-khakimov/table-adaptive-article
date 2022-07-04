import { addRowsToHead } from './add-head-rows';
import { isTableWide } from './computed-table-wide';
import { transformCellsToObject } from './transform-cells-to-object';
import { transformRowsToCells } from './transform-rows-to-cells';

const seekHeadCols = (propsHeadCols, propsHeadTitles) => {
  let rows;
  if (propsHeadCols) rows = transformCellsToObject(propsHeadCols);
  if (
    rows &&
    isTableWide.value &&
    propsHeadTitles &&
    propsHeadTitles.length > propsHeadCols.length
  ) {
    rows = addRowsToHead(rows, propsHeadTitles.length - propsHeadCols.length);
  }
  let cells = [];
  if (rows) {
    cells = transformRowsToCells(rows, {
      cellType: 'head',
      colFirst: !isTableWide.value,
      colLast: true,
      rowFirst: isTableWide.value || !propsHeadTitles.length,
    });
  }
  return cells;
};

export { seekHeadCols };
