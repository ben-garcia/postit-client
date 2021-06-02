import React, { FC } from 'react';

import { Button, LogoIcon, LogoTextIcon, SearchBar } from '../../../atoms';
import { UserMenu } from '../../../molecules';

import './styles.scss';

interface NavBarDesktopProps {}

const NavBarDesktop: FC<NavBarDesktopProps> = () => {
  return (
    <header className="navbar-desktop">
      <div className="navbar-desktop__wrapper">
        <LogoIcon size="3rem" />
        <LogoTextIcon size="4rem" />
      </div>
      <SearchBar />
      <div className="navbar-desktop__wrapper">
        <Button margin="0 xs" secondary>
          Log In
        </Button>
        <Button margin="0 xs" primary>
          Sign Up
        </Button>
        <UserMenu />
      </div>
    </header>
  );
};

export default NavBarDesktop;
