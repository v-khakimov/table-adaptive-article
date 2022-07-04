<script setup>
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
</script>
