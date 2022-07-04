const bringArray = (arrayOrStr) =>
  Array.isArray(arrayOrStr) ? arrayOrStr : [arrayOrStr];

const transformCellToTemplate = (cell, classes) => {
  const { text, cols, rows, indent, cellType, clAdd } = cell;

  let st = cell.st || '';
  if (cols) st += `grid-column-end: span ${cols};`;
  if (rows) st += `grid-row-end: span ${rows};`;
  if (indent) st += `grid-row-start: ${indent + 1};`;

  const cl = [];
  if ('eachCell' in classes) cl.push(...bringArray(classes.eachCell));
  if (cellType in classes) {
    if ('each' in classes[cellType]) {
      cl.push(...bringArray(classes[cellType].each));
    }
    ['colFirst', 'colLast', 'rowFirst', 'rowLast'].forEach((typ) => {
      if (typ in cell && cell[typ] && typ in classes[cellType]) {
        cl.push(...bringArray(classes[cellType][typ]));
      }
    });
  }
  if (clAdd) cl.push(...bringArray(clAdd));

  return { text, st, cl };
};

const transformRowsToTemplate = (cells, classes) =>
  cells.map((cell) => transformCellToTemplate(cell, classes));

export { transformRowsToTemplate };
