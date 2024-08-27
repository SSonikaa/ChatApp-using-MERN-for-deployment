import React from 'react';

import Sidebar from '../../src/components/Sidebar/Siderbar';
import MessageContainer from '../../src/components/messages/MessageContainer';


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
