import React from 'react'

export default function StateExample() {
    // regular variable, will not cause re-render
    let text = "Hello World";

    // state variable, will cause re-render
    const [stateExampleText, setStateExampleText] = React.useState("Hello World");

    function handleClick() {
        text = "Button clicked!";
        setStateExampleText("Button clicked!");
        console.log("Button clicked, text changed to: " + text);
    }

  return (
    <div>
        <button onClick={handleClick}>Click me to display text below</button>
        <div>{ text }</div>
        <div>{ stateExampleText }</div>
    </div>
  )
}
