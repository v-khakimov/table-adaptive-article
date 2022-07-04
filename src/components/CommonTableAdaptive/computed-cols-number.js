import { computed, ref } from 'vue';

const refColsNumber = ref(0);
const getColsNumber = computed(() => refColsNumber.value);

const countCollsNum = (row) =>
  row.reduce((sum, { cols }) => sum + (cols || 1), 0);

const setColsNumber = ([titlesFirstRow, cellsFirstRow]) => {
  refColsNumber.value =
    countCollsNum(cellsFirstRow) + countCollsNum(titlesFirstRow);
};

export { getColsNumber, setColsNumber };
