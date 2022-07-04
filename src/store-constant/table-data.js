const headCols = [
  [{ text: 'Version', cols: 4 }],
  ['Zetec', 'Titanium', 'ST-Line', 'Vignale'],
];

const headTitlesAll = ['Fuel', 'Engine', 'Power', 'Transmission', 'Drive'];
const headTitles = {
  'Saloon / Hatchback': [['Body', ...headTitlesAll]],
  Estate: [headTitlesAll],
};

const priceTypeNames = {
  retail: 'Retail',
  withVAT: 'incl. VAT',
  manufacturers: '+ Manufacturers',
};

/* const titlesSaloonHatchback = {
  ['Saloon', 'Petrol', 'TiVCT HYBRID Electric', '187', 'CVT automatic', 'front'],
  ['Hatchback', 'Diesel', 'Ford EcoBlue', '150', '6 Speed Manual', 'front'],
  ['Hatchback', 'Diesel', 'Ford EcoBlue', '150', '8 Speed Auto', 'front'],
  ['Hatchback', 'Diesel', 'Ford EcoBlue', '190', '8 Speed Auto', 'front'],
  ['Hatchback', 'Diesel', 'Ford EcoBlue', '190', '8 Speed Auto', 'all-wheel'],
} */
const titlesSaloonHatchback = [
  [
    'Saloon',
    'Petrol',
    'TiVCT HYBRID Electric',
    '187 PS',
    'CVT automatic',
    { text: 'front', rows: 4 },
  ],
  [
    { text: 'Hatchback', rows: 4 },
    { text: 'Diesel', rows: 4 },
    { text: 'Ford EcoBlue', rows: 4 },
    { text: '150 PS', rows: 2 },
    '6 Speed Manual',
  ],
  [{ text: '8 Speed Auto', rows: 3 }],
  [{ text: '190 PS', rows: 2 }],
  ['all-wheel'],
];
const titles = {
  'Saloon / Hatchback': titlesSaloonHatchback,
  Estate: titlesSaloonHatchback.map((row, i) => {
    const rowEstate = [...row];
    if (i < 2) rowEstate.shift();
    return rowEstate;
  }),
};

const cells = {
  'Saloon / Hatchback': {
    retail: [
      // ['Zetec', 'Titanium', 'ST-Line', 'Vignale']
      ['22,417', '23,917', '25,000', '27,167'],
      ['21,092', '22,175', '23,258', '-'],
      ['22,000', '23,500', '-', '-'],
      ['-', '24,333', '25,417', '27,583'],
      ['-', '-', '27,083', '29,250'],
    ],
    withVAT: [
      ['26,900', '28,700', '30,000', '32,600'],
      ['25,310', '26,610', '27,910', '-'],
      ['26,400', '28,200', '-', '-'],
      ['-', '29,200', '30,500', '33,100'],
      ['-', '-', '32,500', '35,100'],
    ],
    manufacturers: [
      ['27,170', '29,010', '30,310', '32,910'],
      ['25,580', '26,920', '28,220', '-'],
      ['26,710', '28,510', '-', '-'],
      ['-', '29,510', '30,810', '33,410'],
      ['-', '-', '33,165', '35,765'],
    ],
  },
  Estate: {
    retail: [
      ['23,667', '25,083', '26,167', '28,333'],
      ['21,917', '23,417', '24,500', '-'],
      ['23,167', '24,667', '-', '-'],
      ['-', '25,500', '26,583', '28,750'],
      ['-', '-', '28,250', '30,417'],
    ],
    withVAT: [
      ['28,400', '30,100', '31,400', '34,000'],
      ['26,300', '28,100', '29,400', '-'],
      ['27,800', '29,600', '-', '-'],
      ['-', '30,600', '31,900', '34,500'],
      ['-', '-', '33,900', '36,500'],
    ],
    manufacturers: [
      ['28,670', '30,410', '31,710', '34,310'],
      ['26,610', '28,410', '29,710', '-'],
      ['28,110', '30,265', '-', '-'],
      ['-', '31,265', '32,565', '35,165'],
      ['-', '-', '34,565', '37,165'],
    ],
  },
};

export { priceTypeNames, headTitles, headCols, titles, cells };
