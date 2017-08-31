import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    const auth = this.props.auth;
    return (
      <nav className="navbar container">
        <div className="navbar-section">
          <Link to="/" className="navbar-brand">Sidespark</Link>
        </div>
        <div className="navbar-section">
          { auth
            ? <div>
                <Link to="/create" className="btn btn-link">Create New</Link>
                <figure className="avatar m-1" onClick={this.clickHandler}>
                  <img src={auth.avatar.image_48} alt={auth.name} />
                </figure>
                <ProfileMenu auth={auth} isVisible={this.state.showMenu} />
              </div>
            : <a href="/connect/slack" className="btn btn-link">Sign in with Slack</a>
          }
        </div>
      </nav>
    )
  }

  clickHandler() {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu }
    });
  }
}

export default Nav
