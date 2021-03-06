import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConstants from '../../../constants';

export const NavDropdown = props => (
  <UncontrolledDropdown nav inNavbar id={props.id}>
    <DropdownToggle nav caret className="d-flex align-items-center ml-2">
      <FontAwesomeIcon icon={props.icon} />
      <span className="ml-2 mr-1">{props.name}</span>
    </DropdownToggle>
    <DropdownMenu right style={props.style}>
      {props.children}
    </DropdownMenu>
  </UncontrolledDropdown>
);

export const BrandLogo = props => (
  <div {...props} className="brand-icon mr-2">
    <img src={require('../../../../../assets/images/logo.png')} alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandLogo />
    <span className="brand-title">Super App</span>
    <span className="navbar-version">v{appConstants.version}</span>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center ml-2">
      <FontAwesomeIcon icon="home" />
      <span className="ml-2">Home</span>
    </NavLink>
  </NavItem>
);
