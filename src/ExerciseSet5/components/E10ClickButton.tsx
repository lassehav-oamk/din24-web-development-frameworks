import React from 'react'

export default function E10ClickButton(
    { currentClickCount, onClick } : { currentClickCount: number, onClick: () => void }
) {

    const [localClickCount, setLocalClickCount] = React.useState(0);

    function handleClick() {
        setLocalClickCount(localClickCount + 1);
        onClick();
    }

    return (
        <button onClick={ () => handleClick() }>
            Common Click count: { currentClickCount }, local click count: {localClickCount}
        </button>
    )
}
