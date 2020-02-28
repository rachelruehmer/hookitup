import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

{/* <Link to ="/:id/details">View Details</Link> */}

    return (
        <div className="container">
            <div className = "row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {users.map(user => (
                            <li key={user.id} className="list-group-item">{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default User;