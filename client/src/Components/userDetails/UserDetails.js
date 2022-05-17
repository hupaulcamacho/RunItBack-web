import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// components import
import UserCard from '../userCard/UserCard';

import './UserDetails.css';

function UserDetails() {
    let params = useParams();

    let userId = params.id;

    // for user card
    const [ userData, setUserData ] = useState();

    // form variables
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ region, setRegion ] = useState('');
    const [ controller, setController ] = useState('');


    useEffect(() => {
        // let url = `https://runitback-api.herokuapp.com/users/${userId}`;
        let url = `http://localhost:3333/users/${userId}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUserData(data.payload)
        })
    }, []);

    const updateStudent = () => {
        // prepare request body
        let requestOptions = {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, region, controller})
        }
        let url = `http://localhost:3333/users/${userId}`
        // let url = 'https://runitback-api.herokuapp.com/users/new'

        // post request with fetch
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            setUsername('')
            setEmail('')
            setRegion('')
            setController('')
        }).catch(err => {
            // let user know of error
        })
    }

    return (
        <div>
            {/* <h1>UserDetails</h1> */}
            <UserCard user={userData} />
            <div className='user-settings'>
                <h2>Profile Settings</h2>
                <p>Change identifying details for this user's account</p>
                <div className='userForm'>
                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Username</label>
                        <input 
                            value={username} 
                            className='userForm__input' 
                            placeholder={userData?.username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Email</label>
                        <input 
                            value={email} 
                            className='userForm__input' 
                            placeholder={userData?.email}
                            onChange={(e) => setEmail(e.target.value)}                            
                        />
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Region</label>
                        <input 
                            value={region} 
                            className='userForm__input' 
                            placeholder={userData?.region}
                            onChange={(e) => setRegion(e.target.value)}
                        />
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Controller</label>
                        <input 
                            value={controller} 
                            className='userForm__input' 
                            placeholder={userData?.controller}
                            onChange={(e) => setController(e.target.value)}
                        />
                    </div>
                    <div className='saveChanges__button' onClick={() => updateStudent()}>
                        Save Changes
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetails;
