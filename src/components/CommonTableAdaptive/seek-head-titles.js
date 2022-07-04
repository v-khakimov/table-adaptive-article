import { addHeadIndent } from './add-head-indent';
import { addRowsToHead } from './add-head-rows';
import { getColsNumber } from './computed-cols-number';
import { getHeadIndent } from './computed-head-indent';
import { isTableWide } from './computed-table-wide';
import { transformCellsToObject } from './transform-cells-to-object';
import { transformRowsToCells } from './transform-rows-to-cells';

const seekHeadTitles = (propsHeadTitles, propsHeadCols) => {
  let rows;
  if (propsHeadTitles) rows = transformCellsToObject(propsHeadTitles);
  if (
    rows &&
    isTableWide.value &&
    propsHeadCols &&
    propsHeadCols.length > propsHeadTitles.length
  ) {
    rows = addRowsToHead(rows, propsHeadCols.length - propsHeadTitles.length);
  } else if (rows && !isTableWide.value) {
    rows = rows.map((row) => [
      {
        text: row.map(({ text }) => text).join(', '),
        cols: getColsNumber.value,
      },
    ]);
    if (getHeadIndent.value > 0) {
      rows = addHeadIndent(rows, -1);
    }
  }
  let cells = [];
  if (rows) {
    cells = transformRowsToCells(rows, {
      cellType: 'head',
      colFirst: true,
      colLast: !isTableWide.value,
      rowFirst: true,
    });
  }
  return cells;
};

export { seekHeadTitles };
