import React from 'react';
import UserCard from '../userCard/UserCard';
import './UsersList.css'

const UsersList = () => {
    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
        let url = "http://localhost:3333/users";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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