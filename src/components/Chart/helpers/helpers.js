export const colorsHelper = arr => {
  const data = arr.map(item => {
    function color() {
      if (item.name === 'Main expenses') {
        return '##FED057';
      } else if (item.name === 'Products') {
        return '#FFD8D0';
      } else if (item.name === 'Car') {
        return '#FD9498';
      } else if (item.name === 'Self care') {
        return '#C5BAFF';
      } else if (item.name === 'Child care') {
        return '#6E78E8';
      } else if (item.name === 'Household products') {
        return '#4A56E2';
      } else if (item.name === 'Education') {
        return '#81E1FF';
      } else if (item.name === 'Leisure') {
        return '#24CCA7';
      } else if (item.name === 'Other expenses') {
        return '#00AD84';
      } else if (item.name === 'Entertainment') {
        return '#EFA56F';
      }
    }
    return (item = {
      name: item.name,
      type: item.type,
      total: item.total,
      color: color(),
    });
  });
  return data;
};
