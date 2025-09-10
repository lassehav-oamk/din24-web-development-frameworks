import React from 'react'
import { useState } from 'react';

export default function Exercise6c() {

    const [firstName, setFirstName] = useState('Tuut');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);
    const [validationErrorVisible, setValidationErrorVisible] = useState(false);

    function handleFirstNameChange(event) {
        // new content of the input
        setFirstName(event.target.value);
    }

    function handleFormSave(event) {
        // lets do validation and check if the email state variable contains an @ sign
        if(email.includes('@') === false) {
            // validation fails
            setValidationErrorVisible(true);
        } else {
            // validation ok for @ sign, next check if there is text on left and right side of @
            const parts = email.split('@');
            if(parts.length >= 2 && parts[0].length > 0 && parts[1].length > 0) {
                // now the whole validation logic has completed and passed
                setSaveButtonClicked(true)
            } else {
                setValidationErrorVisible(true);
            }
        }
    }

    let output;
    if(saveButtonClicked === false) {
        let errorMessage;
        if(validationErrorVisible) {
            errorMessage = <div style={{ color: 'red' }}>Email field error, you must enter proper email address (for example john@doe.com)</div>
        }

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
                    { errorMessage }
                </div>
                <div><button onClick={ handleFormSave }>Save</button></div>
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
