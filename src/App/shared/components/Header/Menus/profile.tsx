import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

import { NavDropdown } from './home';

const profileMenuItemsAuthenticated = (
  <>
    <DropdownItem tag={Link} to="/profile/settings">
      <FontAwesomeIcon icon="wrench" /> Settings
    </DropdownItem>
    <DropdownItem tag={Link} to="/profile/password">
      <FontAwesomeIcon icon="clock" /> Password
    </DropdownItem>
    <DropdownItem tag={Link} to="/logout">
      <FontAwesomeIcon icon="sign-out-alt" /> Sign out
    </DropdownItem>
  </>
);

const profileMenuItems = (
  <>
    <DropdownItem id="login-item" tag={Link} to="/login">
      <FontAwesomeIcon icon="sign-in-alt" /> Sign in
    </DropdownItem>
    <DropdownItem tag={Link} to="/register">
      <FontAwesomeIcon icon="sign-in-alt" /> Register
    </DropdownItem>
  </>
);

export const ProfileMenu = ({ isAuthenticated = false }) => (
  <NavDropdown icon="user" name="Profile" id="profile-menu">
    {isAuthenticated ? profileMenuItemsAuthenticated : profileMenuItems}
  </NavDropdown>
);

export default ProfileMenu;
