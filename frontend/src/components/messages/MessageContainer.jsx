import React from 'react';
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import './MessageContainer.css';
import { TiMessages } from "react-icons/ti";

import useConversation from '../../Zustand/useConversation';
import { useEffect } from 'react';

import { useAuthContext } from '../../context/AuthContext';

const NoChatSelected = () => {
	const{ authUser} = useAuthContext(); 
	return (
		<div className='no-chat-selected-container'>
			<div className='no-chat-selected-content'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='no-chat-selected-icon' />
			</div>
		</div>
	);
};

const MessageContainer = () => {
	const {selectedConversation,setSelectedConversation}=useConversation()
	useEffect(()=>{

		return()=>setSelectedConversation(null)
	},[setSelectedConversation])
	return (
		<div className='message-container'>
			{!selectedConversation ? (<NoChatSelected />) : (
				<>
					{/* Header */}
					<div className='message-header'>
						<span className='label-text'>To:</span> <span className='header-text'>{selectedConversation.fullName}</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;
