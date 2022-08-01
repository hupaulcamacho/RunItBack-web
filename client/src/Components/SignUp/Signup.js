import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();

    // form variables
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className='new-user-form'>
            <div className='userForm'>
                <h1>Sign Up</h1>

                <div className='userForm__inputContainer'>
                    <label className='userForm__inputLabel'>Email</label>
                    <input
                        value={email}
                        className='userForm__input'
                        placeholder='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='userForm__inputContainer'>
                    <label className='userForm__inputLabel'>Password</label>
                    <input
                        value={password}
                        className='userForm__input'
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

            </div>
            <div>
                Already have an account? Log In
            </div>
        </div>
    )
}
