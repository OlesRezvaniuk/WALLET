export const categoriesSelector = state => state.transactions.getCategories;
export const userTransactionsSelector = state => state.transactions;
export const userSummaryForPeriodSelector = state =>
  state.transactions.summaryForPeriod;
