import React from 'react';
import { BiLogOut } from "react-icons/bi";
import './LogoutButton.css';
import useLogout from '../../Hooks/useLogout.js';

const LogoutButton = () => {
	const {loading,logout}= useLogout()
	return (
		<div className='logout-button'>
		{!loading? (	<BiLogOut className='logout-icon' 
			onClick={logout}
			/>):(
				<span className = 'loading loading-spinner'></span>

		)}
		</div>
	);
};

export default LogoutButton;