import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
	const state = filterReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should setup sortBy to amount', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const action = { type: 'SORT_BY_DATE' };

	const state = filterReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const action = { type: 'SET_TEXT_FILTER', text: 'abc' };
	const state = filterReducer(undefined, action);

	expect(state.text).toBe(action.text);
});

test('should set startDate filter', () => {
	const action = { type: 'SET_START_DATE', startDate: moment(0) };
	const state = filterReducer(undefined, action);

	expect(state.startDate).toBe(action.startDate);
});

test('should set endDate filter', () => {
	const action = { type: 'SET_END_DATE', endDate: moment(0) };
	const state = filterReducer(undefined, action);

	expect(state.endDate).toBe(action.endDate);
});
