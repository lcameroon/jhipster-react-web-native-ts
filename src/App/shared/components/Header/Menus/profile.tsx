import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

import { NavDropdown } from './home';

const profileMenuItemsAuthenticated = (
  <>
    <DropdownItem tag={Link} to="/profile/settings">
      <FontAwesomeIcon icon="wrench" />
      <span className="ml-2">Settings</span>
    </DropdownItem>
    <DropdownItem tag={Link} to="/profile/password">
      <FontAwesomeIcon icon="lock" />
      <span className="ml-2">Password</span>
    </DropdownItem>
    <DropdownItem tag={Link} to="/logout">
      <FontAwesomeIcon icon="sign-out-alt" />
      <span className="ml-2">Sign out</span>
    </DropdownItem>
  </>
);

const profileMenuItems = (
  <>
    <DropdownItem id="login-item" tag={Link} to="/login">
      <span className="d-inline-block" style={{ width: 20 }}>
        <FontAwesomeIcon icon="sign-in-alt" />
      </span>
      <span className="ml-2">Log in</span>
    </DropdownItem>
    <DropdownItem tag={Link} to="/register">
      <FontAwesomeIcon icon="user-plus" />
      <span className="ml-2">Register</span>
    </DropdownItem>
  </>
);

export const ProfileMenu = ({ isAuthenticated = false }) => (
  <NavDropdown icon="user-circle" name="Profile" id="profile-menu">
    {isAuthenticated ? profileMenuItemsAuthenticated : profileMenuItems}
  </NavDropdown>
);

export default ProfileMenu;
