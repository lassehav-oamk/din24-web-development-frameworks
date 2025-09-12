import React from 'react'

export default function ViewB() {
  return (
    <div style={{ width: '500px'}}>
      <h1>View B</h1>
      <p>This is View B content. Notice how the layout persists across route changes.</p>
      <p>The tab navigation stays visible and functional.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '5px' }}>
        <h3>View B Highlights:</h3>
        <ul>
          <li>Shared layout component with Outlet</li>
          <li>Nested route configuration</li>
          <li>Active tab styling with NavLink</li>
        </ul>
      </div>
    </div>
  );
}