import React from 'react'

export default function ViewA() {
  return (
    <div  style={{ width: '500px'}}>
      <h1>View A</h1>
      <p>This is View A content. The tab navigation remains visible at all times.</p>
      <p>You can switch between views using the tabs above.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h3>View A Features:</h3>
        <ul>
          <li>Persistent layout with tab navigation</li>
          <li>Clean component separation</li>
          <li>React Router 7 layout routes example</li>
        </ul>
      </div>
    </div>
  );
}