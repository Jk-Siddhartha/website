import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
      <>
        <div className="navbar">
            <nav>
                <ul>
                    <NavLink to="/" className="Navlink">UserMania</NavLink>
                    <NavLink to="/allusers" className="Navlink">All Users</NavLink>
                    <NavLink to="/adduser" className="Navlink">Add User</NavLink>
                </ul>
            </nav>
        </div>
      </>
  );
};

export default Navbar;
