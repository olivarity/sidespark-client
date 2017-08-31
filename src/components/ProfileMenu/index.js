import React from 'react';
import { Link } from 'react-router-dom';

function ProfileMenu({ auth, isVisible }) {
  return (
    <ul className={'menu menu-right ' + (isVisible ? '' : 'd-none')}>
      <span className="text-bold">{auth.name}</span>
      <li className="divider" />
      <li className="menu-item">
        <Link to="/create">New Project</Link>
      </li>
      <li className="menu-item">
        <a href="/connect/logout">Sign Out</a>
      </li>
    </ul>
  )
}

export default ProfileMenu;
