import React, { useState } from 'react';

import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';

import useRouter from 'found/lib/useRouter';

import classnames from 'classnames';
import {
  getUser,
  isRole,
  isLoggedIn,
  setToken,
} from '../../../utils/authentication';

import styles from './main.module.scss';

const records = [
  {
    displayText: 'Perfis de usuários',
    href: '/records/roles',
    roles: ['admin'],
  },
  { displayText: 'Usuários', href: '/records/users', roles: ['admin'] },
];

const profileMenu = [
  {
    displayText: 'Feed de vídeos',
    href: '/profile/videoFeed',
    roles: ['admin', 'regular'],
  },
  {
    displayText: 'Mudança de senha',
    href: '/profile/user',
    roles: ['admin', 'regular'],
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { router } = useRouter();

  if (!isLoggedIn()) {
    return null;
  }

  const toggle = () => setIsOpen(!isOpen);
  const currentHref = window.location.href;
  const user = getUser();

  return (
    <Navbar
      className={classnames('header bg-dark fixed-top', styles.menu)}
      dark
      expand="md"
    >
      <NavbarBrand className="mr-2" href="/">
        Home
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="bg-dark">
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown
            className="ml-2"
            nav
            inNavbar
            active={currentHref.match('/records/') !== null}
          >
            <DropdownToggle nav>Cadastros</DropdownToggle>
            <DropdownMenu>
              {records.map(
                ({ displayText, href, roles }) =>
                  isRole(roles) && (
                    <DropdownItem key={href} href={href}>
                      {displayText}
                    </DropdownItem>
                  )
              )}
            </DropdownMenu>
          </UncontrolledDropdown>

          {user && (
            <UncontrolledDropdown className="ml-2" nav inNavbar>
              <DropdownToggle nav>{user.username}</DropdownToggle>
              <DropdownMenu right>
                {profileMenu.map(
                  ({ displayText, href, roles }) =>
                    isRole(roles) && (
                      <DropdownItem key={href} href={href}>
                        {displayText}
                      </DropdownItem>
                    )
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          <Button
            className="ml-2 my-auto"
            onClick={() => {
              setToken();
              router.push('/login');
            }}
          >
            Sair
          </Button>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
