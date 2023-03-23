import { Chart } from 'components/Chart/Chart';
import { StatisticsTable } from 'components/StatisticsTable/StatisticsTable';
import { Container } from './StatisticsPage.styled';
import { colorsHelper } from 'components/Chart/helpers/helpers';
import { userSummaryForPeriodSelector } from 'redux/transactions/transactionsSelector';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Title, ContentBox } from './StatisticsPage.styled';

export const StatisticsPage = () => {
  const transactionsSummary = useSelector(userSummaryForPeriodSelector);

  const data = () => {
    if (transactionsSummary) {
      const summaryExpense = transactionsSummary.expenseSummary;
      const categoriesSummary = transactionsSummary.categoriesSummary.filter(
        item => item.type === 'EXPENSE'
      );
      const itemsRefactoring = colorsHelper(categoriesSummary);
      // return color;
      return {
        summary: Math.abs(summaryExpense),
        items: itemsRefactoring,
      };
    }
  };

  return (
    <Container>
      <Title>Statistics</Title>
      <ContentBox>
        <Chart data={data()} />
        <StatisticsTable data={data()} />
      </ContentBox>
    </Container>
  );
};
