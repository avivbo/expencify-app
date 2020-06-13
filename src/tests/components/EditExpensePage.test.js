import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, removeExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      startEditExpense={startEditExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle startEditExpense', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startEditExpense).toHaveBeenLastCalledWith(
//     expenses[2].id,
//     expenses[2]
//   );
// });

// test('should handle removeExpense', () => {
//   wrapper.find('button').simulate('click');
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(removeExpense).toHaveBeenLastCalledWith({
//     id: expenses[2].id
//   });
// });
