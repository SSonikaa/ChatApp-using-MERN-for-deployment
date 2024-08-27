import React from 'react';
import Conversation from "./Conversation";
import './Conversations.css';
import useGetConversations from '../../Hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
	const {loading,conversations} = useGetConversations();
	return (
		<div className='conversations-container'>
			{conversations.map((conversation,idx)=>(
				<Conversation
				key={ conversation._id}
				conversation={conversation}
				emoji={getRandomEmoji()}
				lastIdx={idx=== conversations.length-1} 
				/>
			))}
			{loading ?<span className='loading loading-spinner'></span>:null}
		</div>
	);
};

export default Conversations;
