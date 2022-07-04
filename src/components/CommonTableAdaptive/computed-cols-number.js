import { computed } from 'vue';
import {
  getPropsCellsFirstRowLength,
  getPropsTitlesFirstRowLength,
} from './computed-first-row-length';
import { getRowsSplitter } from './computed-rows-splitter';
import { isTableWide } from './computed-table-wide';

const getColsNumber = computed(() => {
  let colsNumber = getPropsCellsFirstRowLength.value;
  if (isTableWide.value) {
    colsNumber += getPropsTitlesFirstRowLength.value;
  } else if (getRowsSplitter.value > 1) {
    colsNumber = Math.ceil(colsNumber / getRowsSplitter.value);
  }
  return colsNumber;
});

export { getColsNumber };
