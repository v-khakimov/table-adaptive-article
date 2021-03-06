<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { getColsNumber } from './computed-cols-number';
import { setHeadIndentFromDom } from './computed-head-indent';
import {
  setPropsTitlesFirstRowLength,
  setPropsCellsFirstRowLength,
} from './computed-first-row-length';
import { seekHeadCols } from './seek-head-cols';
import { seekHeadTitles } from './seek-head-titles';
import { seekTableCells } from './seek-table-cells';
import { transformRowsToTemplate } from './transform-rows-to-template';
import { watchTableWidth } from './watch-table-width';

const props = defineProps({
  headTitles: Array,
  headCols: Array,
  titles: Array,
  cells: Array,
  /* All Arrays: array of rows [row1, ..., rowN],
     All rows: array of cells [cell1, ..., cellN],
     Each cell: [String, Number, Object],
      if (typeof cell === 'object') {
        cell = {
          text: [String, Number], // required,
          rows: Number, // how many cells are joining with this cell in a row →
          cols: Number, // how many cells are joining with this cell in a column ↓
          clAdd: [String, Array], // css-classes
          st: String, // css-inline-styles
        }
      }
  */
  classes: Object,
  /* classes: {
    outer: [String, Array],
    eachCell: [String, Array],
    head: { each, colFirst, colLast, rowFirst, rowLast }
    titles: { each, colFirst, colLast, rowFirst, rowLast }
    cells: { each, colFirst, colLast, rowFirst, rowLast }
    // typeof each, colFirst, colLast, rowFirst, rowLast - [String, Array]
    // colFirst, colLast, rowFirst, rowLast are added to each
  } */
});

setPropsTitlesFirstRowLength(props.titles[0]);
watch(() => props.titles[0], setPropsTitlesFirstRowLength);

setPropsCellsFirstRowLength(props.cells[0]);
watch(() => props.cells[0], setPropsCellsFirstRowLength);

const getSectionSt = computed(
  () => `display: grid;
  grid-template-columns: repeat(${getColsNumber.value}, auto);`
);

const getSectionCl = computed(() =>
  props.classes && 'outer' in props.classes ? props.classes.outer : ''
);

const getHeadTitles = computed(() =>
  seekHeadTitles(props.headTitles, props.headCols)
);
const getHeadcols = computed(() =>
  seekHeadCols(props.headCols, props.headTitles)
);

const getTableHead = computed(() =>
  transformRowsToTemplate(
    [...getHeadTitles.value, ...getHeadcols.value],
    props.classes
  )
);

const getTableCells = computed(() =>
  transformRowsToTemplate(
    seekTableCells(props.titles, props.cells),
    props.classes
  )
);

const domSection = ref(null);
onMounted(() => {
  watchTableWidth(domSection.value, props.cells.length);
});
window.addEventListener('resize', () => {
  watchTableWidth(domSection.value, props.cells.length);
});
watch(
  () => [props.titles[0], props.cells[0]],
  () => {
    watchTableWidth(domSection.value, props.cells.length, 'changeProps');
  }
);

window.addEventListener('scroll', () => {
  setHeadIndentFromDom(domSection.value, props.cells.length);
});
</script>

<template>
  <section :class="getSectionCl" :style="getSectionSt" ref="domSection">
    <h6
      v-for="({ text, cl, st }, i) in getTableHead"
      :key="`cell-head-${i}`"
      :class="cl"
      :style="st"
      v-html="text"
    ></h6>

    <p
      v-for="({ text, st, cl }, i) in getTableCells"
      :key="`cell-${i}`"
      :class="cl"
      :style="st"
      v-html="text"
    ></p>
  </section>
</template>
