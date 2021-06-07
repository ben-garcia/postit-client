import React, { FC, useState } from 'react';

import { Button, LogoIcon, LogoTextIcon, SearchBar } from '../../../atoms';
import { UserMenu } from '../../../molecules';
import { LoginModal, SignUpModal } from '../..';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface NavBarDesktopProps {}

const NavBarDesktop: FC<NavBarDesktopProps> = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  return (
    <header className="navbar-desktop">
      <div className="navbar-desktop__wrapper">
        <LogoIcon size="3rem" />
        <LogoTextIcon size="4rem" />
      </div>
      <SearchBar />
      <div className="navbar-desktop__wrapper">
        <Button
          margin="0 xs"
          onClick={() => setLoginModalIsOpen(true)}
          secondary
        >
          Log In
        </Button>
        <Button
          margin="0 sm 0 xs"
          onClick={() => setSignUpModalIsOpen(true)}
          primary
        >
          Sign Up
        </Button>
        <UserMenu />
      </div>
      {loginModalIsOpen && (
        <LoginModal
          isOpen={loginModalIsOpen}
          onClose={() => setLoginModalIsOpen(false)}
        />
      )}
      {signUpModalIsOpen && (
        <SignUpModal
          isOpen={signUpModalIsOpen}
          onClose={() => setSignUpModalIsOpen(false)}
        />
      )}
    </header>
  );
};

export default NavBarDesktop;
