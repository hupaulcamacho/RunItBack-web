import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// components
import UserCard from '../userCard/UserCard';

function UserDetails() {
    let params = useParams();

    let userId = params.id

    const [ userData, setUserData ] = useState();

    useEffect(() => {
        let url = `http://localhost:3333/users/${userId}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUserData(data.payload)
        })
    }, []);

    return (
        <div>
            <h1>UserDetails</h1>
            <UserCard user={userData} />
        </div>
    )
}

export default UserDetails;
