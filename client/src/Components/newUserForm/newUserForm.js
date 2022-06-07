import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './newUserForm.css';

function NewUserForm() {
    const navigate = useNavigate();

    // form variables
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ region, setRegion ] = useState('');
    const [ controller, setController ] = useState('');

    const createUser = () => {
        // prepare request body
        let requestOptions = {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, region, controller })
        }
        // let url = `http://localhost:3333/users/${userId}`
        let url = `https://runitback-api.herokuapp.com/users/new`

        // post request with fetch
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            setUsername('')
            setEmail('')
            setRegion('')
            setController('')
            navigate('/users')
        }).catch(err => {
            // let user know of error
        })
    }

    return (
        <div className='new-user-form'>
            <h1>Add New User</h1>
            <div className='userForm'>
                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Username</label>
                        <input 
                            value={username} 
                            className='userForm__input' 
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

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
                        <label className='userForm__inputLabel'>Region</label>
                        <input 
                            value={region} 
                            className='userForm__input' 
                            placeholder='region'
                            onChange={(e) => setRegion(e.target.value)}
                        />
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Controller</label>
                        <input 
                            value={controller} 
                            className='userForm__input' 
                            placeholder='controller'
                            onChange={(e) => setController(e.target.value)}
                        />
                    </div>
                    <div className='saveChanges__button' onClick={() => createUser()}>
                        Create
                    </div>
                </div>
        </div>
    )
}

export default NewUserForm;