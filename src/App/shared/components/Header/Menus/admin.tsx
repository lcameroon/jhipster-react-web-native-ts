import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

import { NavDropdown } from './home';

const adminMenuItems = (
  <>
    <DropdownItem tag={Link} to="/admin/user-management">
      <FontAwesomeIcon icon="user" /> User management
    </DropdownItem>
  </>
);

export const AdminMenu = ({ showSwagger, showDatabase }) => (
  <NavDropdown
    icon="user-plus"
    name="Administration"
    style={{ width: '140%' }}
    id="admin-menu"
  >
    {adminMenuItems}
  </NavDropdown>
);

export default AdminMenu;