import React, { FC } from 'react';

import { useBreakpoint } from 'supernova-ui';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const breakpoint = useBreakpoint();

  return (
    <>
      {breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? (
        <NavBarMobile />
      ) : (
        <NavBarDesktop />
      )}
    </>
  );
};

export default NavBar;
