import React from 'react'

import './UserCard.css'
function UserCard({ user }) {
    return (
        <div className='user-card'>
            <h2>{user?.username}</h2>
            <div className='info'>
                <div>Region: {user?.region}</div>
                <div>Controller: {user?.controller}</div>
                <div>Email: {user?.email}</div>
            </div>
        </div>
    )
}

export default UserCard;
