import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNav = (props) => {
  const [open, setOpen] = useState(false);
  const activeMenu = (open) ? "active-menu" : "inactive-menu";

  const logOut = () => {
    fetch(`http://localhost:3000/users/sign_out?user_id=${props.userId}`, {
      method: 'DELETE'
    });
    props.setUserId("");
    props.location.push("/meals");
  }
  return (
    <div className="top-nav">
      <div className="menu-button" onClick={() => { setOpen(!open) }} >
        <span className="iconify" data-icon="ci:hamburger"></span>
      </div>
      <div className={activeMenu} >
        {
          props.userId === "" ?
            <React.Fragment>
              <Link to='/login'>Log in</Link>
              <Link to='/sign_up'>Sign Up</Link>

            </React.Fragment>
            :
            <React.Fragment>
              <div>Profile</div>
              <Link to={`/users/${props.userId}/orders`}>Orders</Link>
              <div className="logout-button" onClick={logOut} >Log out</div>
            </React.Fragment>
        }

      </div>
      <image></image>
    </div>
  )
}

export default TopNav;