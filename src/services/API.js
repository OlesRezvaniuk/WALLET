import axios from 'axios';

export const getCurs = async () => {
  const { data } = await axios.get(`https://api.monobank.ua/bank/currency`);
  return data;
};
