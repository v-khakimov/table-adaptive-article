const addRowsToHead = (arrayOfRows, differenceLengths) => {
  const firstRow = arrayOfRows.shift();
  arrayOfRows.unshift(
    firstRow.map((cell) => ({
      ...cell,
      rows:
        'rows' in cell ? cell.rows + differenceLengths : differenceLengths + 1,
    }))
  );
  return arrayOfRows;
};

export { addRowsToHead };
