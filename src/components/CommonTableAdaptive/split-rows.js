import { getColsNumber } from './computed-cols-number';

const splitRows = (rowsOld) => {
  const rowsNew = [];
  let countCol;
  rowsOld.forEach((row) => {
    countCol = 0;
    row.forEach((cellExt, iCol) => {
      if (countCol === 0) {
        rowsNew.push([]);
      }
      const cell = { ...cellExt };
      let { cols } = cell;

      while (cols && cols + countCol > getColsNumber.value) {
        const colsDouble = getColsNumber.value - countCol;
        const cellDouble = { ...cell };
        if (cellDouble.cols === 1) delete cellDouble.cols;
        else cellDouble.cols = colsDouble;
        rowsNew[rowsNew.length - 1].push(cellDouble);
        rowsNew.push([]);
        cols -= colsDouble;
        if (cols === 1) {
          cols = undefined;
          delete cell.cols;
        } else {
          cell.cols = cols;
        }
        countCol = 0;
      }

      if (iCol === row.length - 1) {
        let colsRest = getColsNumber.value - countCol - (cols ? cols : 1);
        if (colsRest) {
          if (cols) cell.cols += colsRest;
          else cell.cols = colsRest + 1;
        }
      }

      rowsNew[rowsNew.length - 1].push(cell);
      countCol += cols ? cols : 1;
      if (countCol === getColsNumber.value) countCol = 0;
    });
  });
  return rowsNew;
};

export { splitRows };
