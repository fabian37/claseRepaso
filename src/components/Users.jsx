import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';
import User from './User';

class Users extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		return (
			<>
				<div className="users">
					<h2>Soy el componente Users</h2>
					{console.log(this.props.users)}

					{/* {
					<User
						name={this.props.users[0].name}
						username={this.props.users[0].username}
						email={this.props.users[0].email}
					/>
				} */}

					{this.props.users.map((user) => (
						<User
							key={user.id}
							name={user.name}
							username={user.username}
							email={user.email}
							id={user.id}
						/>
					))}
				</div>
			</>
		);
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
