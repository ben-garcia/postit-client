import React, { FC } from 'react';
import Link from 'next/link';

import { ChevronDownIcon, InfoIcon, SettingsIcon, Text } from 'supernova-ui';
import { Button, ChatIcon, RisingIcon, SearchBar } from '../../../../atoms';
import { useUser } from '../../../../../hooks';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface NavBarMobileMenuProps {}

const NavBarMobileMenu: FC<NavBarMobileMenuProps> = () => {
  const {
    state: { user },
  } = useUser();

  return (
    <div className="mobile-menu">
      <SearchBar className="mobile-menu__searchbar" fill="white" />
      <div className="menu-list">
        {user.isLoggedIn && (
          <>
            <Text className="mobile-menu__username">{user.username}</Text>
            <div className="menu-list__item">
              <div className="menu-list__wrapper">
                <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
                <Text>Inbox</Text>
              </div>
              <ChevronDownIcon fill="white" size="0.7rem" />
            </div>
          </>
        )}
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Recent Communities</Text>
          </div>
          <ChevronDownIcon fill="white" size="0.7rem" />
        </div>
        {!user.isLoggedIn && (
          <>
            <div className="menu-list__item">
              <div className="menu-list__wrapper">
                <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
                <Text>Explore</Text>
              </div>
              <ChevronDownIcon fill="white" size="0.7rem" />
            </div>
            <div className="menu-list__item">
              <div className="menu-list__wrapper">
                <RisingIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
                <Text>Popular Posts</Text>
              </div>
              <ChevronDownIcon fill="white" size="0.7rem" />
            </div>
          </>
        )}
        {user.isLoggedIn && (
          <div className="menu-list__item">
            <div className="menu-list__wrapper">
              <SettingsIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
              <Text>My Communities</Text>
            </div>
          </div>
        )}
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <ChatIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Chat</Text>
          </div>
        </div>
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <SettingsIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Saved</Text>
          </div>
        </div>
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <SettingsIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Settings</Text>
          </div>
          <ChevronDownIcon fill="white" size="0.7rem" />
        </div>
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <RisingIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>r/popular</Text>
          </div>
        </div>
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <SettingsIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>r/all</Text>
          </div>
        </div>
      </div>
      <div className="menu-list__item">
        <div className="menu-list__wrapper">
          <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
          <Text>About Postit</Text>
        </div>
        <ChevronDownIcon fill="white" size="0.7rem" />
      </div>
      {!user.isLoggedIn && (
        <Link href="/register">
          <Button className="mobile-menu__cta" primary>
            Log In / Sign Up
          </Button>
        </Link>
      )}
      {user.isLoggedIn && (
        <Link href="/communities/create">
          <Button className="mobile-menu__cta" primary>
            Create a Community
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavBarMobileMenu;
