import { computed, ref } from 'vue';

const refRowsSplitter = ref(1);

const getRowsSplitter = computed(() => refRowsSplitter.value);

const setRowsSplitter = (num) => {
  refRowsSplitter.value = num;
};

export { getRowsSplitter, setRowsSplitter };
