import { Box, ArrowIcon, Button, Text } from './PaginationController.styled';

export const PaginationController = ({ page, TransactionsData, setPage }) => {
  const handleChangePage = e => {
    const length =
      Math.ceil(TransactionsData().length / page.step) * page.step - page.step;
    if (e.target.id === 'nextPageButton') {
      if (page.state.to > length) {
        return;
      }
      setPage({
        ...page,
        state: {
          is: page.state.is + page.step,
          to: page.state.to + page.step,
        },
      });
    } else if (e.target.id === 'previousPageButton') {
      if (page.state.is === 0) {
        return;
      }
      setPage({
        ...page,
        state: {
          is: page.state.is - page.step,
          to: page.state.to - page.step,
        },
      });
    }
  };

  return (
    <Box>
      <Button type="button" id="previousPageButton" onClick={handleChangePage}>
        <ArrowIcon position="left" />
      </Button>
      <Text>{page.state.is / page.step + 1}</Text>
      <Button type="button" id="nextPageButton" onClick={handleChangePage}>
        <ArrowIcon position="right" />
      </Button>
    </Box>
  );
};
