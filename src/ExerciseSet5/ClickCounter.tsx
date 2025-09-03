import React from 'react'

export default function ClickCounter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={ () => setCount(count + 1) }>Click Counter</button>
            <div>You have clicked the button { count } times</div>
        </div>
    )
}
