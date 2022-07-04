<script setup>
import { setMq } from './store-variables/media-queries';

setMq();
</script>

<template>
  <p>There will be an adaptive table here.</p>
</template>

<style>
@import './css/reset.css';
@import './css/font-family.css';
@import './css/media-queries.css';

#app {
  padding: 1em 0;
}
#app,
body {
  min-height: 100%;
  width: 100%;
}
</style>
