import React, { FC } from 'react';

import { ChevronDownIcon, InfoIcon, SettingsIcon, Text } from 'supernova-ui';
import { Button, RisingIcon, SearchBar } from '../../../../atoms';

import './styles.scss';

interface NavBarMobileMenuProps {}

const NavBarMobileMenu: FC<NavBarMobileMenuProps> = () => {
  return (
    <div className="mobile-menu">
      <SearchBar className="mobile-menu__searchbar" fill="white" />
      <div className="menu-list">
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Recent Communities</Text>
          </div>
          <ChevronDownIcon fill="white" size="0.7rem" />
        </div>
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
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <InfoIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>About Postit</Text>
          </div>
          <ChevronDownIcon fill="white" size="0.7rem" />
        </div>
        <div className="menu-list__item">
          <div className="menu-list__wrapper">
            <SettingsIcon fill="white" margin="0 0.5rem 0 0" size="1rem" />
            <Text>Settings</Text>
          </div>
          <ChevronDownIcon fill="white" size="0.7rem" />
        </div>
      </div>
      <Button className="mobile-menu__cta" primary>
        Log In / Sign Up
      </Button>
    </div>
  );
};

export default NavBarMobileMenu;
