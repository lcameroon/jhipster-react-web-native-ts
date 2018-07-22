import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

export const ContatcsMenu = props => (
  <NavItem>
    <NavLink tag={Link} to="/contatcs" className="d-flex align-items-center">
      <FontAwesomeIcon icon="book" />
      <span>Contatcs</span>
    </NavLink>
  </NavItem>
);
