import React from 'react'
import type { UserType } from './UserType';
import { useNavigate } from 'react-router';

export default function User({ userData }: { userData: UserType }) {

    const navigate = useNavigate();

    return (
        <div 
            style={{ border: '1px solid gray', margin: '5px', padding: '5px'  }}
            onClick={ () => navigate(`/user/${userData.id}`) }
        >        
            <h3>{ userData.name }</h3>
        </div>
    )
}
