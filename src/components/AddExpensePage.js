import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

//  const AddExpensePage = (props) => (
// 	<div>
// 		<ExpenseForm
// 			onSubmit={(expense) => {
// 				//props.dispatch(addExpense(expense));
// 				//set this dispatch on props so we can test AddExpensePage easily
// 				props.onSubmit(expense);
// 				props.history.push('/');
// 			}}
// 		/>
// 	</div>
// );

const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
