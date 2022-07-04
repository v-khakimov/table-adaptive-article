import { computed, ref } from 'vue';

const refHeadIndent = ref(0);
const getHeadIndent = computed(() => refHeadIndent.value);

let topMin;
const setHeadIndentFromDom = (domSection, propsCellsColsLength) => {
  if (domSection) {
    const { top, height } = domSection.getBoundingClientRect();
    if (!topMin) topMin = top;
    const topMax = window.innerHeight - height;
    let prc = (topMin - top) / (topMin - topMax);
    if (prc > 1) prc = 1;
    else if (prc < 0) prc = 0;
    prc = Math.round(prc * (propsCellsColsLength - 1));
    refHeadIndent.value = prc;
  }
};

const resetIndent = () => {
  refHeadIndent.value = 0;
  topMin = undefined;
};

export { getHeadIndent, resetIndent, setHeadIndentFromDom };
