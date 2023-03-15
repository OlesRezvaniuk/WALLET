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
