import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions';
import NewUser from './NewUser';

const Form = (props) => {
	const [input, setInput] = useState({
		name: '',
		username: '',
		email: '',
	});

	const submitHandler = (event) => {
		console.log(event);
		event.preventDefault();
		props.createUser(input);
	};

	const changeHandler = (event) => {
		console.log('hola');
		const property = event.target.name;
		const value = event.target.value;

		setInput({
			...input,
			[property]: value,
		});
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form">
				<h2>Crear un usuario</h2>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={input.name}
					onChange={changeHandler}
				/>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					value={input.username}
					onChange={changeHandler}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					value={input.email}
					onChange={changeHandler}
				/>
				<input type="submit" value="SUBMIT" className="submit" />
			</form>
			{props.myUsers.map((user) => (
				<NewUser
					key={user.name}
					name={user.name}
					username={user.username}
					email={user.email}
				/>
			))}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		myUsers: state.myUsers,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (user) => dispatch(createUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
