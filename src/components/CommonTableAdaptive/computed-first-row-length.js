import { computed, ref } from 'vue';

const countCollsNum = (row) =>
  row.reduce((sum, { cols }) => sum + (cols || 1), 0);

const refPropsTitlesFirstRowLength = ref(0);
const getPropsTitlesFirstRowLength = computed(
  () => refPropsTitlesFirstRowLength.value
);
const setPropsTitlesFirstRowLength = (row0) => {
  refPropsTitlesFirstRowLength.value = countCollsNum(row0);
};

const refPropsCellsFirstRowLength = ref(0);
const getPropsCellsFirstRowLength = computed(
  () => refPropsCellsFirstRowLength.value
);
const setPropsCellsFirstRowLength = (row0) => {
  refPropsCellsFirstRowLength.value = countCollsNum(row0);
};

export {
  getPropsTitlesFirstRowLength,
  setPropsTitlesFirstRowLength,
  getPropsCellsFirstRowLength,
  setPropsCellsFirstRowLength,
};
