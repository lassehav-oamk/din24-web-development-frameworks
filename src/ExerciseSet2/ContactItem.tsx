import React from 'react'

export default function ContactItem(props) {    

    console.log(props);        

    return (
        <div style={{
                border: '1px solid black',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '8px',
                width: '250px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
            <h3>{ props.name }</h3>
            <p>{ props.address }</p>
        </div>
    )
}
