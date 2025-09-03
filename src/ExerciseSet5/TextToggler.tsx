import React from 'react'

export default function TextToggler() {

    const [isVisible, setIsVisible] = React.useState(false);

    function handleToggleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={ handleToggleClick }>Toggle text</button>
            <div style={{ display: isVisible ? 'block' : 'none'}}>Create a component with a button and a text paragraph.
                Initially, the paragraph should be hidden. 
                When the button is clicked, toggle the visibility of the paragraph. 
            </div>
        </div>
    )
}
