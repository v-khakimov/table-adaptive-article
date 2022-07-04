import { computed, ref } from 'vue';
import classes from '../css/buttons-radio-color.module.css';
import { headTitles } from '../store-constant/table-data';

const buttons = Object.keys(headTitles);

const refBodyTypeIndex = ref(1);

const getBodyTypeIndex = computed(() => refBodyTypeIndex.value);

const setBodyTypeIndex = (index) => {
  refBodyTypeIndex.value = index;
};

const propsButtonsBodyType = computed(() => ({
  buttons,
  indexSelected: getBodyTypeIndex.value,
  classes,
}));

export { getBodyTypeIndex, propsButtonsBodyType, setBodyTypeIndex };
