import { computed, ref } from 'vue';

const refTableWide = ref(true);

const isTableWide = computed(() => refTableWide.value);

const switchTableWide = () => {
  refTableWide.value = !refTableWide.value;
};

export { isTableWide, switchTableWide };
