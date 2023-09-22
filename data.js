export { filters, products }

const products = [
  {
    id:1,
    title: 'Телевизор',
    description: 'Телевизор Samsung',
    params: {
      year: 2020,
      color: 'Черный',
      country: 'Япония',
      category: 'Техника',
    },
    count: 3,
    cost: 30000,
  },
  {
    id:2,
    title: 'Толстовка',
    description: 'Толстовка мужская, спортивная',
    params: {
      year: 2021,
      color: 'Белый',
      country: 'Китай',
      category: 'Строй материалы',
    },
    count: 0,
    cost: 3000,
  },
  {
    id:3,
    title: 'Кроссовки',
    description: 'Кроссовки спортивная Nike',
    params: {
      year: 2022,
      color: 'Черный',
      country: 'США',
      category: 'Одежда',
    },
    count: 9,
    cost: 4500,
  },
  {
    id:4,
    title: 'Холодильник',
    description: 'Холодильник Bosh двухкамерный',
    params: {
      year: 2022,
      color: 'Серый',
      country: 'Германия',
      category: 'Техника',
    },
    count: 3,
    cost: 20000,
  },
  {
    id:5,
    title: 'Джинсы',
    description: 'Джинсы мужские',
    params: {
      year: 2022,
      color: 'Синий',
      country: 'Украина',
      category: 'Одежда',
    },
    count: 10,
    cost: 2000,
  },
  {
    id:6,
    title: 'Джинсы',
    description: 'Джинсы женские',
    params: {
      year: 2022,
      color: 'Белый',
      country: 'Китай',
      category: 'Одежда',
    },
    count: 8,
    cost: 1500,
  },
]

const filters = [
  {
    id: 'category',
    name: 'Категория',
    values: [
      'Техника',
      'Одежда',
      'Обувь',
    ],
  },
  {
    id: 'color',
    name: 'Цвет',
    values: [
      'Черный',
      'Белый',
      'Серый',
      'Синий',
    ],
  },
  {
    id: 'year',
    name: 'Год',
    values: [
      '2020',
      '2021',
      '2022',
    ],
  },
  {
    id: 'country',
    name: 'Страна',
    values: [
      'Украина',
      'Китай',
      'Япония',
      'США',
    ],
  },
]
