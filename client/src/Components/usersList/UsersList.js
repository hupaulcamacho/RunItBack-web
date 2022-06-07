import React, { useState, useEffect } from 'react';
import UserCard from '../userCard/UserCard';
import './UsersList.css'
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        let url = "https://runitback-api.herokuapp.com/users";
        // let url = 'http://localhost:3333/users/';   

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, []);

    return (
        <div className='userList'>
            <h1>Users</h1>
            <Link to='/users/new' className='add-user-link'>
                <div className='add-user'>
                    Add New User
                </div>
            </Link>
            {users.map((user) => {
                return (
                    <UserCard user={user} />
                )
            })}
        </div>
    )
}

export default UsersList;