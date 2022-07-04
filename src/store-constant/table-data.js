const headCols = {
  'Saloon / Hatchback': [
    [{ text: 'Version', cols: 4 }],
    ['Zetec', 'Titanium', 'ST-Line', 'Vignale'],
  ],
  'Many Columns': [
    [
      [{ text: 'Version', cols: 7 }],
      [
        'Zetec',
        'Titanium',
        'ST-Line',
        'Vignale',
        'Zetec New',
        'Titanium New',
        'ST-Line New',
      ],
    ],
    [
      [
        { text: 'Version Old', cols: 4 },
        { text: 'Version New', cols: 3 },
      ],
      [
        'Zetec',
        'Titanium',
        'ST-Line',
        'Vignale',
        'Zetec',
        'Titanium',
        'ST-Line',
      ],
    ],
    [
      [
        { text: ' Old', cols: 4 },
        { text: 'Now', cols: 3 },
        { text: 'New', cols: 4 },
        { text: 'Future', cols: 2 },
      ],
      [
        'Zetec',
        'Titanium',
        'ST-Line',
        'Vignale',
        'Zetec',
        'Titanium',
        'ST-Line',
        'Zetec',
        'Titanium',
        'ST-Line',
        'Vignale',
        'Zetec',
        'Titanium',
      ],
    ],
  ],
};

const headTitlesAll = ['Fuel', 'Engine', 'Power', 'Transmission', 'Drive'];
const headTitles = {
  'Saloon / Hatchback': [['Body', ...headTitlesAll]],
  'Many Columns': [headTitlesAll],
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
  'Many Columns': titlesSaloonHatchback.map((row, i) => {
    const rowManyColumns = [...row];
    if (i < 2) rowManyColumns.shift();
    return rowManyColumns;
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
  'Many Columns': {
    retail: [
      [
        '23,667',
        '25,083',
        '26,167',
        { text: '2 columns', cols: 2 },
        '29,083',
        { text: 'last column' },
      ],
      ['21,917', '23,417', '24,500', '-', '28,917', '29,417', '30,500'],
      ['23,167', '24,667', '-', '-', '29,167', '29,667', '-'],
      ['-', '25,500', '26,583', '28,750', '-', '30,500', '31,583'],
      ['-', '-', '28,250', '30,417', '-', '-', '32,250'],
    ],
    withVAT: [
      [
        '28,400',
        '30,100',
        { text: '3&nbsp;to&nbsp;[2,1]', cols: 3 },
        '34,100',
        { text: 'last column' },
      ],
      [
        '26,300',
        '28,100',
        '29,400',
        { text: '3&nbsp;to&nbsp;[1,2]', cols: 3 },
        '31,400',
      ],
      ['27,800', '29,600', '-', '-', '30,800', '31,600', '-'],
      ['-', '30,600', '31,900', '34,500', '-', '32,600', '32,900'],
      ['-', '-', '33,900', '36,500', '-', '-', '34,900'],
    ],
    manufacturers: [
      [
        '28,400',
        '30,100',
        '31,400',
        { text: '£&nbsp;34,000', cols: 2 },
        '34,100',
        '34,400',
        '28,400',
        '30,100',
        '31,400',
        { text: '£&nbsp;34,000', cols: 2 },
        '34,100',
      ],
      [
        '26,300',
        '28,100',
        '29,400',
        '-',
        '30,300',
        '31,100',
        '31,400',
        '26,300',
        '28,100',
        '29,400',
        '-',
        '30,300',
        '31,100',
      ],
      [
        '27,800',
        '29,600',
        '-',
        '-',
        '30,800',
        '31,600',
        '-',
        '27,800',
        '29,600',
        '-',
        '-',
        '30,800',
        '31,600',
      ],
      [
        '-',
        '30,600',
        '31,900',
        '34,500',
        '-',
        '32,600',
        '32,900',
        '-',
        '30,600',
        '31,900',
        '34,500',
        '-',
        '32,600',
      ],
      [
        '-',
        '-',
        '33,900',
        '36,500',
        '-',
        '-',
        '34,900',
        '-',
        '-',
        '33,900',
        '36,500',
        '-',
        '-',
      ],
    ],
  },
};

export { priceTypeNames, headTitles, headCols, titles, cells };
