import React from 'react';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';
import './Sidebar.css';

const Sidebar = () => {
	
	return (
		<div className='sidebar-container'>
			<SearchInput />
			<div className='divider'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
