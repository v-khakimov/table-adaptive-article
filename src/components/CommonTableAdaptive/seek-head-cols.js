import { addRowsToHead } from './add-head-rows';
import { getColsNumber } from './computed-cols-number';
import { getRowsSplitter } from './computed-rows-splitter';
import { isTableWide } from './computed-table-wide';
import { splitRows } from './split-rows';
import { transformCellsToObject } from './transform-cells-to-object';
import { transformRowsToCells } from './transform-rows-to-cells';

const transformRowsThroughOne = (rows) => {
  const rowsNew = [];
  for (let i = 0; i < rows.length / 2; i += 1) {
    rowsNew.push(rows[i], rows[rows.length / 2 + i]);
  }
  return rowsNew;
};

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
  } else if (rows && !isTableWide.value && getRowsSplitter.value > 1) {
    let firstRowAllCols;
    if (rows.length > 1 && rows[0].length === 1) {
      firstRowAllCols = rows.shift();
      firstRowAllCols[0].cols = getColsNumber.value;
    }
    rows = splitRows(rows);
    if (rows.length > 1) rows = transformRowsThroughOne(rows);
    if (firstRowAllCols) rows.unshift(firstRowAllCols);
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
