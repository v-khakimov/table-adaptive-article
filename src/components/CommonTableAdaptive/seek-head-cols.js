import { addRowsToHead } from './add-head-rows';
import { transformCellsToObject } from './transform-cells-to-object';
import { transformRowsToCells } from './transform-rows-to-cells';

const seekHeadCols = (propsHeadCols, propsHeadTitles) => {
  let rows;
  if (propsHeadCols) rows = transformCellsToObject(propsHeadCols);
  if (
    rows &&
    propsHeadTitles &&
    propsHeadTitles.length > propsHeadCols.length
  ) {
    rows = addRowsToHead(rows, propsHeadTitles.length - propsHeadCols.length);
  }
  let cells = [];
  if (rows) {
    cells = transformRowsToCells(rows, {
      cellType: 'head',
      colLast: true,
      rowFirst: true,
    });
  }
  return cells;
};

export { seekHeadCols };
