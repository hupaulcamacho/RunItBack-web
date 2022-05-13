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
        let url = `https://runitback-api.herokuapp.com/users/${userId}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUserData(data.payload)
        })
    }, []);

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
                        <input value='username' className='userForm__input' placeholder={userData?.username}/>
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Email</label>
                        <input value='email' className='userForm__input' placeholder={userData?.email}/>
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Region</label>
                        <input value='region' className='userForm__input' placeholder={userData?.region}/>
                    </div>

                    <div className='userForm__inputContainer'>
                        <label className='userForm__inputLabel'>Controller</label>
                        <input value='controller'className='userForm__input' placeholder={userData?.controller}/>
                    </div>
                    <div className='saveChanges__button'>
                        Save Changes
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetails;
