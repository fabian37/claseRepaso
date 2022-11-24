import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<nav className="menu">
			<Link to="/">Home</Link>
			<br />

			<Link to={'/about'}>About</Link>
			<br />

			<Link to="/users">Users</Link>

			<hr />
		</nav>
	);
}

export default Navbar;
