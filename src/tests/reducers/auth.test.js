import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
	const action = {
		type: 'LOGIN',
		uid: '123abc'
	};

	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should set up logout object', () => {
	const action = {
		type: 'LOGOUT'
	};

	const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});