import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="bottomnav">
          <NavLink to="/welcome">Welcome</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/payment">Payment</NavLink>
          <NavLink to="/notifications">Notifications</NavLink>
       </div>
    );
}
 
export default Navigation;