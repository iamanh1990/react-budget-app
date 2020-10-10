import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// store.dispatch(addExpense({ description: 'gas bill', amount: 10000, createdAt: -10 }));
// store.dispatch(addExpense({ description: 'water bill', amount: 1000, createdAt: -100 }));
// store.dispatch(addExpense({ description: 'rent bill', amount: 5000, createdAt: 15 }));

const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
