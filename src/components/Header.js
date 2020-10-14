import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogin, startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<div>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create
		</NavLink>
		<button onClick={startLogout}>Logout</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
