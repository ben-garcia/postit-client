import React, { FC, useState } from 'react';

import {
  ChevronDownIcon,
  HalfMoonIcon,
  HelpIcon,
  LogoutIcon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  UserIcon,
} from 'supernova-ui';

import { CoinIcon, PremiumShieldIcon, SwitchButton } from '../../atoms';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNightMode, setHasNightMode] = useState(false);

  return (
    <div className="user-menu">
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          className="user-menu__button"
          onClick={() => setIsOpen(true)}
          padding="0"
          variant="outline"
        >
          <UserIcon margin="0 0.3rem 0 0" size="1.1rem" />
          <ChevronDownIcon size="0.6rem" />
        </MenuButton>
        <MenuList position="right" width="216px">
          <MenuGroup className="user-menu__group" title="view options">
            <MenuItem
              className="user-menu__item space-between"
              onClick={() => setHasNightMode(!hasNightMode)}
            >
              <div className="user-menu__inner">
                <HalfMoonIcon className="user-menu__icon" size="1rem" />
                Night Mode
              </div>
              <SwitchButton
                isActive={hasNightMode}
                onChange={() => setHasNightMode(!hasNightMode)}
              />
            </MenuItem>
          </MenuGroup>
          <MenuGroup className="user-menu__group" title="more stuff">
            <MenuItem className="user-menu__item">
              <CoinIcon className="user-menu__icon" size="1.5rem" />
              Reddit Coins
            </MenuItem>
            <MenuItem className="user-menu__item">
              <PremiumShieldIcon className="user-menu__icon" size="1.5rem" />
              Reddit Premium
            </MenuItem>
            <MenuItem className="user-menu__item">
              <HelpIcon className="user-menu__icon" size="1.5rem" />
              Help Center
            </MenuItem>
            <MenuItem className="user-menu__item">
              <LogoutIcon className="user-menu__icon" size="1.5rem" />
              Log In / Sign Up
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserMenu;
