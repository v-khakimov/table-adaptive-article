const transformRowsToCells = (rows, params = {}) => {
  const { cellType, colFirst, colLast, rowFirst } = params;
  const cells = [];
  rows.forEach((row, iRow) => {
    row.forEach((cellExt, iCol) => {
      const cell = { ...cellExt, cellType };
      if (iRow === 0 && rowFirst) cell.rowFirst = true;
      if (iCol === 0 && colFirst) cell.colFirst = true;
      if (iCol === row.length - 1 && colLast) cell.colLast = true;
      cells.push(cell);
    });
  });
  return cells;
};

export { transformRowsToCells };
