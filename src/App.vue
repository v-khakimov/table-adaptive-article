<script setup>
import { setMq } from './store-variables/media-queries';
import { getTableProps } from './store-variables/table-props';
import ButtonsForTable from './components/ButtonsForTable.vue';
import CommonTableAdaptive from './components/CommonTableAdaptive/TableTemplate.vue';

setMq();
</script>

<template>
  <ButtonsForTable />

  <CommonTableAdaptive v-bind="getTableProps" />
</template>

<style>
@import './css/reset.css';
@import './css/font-family.css';
@import './css/media-queries.css';

.flex,
#app {
  display: flex;
}
.wrap,
#app {
  flex-wrap: wrap;
}
.ac-start,
#app {
  align-content: flex-start;
}

#app {
  padding: 1em 0;
}
#app,
body {
  min-height: 100%;
  width: 100%;
}
</style>
