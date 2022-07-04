import { addRowsToHead } from './add-head-rows';
import { transformCellsToObject } from './transform-cells-to-object';
import { transformRowsToCells } from './transform-rows-to-cells';

const seekHeadTitles = (propsHeadTitles, propsHeadCols) => {
  let rows;
  if (propsHeadTitles) rows = transformCellsToObject(propsHeadTitles);
  if (rows && propsHeadCols && propsHeadCols.length > propsHeadTitles.length) {
    rows = addRowsToHead(rows, propsHeadCols.length - propsHeadTitles.length);
  }
  let cells = [];
  if (rows) {
    cells = transformRowsToCells(rows, {
      cellType: 'head',
      colFirst: true,
      rowFirst: true,
    });
  }
  return cells;
};
export { seekHeadTitles };
