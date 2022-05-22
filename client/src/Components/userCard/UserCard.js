import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css';

function UserCard({ user }) {
    return (
        <Link to={`/users/${user?.id}`} className='user-card-links'> 
            <div className='user-card' key={user?.id}>
                <img className='user-avatar' src='https://www.w3schools.com/w3images/avatar2.png'/>
                <div>
                    <h2 className='user-title'>{user?.username}</h2>
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

    )
}

export default UserCard;
