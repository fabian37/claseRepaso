import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';

class Users extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		return <h2>Soy el componente Users</h2>;
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => dispatch(getUsers()),
	};
};

// export default Users;
export default connect(mapStateToProps, mapDispatchToProps)(Users);
