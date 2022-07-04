import { getHeadIndent } from './computed-head-indent';
import { getRowsSplitter } from './computed-rows-splitter';

const addHeadIndent = (rows, titlesLength, throughOne) => {
  let countRow = 0;
  return rows.map((row, iRow) => {
    const rowNew = row.map((cell) => ({
      ...cell,
      indent:
        countRow +
        1 +
        titlesLength +
        getHeadIndent.value * (1 + getRowsSplitter.value),
    }));
    countRow += throughOne && iRow >= 1 && iRow % 2 ? 2 : 1;
    return rowNew;
  });
};

export { addHeadIndent };
