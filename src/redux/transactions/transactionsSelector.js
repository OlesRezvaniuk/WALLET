export const categoriesSelector = state => state;
export const userTransactionsSelector = state => state.transactions;
export const userSummaryForPeriodSelector = state =>
  state.transactions.summaryForPeriod;
export const allUserTransactionsArr = state => state.transactions.transaction;
