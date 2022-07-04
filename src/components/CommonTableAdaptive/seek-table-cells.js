import { checkColFirst } from './check-col-first';
import { transformCellsToObject } from './transform-cells-to-object';

const checkRowLast = ({ rows }, iRow, rowsLength) =>
  iRow + (rows || 1) === rowsLength;

const addTitleCells = (propsTitles, iRow) => {
  const cells = [];
  propsTitles[iRow].forEach((cell, iCol) => {
    cells.push({
      ...cell,
      colFirst: checkColFirst(cell, iCol),
      rowLast: checkRowLast(cell, iRow, propsTitles.length),
      cellType: 'titles',
    });
  });
  return cells;
};

const addOtherCells = (row, iRow, rowsLength) => {
  const cells = [];
  row.forEach((cell, iCell) => {
    cells.push({
      ...cell,
      colLast: iCell === row.length - 1,
      rowLast: checkRowLast(cell, iRow, rowsLength),
      cellType: 'cells',
    });
  });
  return cells;
};

const seekTableCells = (propsTitlesExt, propsCellsExt) => {
  const propsTitles = transformCellsToObject(propsTitlesExt);
  const propsCells = transformCellsToObject(propsCellsExt);
  const cells = [];
  propsCells.forEach((row, iRow) => {
    cells.push(...addTitleCells(propsTitles, iRow));
    cells.push(...addOtherCells(row, iRow, propsCells.length));
  });
  return cells;
};

export { seekTableCells };
