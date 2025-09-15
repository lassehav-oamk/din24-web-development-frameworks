import React from 'react'
import type { UserType } from './UserType';
import { userData } from './userStore';
import { useParams } from "react-router";
import { NavLink } from 'react-router';

export default function UserDetails() {

    let params = useParams();
    console.log(params.id);

    const user : UserType | undefined = userData.find( u => u.id === Number(params.id) );
    console.log(user);

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <div>
                        <NavLink to="/">Back to user list</NavLink>                        
                    </div>                    
                </div>
                
            ) : (
                <h2>User not found</h2>
            )}
        </div>
    )
}
