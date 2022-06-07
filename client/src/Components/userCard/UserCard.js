import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './UserCard.css';

function UserCard({ user }) {
    const navigate = useNavigate();
    const deleteUser = (id) => {
        // prepare request 
        let requestOptions = {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        let url = `https://runitback-api.herokuapp.com/users/delete/${user?.id}`;

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            navigate('/users')
        }).catch(err => {

        })
    }
    return (
        <div className='user-card-container'>
            <Link to={`/users/${user?.id}`} className='user-card-links'> 
                <div className='user-card' key={user?.id}>
                    <img className='user-avatar' src='https://www.w3schools.com/w3images/avatar2.png'/>
                    <div className='user-card-inner'>
                        <div className='user-title'>{user?.username}</div>
                        <div className='info'>
                            <div>
                                <span className='info-label'>Email: </span>
                                {user?.email}
                            </div>

                            <div>
                                <span className='info-label'>Controller: </span> 
                                {user?.controller}
                            </div>

                            <div>
                                <span className='info-label'>Region: </span> 
                                {user?.region}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='delete-button' onClick={() => deleteUser()}>
                Delete
            </div>
        </div>

    )
}

export default UserCard;
