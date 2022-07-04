import { computed, ref } from 'vue';
import classes from '../css/buttons-radio-grey.module.css';
import { priceTypeNames } from '../store-constant/table-data';

const buttons = Object.values(priceTypeNames);

const refPriceTypeIndex = ref(0);

const getPriceTypeIndex = computed(() => refPriceTypeIndex.value);

const setPriceTypeIndex = (index) => {
  refPriceTypeIndex.value = index;
};

const propsButtonsPriceType = computed(() => ({
  buttons,
  indexSelected: getPriceTypeIndex.value,
  classes,
}));

export { getPriceTypeIndex, propsButtonsPriceType, setPriceTypeIndex };
