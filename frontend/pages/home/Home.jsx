import React from 'react';
import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/Sidebar/Siderbar.jsx';

import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
