export const dateChooseData = {
  mounth: [
    'January',
    'February ',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  year: [
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
  ],
};

export function convertMounth(e) {
  const index = dateChooseData.mounth.indexOf(e.target.innerText);
  if (e.target.innerText === 'February') {
    return '02';
  }
  if (index < 9) {
    return `0${index + 1}`;
  }
  return index + 1;
}

export const date = () => {
  const date = new Date();
  function day() {
    if (date.getUTCDate() < 10) {
      return `0${date.getUTCDate()}`;
    }
    return date.getUTCDate();
  }
  function mounth() {
    if (date.getUTCMonth() + 1 < 10) {
      return `0${date.getUTCMonth() + 1}`;
    }
    return date.getUTCMonth() + 1;
  }
  const data = {
    render: { day: day(), mounth: mounth(), year: date.getUTCFullYear() },
    response: date.toISOString(),
  };
  return data;
};
