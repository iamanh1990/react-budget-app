import moment from 'moment';
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';

test('should setup set startdate action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should setup set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should set up setTextFilter action object', () => {
	const action = setTextFilter('abc');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'abc'
	});
});

test('should setup sortByAmount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should setup sortByDate action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});
