import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import { Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import Form from './components/Forms';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/users" element={<Users />} />
				<Route path="/userdetail/:id" element={<UserDetail />} />
				{/* <Route path="/form" element={<Form />} /> */}
			</Routes>
			<Form />
		</div>
	);
}

export default App;
