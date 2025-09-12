import { RouterProvider } from "react-router/dom";
import { Outlet, NavLink } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: '20px', borderBottom: '2px solid #ccc', marginBottom: '20px', width: '400px'}}>
        <h2>Layout Route Demo - Tab Navigation</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <NavLink 
            to="/"
            style={({ isActive }) => ({
              padding: '10px 20px',
              textDecoration: 'none',
              backgroundColor: isActive ? '#007bff' : '#e9ecef',
              color: isActive ? 'white' : '#495057',
              borderRadius: '4px',
              border: '1px solid #ced4da'
            })}
          >
            View A
          </NavLink>
          <NavLink 
            to="/view-b"
            style={({ isActive }) => ({
              padding: '10px 20px',
              textDecoration: 'none',
              backgroundColor: isActive ? '#007bff' : '#e9ecef',
              color: isActive ? 'white' : '#495057',
              borderRadius: '4px',
              border: '1px solid #ced4da'
            })}
          >
            View B
          </NavLink>
        </div>
      </nav>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}