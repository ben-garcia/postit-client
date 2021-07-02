import React, { FC, useState } from 'react';
import { AddIcon, EnvelopIcon } from 'supernova-ui';

import {
  Button,
  CameraIcon,
  ChatIcon,
  CoinIcon,
  LogoIcon,
  LogoTextIcon,
  RisingIcon,
  TopIcon,
  SearchBar,
} from '../../../atoms';
import { UserMenu } from '../../../molecules';
import { LoginModal, SignUpModal } from '../..';
import { useUser } from '../../../../hooks';

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
  const {
    state: { user },
  } = useUser();

  return (
    <header className="navbar-desktop">
      <div className="navbar-desktop__wrapper">
        <LogoIcon size="3rem" />
        <LogoTextIcon size="4rem" />
      </div>
      <SearchBar />
      <div className="navbar-desktop__wrapper">
        {!user.isLoggedIn && (
          <>
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
          </>
        )}
        {user.isLoggedIn && (
          <>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <RisingIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <TopIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <CameraIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <ChatIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <EnvelopIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <AddIcon size="1.2rem" />
            </Button>
            <Button
              className="navbar-desktop__coins-button"
              hoverColor="var(--color-brand-grey100)"
              secondary
            >
              <CoinIcon margin="0 0.2rem 0 0" size="1.3rem" />
              Get Coins
            </Button>
          </>
        )}
        <UserMenu />
      </div>
      {loginModalIsOpen && !signUpModalIsOpen && (
        <LoginModal
          isOpen={loginModalIsOpen}
          onClose={() => setLoginModalIsOpen(false)}
          openSignUpModal={() => {
            setLoginModalIsOpen(false);
            setSignUpModalIsOpen(true);
          }}
        />
      )}
      {signUpModalIsOpen && !loginModalIsOpen && (
        <SignUpModal
          isOpen={signUpModalIsOpen}
          onClose={() => setSignUpModalIsOpen(false)}
          openLoginModal={() => {
            setSignUpModalIsOpen(false);
            setLoginModalIsOpen(true);
          }}
        />
      )}
    </header>
  );
};

export default NavBarDesktop;
