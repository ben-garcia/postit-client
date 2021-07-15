import React, { useEffect, FC } from 'react';

import { useBreakpoint } from 'supernova-ui';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import { useUser } from '../../../hooks';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const breakpoint = useBreakpoint();
  const { dispatch } = useUser();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      dispatch({
        type: 'USER_LOGGED_IN',
        payload: parsedUser.username,
      });
    }
  }, []);

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
