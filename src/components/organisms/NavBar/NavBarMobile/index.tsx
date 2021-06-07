import React, { FC, useState } from 'react';

import { LogoIcon, LogoTextIcon } from '../../../atoms';
import HamburgerButton from './HamburgerButton';
import NavBarMobileMenu from './NavBarMobileMenu';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface NavBarMobileProps {}

const NavBarMobile: FC<NavBarMobileProps> = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="navbar-mobile">
      <div className="navbar-mobile__wrapper">
        <div className="navbar-mobile__container">
          <LogoIcon size="2rem" />
          <LogoTextIcon fill="white" size="3rem" />
        </div>
        <HamburgerButton
          isOpen={showMobileMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      {showMobileMenu && <NavBarMobileMenu />}
    </header>
  );
};

export default NavBarMobile;
