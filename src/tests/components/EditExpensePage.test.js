import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpense;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[0]}
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
		/>
	);
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
	wrapper.find('button').simulate('click');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
	expect(history.push).toHaveBeenLastCalledWith('/');
});
