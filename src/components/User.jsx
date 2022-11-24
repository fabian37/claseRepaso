import React from 'react';

const User = ({ name, username, email }) => {
	return (
		<>
			<h3>{name}</h3>
			<p>{username}</p>
			<p>{email}</p>
			<hr />
		</>
	);
};

export default User;
