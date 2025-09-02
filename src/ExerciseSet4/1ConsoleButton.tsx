import React from 'react'

export default function ConsoleButton({ consoleText } : { consoleText: string }) {

    return (
        <div>
            <button onClick={() => console.log(consoleText)}>Console button</button>
        </div>
    )
}
