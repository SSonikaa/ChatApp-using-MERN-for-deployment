import React from 'react';
import './Conversation.css';
import useConversation from '../../Zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx,emoji}) => {
	const {selectedConversation,setSelectedConversation}=useConversation()
	const isSelected = selectedConversation?._id=== conversation._id;
	const {onlineUsers}=useSocketContext()
	const isOnline = onlineUsers.includes(conversation._id)
	return (
		<>
			<div className={`conversation
				${isSelected?"bg-sky-500" :""}
			`}
			onClick={()=> setSelectedConversation(conversation)}>
				<div className= {`avatar ${isOnline?"online": " "}`}>
					<img
						src={conversation.profilePic}
						alt='user avatar'
					/>
				</div>
				<div className='conversation-content'>
					<div className='conversation-header'>
						<p>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className='divider' />}
			
		</>
	);
};

export default Conversation;
