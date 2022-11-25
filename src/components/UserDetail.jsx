import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../redux/actions';

const UserDetail = (props) => {
	let { id } = useParams();

	useEffect(() => {
		props.getUserDetail(id);
	}, []);

	return (
		<>
			<div className="detail">
				<p>ID: {id}</p>
				<p>Nombre: {props.userDetail.name}</p>
				<p>Email: {props.userDetail.email}</p>
				<p>Username: {props.userDetail.username}</p>
				<p>Phone: {props.userDetail.phone}</p>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		userDetail: state.userDetail,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserDetail: (id) => dispatch(getUserDetail(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getUserDetail } from '../redux/actions';

// const UserDetail = (props) => {
// 	// console.log(props);

// 	const { id } = useParams();

// 	useEffect(() => {
// 		props.getUserDetail(id);
// 	}, [id, props]);

// 	return (
// 		<>
// 			<p>{id}</p>
// 			<p>Holi</p>
// 			<p>{props.userDetail.name}</p>
// 		</>
// 	);
// };

// const mapStateToProps = (state) => {
// 	return {
// 		userDetail: state.userDetail,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getUserDetail: (id) => dispatch(getUserDetail(id)),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
