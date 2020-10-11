import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correctly with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={231} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render correctly with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={2310144} />);
	expect(wrapper).toMatchSnapshot();
});
