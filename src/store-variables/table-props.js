import { computed } from 'vue';
import colors from '../css/colors.module.css';
import flex from '../css/flex.module.css';
import gaps from '../css/gaps.module.css';
import text from '../css/text.module.css';
import {
  cells,
  headCols,
  headTitles,
  titles,
} from '../store-constant/table-data';
import { getBodyTypeIndex } from '../store-variables/body-type';
import { isMqMobile } from '../store-variables/media-queries';
import { getPriceTypeIndex } from '../store-variables/price-type';

const cellswithCl = Object.fromEntries(
  Object.entries(cells).map(([body, obj]) => [
    body,
    Object.fromEntries(
      Object.entries(obj).map(([priceType, rows]) => [
        priceType,
        rows.map((row) =>
          row.map((priceExt) => {
            let price;
            if (typeof priceExt === 'object') {
              price = priceExt;
            } else {
              price =
                priceExt === '-'
                  ? { text: '-', clAdd: [colors.grey] }
                  : { text: `£&nbsp;${priceExt}` };
            }
            if (!('clAdd' in price)) price.clAdd = [text.bold];
            return price;
          })
        ),
      ])
    ),
  ])
);

const getClOuter = computed(() => {
  const cl = [flex.fb100, gaps.mt2, text.lineHeightTable, text.center];
  if (!isMqMobile.value) cl.push(gaps.pl2, gaps.pr2);
  return cl;
});

const getClasses = computed(() => {
  const classesCells = { each: [colors.btGrey, colors.blGrey] };
  if (isMqMobile.value) {
    classesCells.colFirst = [colors.blTransparent];
  } else {
    classesCells.colLast = [colors.brGrey];
    classesCells.rowLast = [colors.bbGrey];
  }
  const classes = {
    outer: getClOuter.value,
    eachCell: [flex.flex, flex.aiCenter, flex.jcCenter, gaps.padding],
    head: {
      each: [
        text.bold,
        colors.backColor,
        colors.white,
        colors.btWhite,
        colors.blWhite,
      ],
      colFirst: [colors.blTransparent],
    },
    cells: classesCells,
    titles: Object.fromEntries(Object.entries(classesCells)),
  };
  classes.titles.each = [...classes.titles.each, colors.backGreyLight];
  return classes;
});

const headColsValues = Object.values(headCols);

const getTableProps = computed(() => ({
  headTitles: Object.values(headTitles)[getBodyTypeIndex.value],
  headCols: getBodyTypeIndex.value
    ? headColsValues[getBodyTypeIndex.value][getPriceTypeIndex.value]
    : headColsValues[getBodyTypeIndex.value],
  titles: Object.values(titles)[getBodyTypeIndex.value],
  cells: Object.values(Object.values(cellswithCl)[getBodyTypeIndex.value])[
    getPriceTypeIndex.value
  ],
  classes: getClasses.value,
}));

export { getTableProps };
