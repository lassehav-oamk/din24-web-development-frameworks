import React from 'react'
import { useState } from 'react';

export default function Exercise6() {

    const [firstName, setFirstName] = useState('Tuut');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);

    function handleFirstNameChange(event) {
        // new content of the input
        setFirstName(event.target.value);
    }

    let output;
    if(saveButtonClicked === false) {
        output = <div>
                <div>
                    First Name: 
                    <input type="text" placeholder="First name" value={ firstName }
                        onChange={handleFirstNameChange}/>
                </div>
                <div>
                    Last Name: 
                    <input type="text" placeholder="Last name" value={ lastName }
                        onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <div>
                    Email: 
                    <input type="email" placeholder="Email" value={ email } 
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div><button onClick={ () => setSaveButtonClicked(true)}>Save</button></div>
            </div>;
    } else {
        output = <div>
                Saved { firstName } { lastName } ({email})
            </div>
    }

    return (
        <div>
            <h1>Exercise 6</h1>
            { output }
        </div>
    )
}
