import React from 'react'
import ContactItem from './3ContactItem'

export default function ContactList(props) {
    console.log(props.contactData);
    let contactItems = [];
    for( let i = 0; i < props.contactData.length; i++ ) {
        let outputItem = <ContactItem name={ props.contactData[i].name } address={ props.contactData[i].address }/>
        contactItems.push(outputItem);
    }

    return (
        <div>
            <h1>Exercise set 3, exercise 4 - contact list</h1>
            { contactItems }
            {/* <ContactItem name="Max Adans" address="Example 1"/>
            <ContactItem name="Max Payne" address="Example 2"/>
            <ContactItem name="Max Mustermann" address="Example 3"/>
            <ContactItem name="Max Power" address="Example 4"/>
            <ContactItem name="Maximilian" address="Example 5"/> */}
        </div>
    )
}
