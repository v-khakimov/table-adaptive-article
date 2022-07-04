import { isTableWide, switchTableWide } from './computed-table-wide';

let clientWidthOld;

const watchTableWidthWithArg = (domSection) => {
  const { clientWidth } = document.documentElement;
  if (clientWidth !== clientWidthOld) {
    clientWidthOld = clientWidth;
    if (!isTableWide.value) switchTableWide();
    setTimeout(() => {
      if (domSection && domSection.offsetWidth > clientWidth) {
        switchTableWide();
      }
    }, 0);
  }
};

export { watchTableWidthWithArg };
