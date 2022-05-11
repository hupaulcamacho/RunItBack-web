import React, { useState, useEffect } from 'react';
import UserCard from '../userCard/UserCard';
import './UsersList.css'

const UsersList = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3333/users";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, []);

    return (
        <div className='userList'>
            <h1>Users</h1>
            {users.map((user) => {
                return (
                    <UserCard user={user} />
                )
            })}
        </div>
    )
}

export default UsersList;