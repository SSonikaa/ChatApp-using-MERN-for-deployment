import React from 'react';
import './Login.css';
import {Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../src/Hooks/useLogin';
const Login = () => {
	const [username, setUsername] = useState("");
	const [password,setPassword] = useState("");
	const {loading, login} = useLogin()
	const handleSubmit=async (e)=>{
         e.preventDefault();
		 await login(username,password)
	}

	return (
		<div className='login-container'>
			<div className='login-box'>
				<h1 className='login-title'>
					Login
					<span> TwirlyChat</span>
				</h1>
				<form className='login-form' onSubmit={handleSubmit}>
					<div className='form-group'>
						<label>
							<span>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter Username'
							value={username}
							onChange={(e)=> setUsername(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label>
							<span>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							value={password}
							onChange={(e)=> setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='login-link'>
						{"Don't"} have an account?
					</Link>
					<div>
						<button className='login-button'disabled={loading}>
						
								{loading ?<span className='loading loading-spinner'></span>:"login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;


