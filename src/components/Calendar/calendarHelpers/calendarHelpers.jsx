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

export function monthIndexToName() {
  const month = new Date().getMonth() + 1;
  if (month === 1) {
    return 'January';
  } else if (month === 2) {
    return 'February';
  } else if (month === 3) {
    return 'March';
  } else if (month === 4) {
    return 'April';
  } else if (month === 5) {
    return 'May';
  } else if (month === 6) {
    return 'June';
  } else if (month === 7) {
    return 'July';
  } else if (month === 8) {
    return 'August';
  } else if (month === 9) {
    return 'September';
  } else if (month === 10) {
    return 'October';
  } else if (month === 11) {
    return 'November';
  } else if (month === 12) {
    return 'December';
  }
}

export function mounthNameToIndex(e) {
  if (e === 'January') {
    return 0;
  } else if (e === 'February') {
    return 1;
  } else if (e === 'March') {
    return 2;
  } else if (e === 'April') {
    return 3;
  } else if (e === 'May') {
    return 4;
  } else if (e === 'June') {
    return 5;
  } else if (e === 'July') {
    return 6;
  } else if (e === 'August') {
    return 7;
  } else if (e === 'September') {
    return 8;
  } else if (e === 'October') {
    return 9;
  } else if (e === 'November') {
    return 10;
  } else if (e === 'December') {
    return 11;
  }
}

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
