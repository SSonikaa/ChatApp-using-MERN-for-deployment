import React from 'react';
import { BsSend } from "react-icons/bs";
import './MessageInput.css';
import { useState } from 'react';
import useSendMessage from '../../src/Hooks/useSendMessage';
const MessageInput = () => {
    const [message,setMessage]=useState("")
    const {loading,sendMessage}=useSendMessage()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("")
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <input
                    type='text'
                    className='input-field'
                    placeholder='Send a message'
                    value={message}
                    onChange={ (e)=> setMessage(e.target.value)}
                />
                <button type='submit' className='send-button'>
                {loading ?<div className='loading loading-spinner'></div>: <BsSend />}
                    
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
