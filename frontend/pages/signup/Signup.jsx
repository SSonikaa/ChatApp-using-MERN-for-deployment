import React from 'react';
import './SignUp.css';
import GenderCheckbox from "./GenderCheckbox";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import useSignup from '../../src/Hooks/useSignup';
const SignUp = () => {
	const [inputs,setInputs]= useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:'',
		gender:''
	})
	const {loading,signup}=useSignup()
	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
	const handleSubmit=async(e)=>{
		e.preventDefault();
		await signup(inputs)
	}
	return (
		<div className='signup-container' onSubmit={ handleSubmit}>
			<div className='signup-box'>
				<h1 className='signup-title'>
					Sign Up <span>TwirlyChat</span>
				</h1>

				<form className='signup-form'>
					<div className='form-group'>
						<label>
							<span>Full Name</span>
						</label>
						<input type='text' placeholder='Enter your name'
						value={(inputs.fullName)}
						onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}
						/>
					</div>

					<div className='form-group'>
						<label>
							<span>Username</span>
						</label>
						<input type='text' placeholder='Enter Username'
						value={(inputs.username)}
						onChange={(e)=>setInputs({...inputs, username: e.target.value})} />
					</div>

					<div className='form-group'>
						<label>
							<span>Password</span>
						</label>
						<input type='password' placeholder='Enter Password' 
						value={(inputs.password)}
						onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
					</div>

					<div className='form-group'>
						<label>
							<span>Confirm Password</span>
						</label>
						<input type='password' placeholder='Confirm Password' 
						value={(inputs.confirmPassword)}
						onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<Link to={"/login"} className='signup-link' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='signup-button'
						disabled={loading}
						>
							{loading ?<span className='loading loading-spinner'></span>:"Sign Up"}

							
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
