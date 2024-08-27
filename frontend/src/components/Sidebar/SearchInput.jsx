import React from 'react';
 import { IoSearchSharp } from 'react-icons/io5';
import './SearchInput.css';
import { useState } from 'react';
import useConversation from '../../src/Zustand/useConversation';
import useGetConversations from '../../src/Hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
	const [search,setSearch]= useState("");
	const {setSelectedConversation}= useConversation()
	const {conversations} = useGetConversations();
	const handleSubmit=(e)=>{
		e.preventDefault();
        if(!search) return;
		if(search.length<3){
			return toast.error('search character must be at least 3 character long')
		}
		const conversation= conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
		if(conversation){
			setSelectedConversation(conversation)
			setSearch("")
		}else toast.error("User not found")
	}
	return (
		<form onSubmit={handleSubmit} className='search-input-form'>
			<input type='text' placeholder='Search' className='search-input' 
			value={search}
			onChange={(e)=> setSearch(e.target.value)}/>
			<button type='submit' className='search-button'>
				<IoSearchSharp className='search-button-icon' />
                
			</button>
		</form>
	);
};

export default SearchInput;
