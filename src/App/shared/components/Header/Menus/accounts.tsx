import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

export const AccountsMenu = props => (
  <NavItem className="ml-2">
    <NavLink tag={Link} to="/accounts" className="d-flex align-items-center">
      <FontAwesomeIcon icon="wallet" />
      <span className="ml-2">Accounts</span>
    </NavLink>
  </NavItem>
);
