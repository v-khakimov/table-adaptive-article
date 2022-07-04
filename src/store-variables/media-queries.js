import { computed, ref } from 'vue';

const refMq = ref('');
const checkMq = () => {
  const { color } = getComputedStyle(document.body);
  let mq;
  if (color === 'rgb(0, 0, 0)') mq = 'portrait';
  else if (color === 'rgb(0, 0, 1)') mq = 'landscape';
  else if (color === 'rgb(1, 0, 0)') mq = 'wide';
  else mq = 'desktop';
  refMq.value = mq;
};

const setMq = () => {
  checkMq();
  window.addEventListener('resize', checkMq);
};

const isMqPortrait = computed(() => refMq.value === 'portrait');
const isMqLandscape = computed(() => refMq.value === 'landscape');
const isMqMobile = computed(() => isMqPortrait.value || isMqLandscape.value);

export { isMqPortrait, isMqLandscape, isMqMobile, setMq };
