import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


function UserDetails() {
    let params = useParams();

    let userId = params.id

    const [ userData, setUserData ] = useState();

    useEffect(() => {
        let url = `http://localhost:3333/users/${userId}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.payload)
            setUserData(data.payload)
        })
    }, []);

    return (
        <div>
            <h1>UserDetails</h1>
        </div>
    )
}

export default UserDetails;
