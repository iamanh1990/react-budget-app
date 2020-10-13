import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filterReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
