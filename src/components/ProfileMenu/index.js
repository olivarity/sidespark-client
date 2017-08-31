import React from 'react';

function ProfileMenu({ auth, isVisible }) {
  return (
    <ul className={'menu menu-right ' + (isVisible ? '' : 'd-none')}>
      <span className="text-bold">{auth.name}</span>
      <li className="divider" />
      <li className="menu-item">
        <a href="/connect/logout">Sign Out</a>
      </li>
    </ul>
  )
}

export default ProfileMenu;
