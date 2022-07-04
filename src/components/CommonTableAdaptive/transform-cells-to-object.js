const transformCellsToObject = (rows) =>
  rows.map((row) =>
    row.map((cell) => (typeof cell === 'object' ? { ...cell } : { text: cell }))
  );

export { transformCellsToObject };
