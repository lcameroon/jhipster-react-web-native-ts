import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

import { NavDropdown } from './home';

const adminMenuItems = (
  <>
    <DropdownItem tag={Link} to="/admin/user-management">
      <FontAwesomeIcon icon="user" />
      <span className="ml-2">User management</span>
    </DropdownItem>
  </>
);

export const AdminMenu = () => (
  <NavDropdown icon="shield-alt" name="Administration" id="admin-menu">
    {adminMenuItems}
  </NavDropdown>
);

export default AdminMenu;
