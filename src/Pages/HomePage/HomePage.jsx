import { Chart } from 'components/Chart/Chart';
import { Currency } from 'Pages/Currency/Currency';
import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';

export const HomePage = () => {
  // const [isModalOpen, SetIsModalOpen] = useState();
  const date = () => {
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
  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      <Currency />
      <Chart />
      <AddTransactionsModal date={date} />
    </div>
  );
};
