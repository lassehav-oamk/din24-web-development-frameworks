import React from 'react'

export default function ColorChange({ defaultColor, hoverColor } : { defaultColor: string, hoverColor: string }) {

    const [color, setColor] = React.useState(defaultColor);

  return (
    <div
        onMouseEnter={() => setColor(hoverColor)}
        onMouseLeave={() => setColor(defaultColor) }
        style={{ width: '100px', height: '200px', backgroundColor: color }}>
        Hover to change colour
    </div>
  )
}
