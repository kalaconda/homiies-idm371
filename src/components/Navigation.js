import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div class="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/payment">Payment</NavLink>
       </div>
    );
}
 
export default Navigation;