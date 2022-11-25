import React from 'react';

const NewUser = ({ name, username, email, id }) => {
	return (
		<>
			<div className="user">
				<h3>{name}</h3>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</>
	);
};

export default NewUser;
