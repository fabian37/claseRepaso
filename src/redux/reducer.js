import { GET_USERS } from './actions';
import { GET_USER_DETAIL } from './actions';
import { CREATE_USER } from './actions';

const initialState = {
	users: [],
	userDetail: {},
	myUsers: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			};

		case GET_USER_DETAIL:
			return {
				...state,
				userDetail: action.payload,
			};

		case CREATE_USER:
			return {
				...state,
				myUsers: [...state.myUsers, action.payload],
			};

		default:
			return { ...state };
	}
};

export default rootReducer;
