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
      <span className="ml-2">{props.name}</span>
    </DropdownToggle>
    <DropdownMenu right style={props.style}>
      {props.children}
    </DropdownMenu>
  </UncontrolledDropdown>
);

export const BrandLogo = props => (
  <div {...props} className="brand-icon">
    <img src={require('../../../../../assets/images/logo.png')} alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandLogo />
    <span className="brand-title d-inline-block">Super App</span>
    <sub className="navbar-version">v{appConstants.version}</sub>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span className="ml-2">Home</span>
    </NavLink>
  </NavItem>
);
