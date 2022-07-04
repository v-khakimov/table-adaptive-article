import { checkColFirst } from './check-col-first';
import { getColsNumber } from './computed-cols-number';
import { getRowsSplitter } from './computed-rows-splitter';
import { isTableWide } from './computed-table-wide';
import { splitRows } from './split-rows';
import { transformCellsToObject } from './transform-cells-to-object';

const checkRowLast = ({ rows }, iRow, rowsLength) =>
  iRow + (rows || 1) === rowsLength;

const transformCellsWithoutRows = (rowsExt) => {
  const rows = [];
  rowsExt.forEach((row, iRow) => {
    if (!rows[iRow]) rows[iRow] = [];
    row.forEach((cellExt) => {
      const cell = { ...cellExt };
      let iCol = rows[iRow].findIndex((el) => !el);
      if (iCol < 0) iCol = rows[iRow].length;
      rows[iRow][iCol] = cell;
      if ('rows' in cell) {
        const rowsCell = cell.rows;
        delete cell.rows;
        for (let i = iRow + 1; i < iRow + rowsCell; i += 1) {
          if (!rows[i]) rows[i] = [];
          rows[i][iCol] = cell;
        }
      }
    });
  });
  return rows;
};

const addTitleCells = (propsTitles, iRow) => {
  const cells = [];
  if (isTableWide.value) {
    propsTitles[iRow].forEach((cell, iCol) => {
      cells.push({
        ...cell,
        colFirst: checkColFirst(cell, iCol),
        rowLast: checkRowLast(cell, iRow, propsTitles.length),
        cellType: 'titles',
      });
    });
  } else {
    cells.push({
      text: propsTitles[iRow].map(({ text }) => text).join(', '),
      cols: getColsNumber.value,
      colFirst: true,
      colLast: true,
      cellType: 'titles',
    });
  }
  return cells;
};

const addOtherCells = (row, iRow, rowsLength) => {
  const cells = [];
  row.forEach((cell, iCell) => {
    cells.push({
      ...cell,
      colFirst: !isTableWide.value && iCell === 0,
      colLast: iCell === row.length - 1,
      rowLast: checkRowLast(cell, iRow, rowsLength),
      cellType: 'cells',
    });
  });
  return cells;
};

const seekTableCells = (propsTitlesExt, propsCellsExt) => {
  let propsTitles = transformCellsToObject(propsTitlesExt);
  let propsCells = transformCellsToObject(propsCellsExt);
  if (!isTableWide.value) {
    propsTitles = transformCellsWithoutRows(propsTitles);
    propsCells = transformCellsWithoutRows(propsCells);
    if (getRowsSplitter.value > 1) {
      propsCells = splitRows(propsCells);
    }
  }
  const cells = [];
  propsCells.forEach((row, iRow) => {
    if (iRow % getRowsSplitter.value === 0) {
      cells.push(...addTitleCells(propsTitles, iRow / getRowsSplitter.value));
    }
    cells.push(...addOtherCells(row, iRow, propsCells.length));
  });
  return cells;
};

export { seekTableCells };
