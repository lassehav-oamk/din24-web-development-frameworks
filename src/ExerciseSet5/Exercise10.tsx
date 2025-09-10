import React, { useState } from 'react'
import E10ClickButton from './components/E10ClickButton'

export default function Exercise10() {

    const [clickCount, setClickCount] = useState(0);

    function increaseClickCount() {
        setClickCount(clickCount + 1);
    }

    function helloToConsole() {
        console.log('Hello from Exercise 10');
    }

    return (
        <div>
            <h1>Exercise 10 - lifted state</h1>

            <p>Click counter</p>
            <h2>{ clickCount }</h2>

            <p>Click any button to increase the click counter</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <E10ClickButton currentClickCount={ clickCount } onClick={ increaseClickCount }/>
                <E10ClickButton currentClickCount={ clickCount } onClick={ increaseClickCount } />
                <E10ClickButton currentClickCount={ clickCount } onClick={ increaseClickCount }/>
                <E10ClickButton currentClickCount={ clickCount } onClick={ helloToConsole }/>            
            </div>

        </div>
    )
}
