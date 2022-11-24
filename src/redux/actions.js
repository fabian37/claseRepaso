export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_USERS, payload: data }));
	};
};
