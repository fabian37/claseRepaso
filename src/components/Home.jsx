import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="home">
					<h1>Estamos en el Home</h1>
					<p>Bienvienidos al repaso 😎</p>
				</div>
			</>
		);
	}
}

export default Home;
