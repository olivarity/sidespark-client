import React from 'react';
import { Link } from 'react-router-dom';

function Nav ({ auth }) {
  return (
    <nav className="navbar container">
      <div className="navbar-section">
        <Link to="/" className="navbar-brand">Sidespark</Link>
      </div>
      <div className="navbar-section">
        { auth
          ? <div>
              <Link to="/create" className="btn btn-link">Create New</Link>
              <figure className="avatar m-1">
                <img src={auth.avatar.image_48} alt={auth.name} />
              </figure>
            </div>
          : <a href="/connect/slack" className="btn btn-link">Sign in with Slack</a>
        }
      </div>
    </nav>
  )
}

export default Nav
