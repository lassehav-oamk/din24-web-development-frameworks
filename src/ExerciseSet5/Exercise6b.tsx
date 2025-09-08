import React from 'react'
import { useState } from 'react';

export default function Exercise6() {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);

    function handleFirstNameChange(event) {   
        // This will not work
        //setUserData(userData.firstName = "Test");

        // this will not work
        //userData.firstName = event.target.value;

        // This will work
        setUserData({
            ...userData,
            // Above is a spread operator, effect same as below
            //firstName: userData.firstName,
            //lastName: userData.lastName,
            //email: userData.email,

            firstName: event.target.value
        });
    }

    function handleLastNameChange(event) {   
        setUserData({
            ...userData,
            lastName: event.target.value
        });
    }

    function handleEmailChange(event) {   
        setUserData({
            ...userData,
            email: event.target.value
        });
    }

    // altenative - on handling function to deal with all changes
    function handleUserDataChange(event, fieldName) {

        // const example = {
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // }

        // let a = 'lastName'

        // example.lastName = "Test";
        // example[fieldName] = evetnt.target.value;

        setUserData({
            ...userData,
            [fieldName]: event.target.value
        });
    }

    let output;
    if(saveButtonClicked === false) {
        output = <div>
                <div>
                    First Name: 
                    <input type="text" placeholder="First name" value={ userData.firstName }
                        onChange={(event) => handleUserDataChange(event, 'firstName')}/>
                </div>
                <div>
                    Last Name: 
                    <input type="text" placeholder="Last name" value={ userData.lastName }
                        onChange={(event) => handleUserDataChange(event, 'lastName')}/>
                </div>
                <div>
                    Email: 
                    <input type="email" placeholder="Email" value={ userData.email } 
                        onChange={ (event) => handleUserDataChange(event, 'email')} 
                    />
                </div>
                <div><button onClick={ () => setSaveButtonClicked(true)}>Save</button></div>
            </div>;
    } else {
        output = <div>
                Saved { userData.firstName } { userData.lastName } ({userData.email})
            </div>
    }

    return (
        <div>
            <h1>Exercise 6</h1>
            { output }
        </div>
    )
}
