import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: -1
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		description: 'food bill',
		amount: 10,
		createdAt: 0,
		note: 'abc'
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense by id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '1',
		updates: {
			description: 'sauna'
		}
	};
	const state = expensesReducer(expenses, action);

	expect(state[0].description).toBe('sauna');
});

test('should not edit if expense not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '5',
		updates: {
			description: 'sauna'
		}
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [ expenses[0] ]
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0] ]);
});
