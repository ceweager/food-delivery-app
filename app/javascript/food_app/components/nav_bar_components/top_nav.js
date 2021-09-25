import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNav = (props) => {
  console.log
  const [open, setOpen] = useState(false);
  const activeMenu = (open) ? "active-menu" : "inactive-menu";
  return (
    <div className="top-nav">
      <div className="menu-button" onClick={() => { setOpen(!open) }} >
        <span className="iconify" data-icon="ci:hamburger"></span>
      </div>
      <div className={activeMenu} >
        <Link to='/sign_up'>Sign Up</Link>
        <Link to='/login'>Log in</Link>
        <div>Profile</div>
        <div>Log Out</div>
      </div>
      <image></image>
    </div>
  )
}

export default TopNav;