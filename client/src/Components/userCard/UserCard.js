import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css';

function UserCard({ user }) {
    return (
        <Link to={`/users/${user?.id}`}> 
            <div className='user-card'>
                <h2>{user?.username}</h2>
                <div className='info'>
                    <div>Region: {user?.region}</div>
                    <div>Controller: {user?.controller}</div>
                    <div>Email: {user?.email}</div>
                </div>
            </div>
        </Link>

    )
}

export default UserCard;
