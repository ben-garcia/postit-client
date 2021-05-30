import React, { FC } from 'react';

import { Button, LogoIcon, LogoTextIcon, SearchBar } from '../../atoms';
import { UserMenu } from '../../molecules';

import './styles.scss';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <header className="navbar">
      <div className="navbar__wrapper">
        <LogoIcon size="3rem" />
        <LogoTextIcon size="4rem" />
      </div>
      <SearchBar />
      <div className="navbar__wrapper">
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

export default NavBar;
