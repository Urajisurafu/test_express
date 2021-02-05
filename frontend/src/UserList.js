import React, { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const request = await fetch("http://localhost:4000/users", {
            });

            const allUsers = await request.json();
            setUsers(allUsers.users);
        }
        loadUsers();
    }, []);

    return (
        <div >
            <h1>Users</h1>
            <div className="user-list">
                <p>Age</p>
                <p className="name-indent">Name</p>
            </div>
            {users.map((user) => (
                <div key={user.id} className="user-list">
                    <p>{user.age}</p>
                    <p className="name-indent , name-indent-for" >{user.name}</p>
                </div>
            ))}
        </div>
    );
}