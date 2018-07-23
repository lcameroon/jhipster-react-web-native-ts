import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';

import { Home, Brand, LocaleMenu, AdminMenu, ContatcsMenu, AccountMenu } from './Menus';

export interface IHeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  ribbonEnv?: string;
  isInProduction?: boolean;
  isSwaggerEnabled?: boolean;
  currentLocale?: string;
  onLocaleChange?: Function;
}

export interface IHeaderState {
  menuOpen: boolean;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    menuOpen: false
  };

  handleLocaleChange = event => {
    this.props.onLocaleChange(event.target.value);
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { currentLocale, isAuthenticated, isAdmin } = this.props;

    return (
      <div id="app-header">
        <LoadingBar className="loading-bar" />
        <Navbar dark expand="sm" fixed="top" className="bg-dark">
          <div className="container">
            <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
            <Brand />
            <Collapse isOpen={this.state.menuOpen} navbar>
              <Nav id="header-tabs" className="ml-auto" navbar>
                <Home />
                {isAuthenticated && <ContatcsMenu />}
                {isAuthenticated && isAdmin && <AdminMenu />}
                <LocaleMenu
                  currentLocale={currentLocale}
                  onClick={this.handleLocaleChange}
                />
                <AccountMenu isAuthenticated={isAuthenticated} />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
