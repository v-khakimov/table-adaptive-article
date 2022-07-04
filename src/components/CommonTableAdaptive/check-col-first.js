let prevColFirst = 0;

const checkColFirst = ({ rows }, iCol) => {
  let colFirst;
  if (iCol === 0) {
    if (prevColFirst === 0) {
      colFirst = true;
      if (rows) prevColFirst = rows - 1;
    } else prevColFirst -= 1;
  }
  return colFirst;
};

export { checkColFirst };
