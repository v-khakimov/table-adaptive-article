<script setup>
import { computed } from 'vue';
import flex from '../css/flex.module.css';
import gaps from '../css/gaps.module.css';
import {
  propsButtonsBodyType,
  setBodyTypeIndex,
} from '../store-variables/body-type';
import { isMqPortrait } from '../store-variables/media-queries';
import {
  propsButtonsPriceType,
  setPriceTypeIndex,
} from '../store-variables/price-type';
import CommonButtonsRadio from './CommonButtonsRadio.vue';

const getSectionCl = computed(() => [
  isMqPortrait.value ? flex.fb100 : flex.fg1,
  flex.flex,
  flex.aiCenter,
  gaps.pt,
  gaps.pb,
  gaps.pl2,
  gaps.pr2,
]);
</script>

<template>
  <section :class="getSectionCl">
    <h5 :class="$style.title">Body:</h5>
    <CommonButtonsRadio
      v-bind="propsButtonsBodyType"
      @select-button-index="setBodyTypeIndex"
    />
  </section>

  <section :class="getSectionCl">
    <h5 :class="$style.title">Price:</h5>
    <CommonButtonsRadio
      v-bind="propsButtonsPriceType"
      @select-button-index="setPriceTypeIndex"
    />
  </section>
</template>

<style module>
.title {
  composes: pr from '../css/gaps.module.css';
  composes: normal from '../css/text.module.css';
  composes: grey from '../css/colors.module.css';
}
</style>
