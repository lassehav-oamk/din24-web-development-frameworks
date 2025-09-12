import React from 'react'

import { NavLink, useNavigate } from 'react-router'

export default function ViewA({ clickCount }: { clickCount: number }) {
    const navigate = useNavigate();

    function goToViewC() {
        // programmatic navigation to ViewC
        navigate("/view-c");
    }

    return (
        <div>
        <h1>ViewA</h1>
        <p>Click count: {clickCount}</p>
        <NavLink to="/view-b">Go to ViewB</NavLink>
        <button onClick={goToViewC}>Go to view C programmatically</button>
        </div>
    )
}
