import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense.', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses.', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={23} expenseTotal={23234234235} />
  );
  expect(wrapper).toMatchSnapshot();
});
