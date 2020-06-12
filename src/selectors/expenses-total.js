import expenses from '../tests/fixtures/expenses';

export default (expenses) =>
  expenses.reduce((total, value) => {
    return value.amount + total;
  }, 0);
