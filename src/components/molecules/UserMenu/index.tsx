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
  Text,
  UserIcon,
} from 'supernova-ui';

import {
  CoinIcon,
  KarmaIcon,
  PremiumShieldIcon,
  SwitchButton,
} from '../../atoms';
import { CreateCommunityModal } from '../../organisms';
import { useUser } from '../../../hooks';

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
  const [onlineStatusIsActive, setOnlineStatusIsActive] = useState(true);
  const [createCommunityModalIsOpen, setCreateCommunityModalIsOpen] = useState(
    false
  );
  const {
    state: { user },
  } = useUser();

  return (
    <div className="user-menu">
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          className={`user-menu__button${
            user.isLoggedIn ? ' user-menu__button--loggedin' : ''
          }`}
          onClick={() => setIsOpen(true)}
          padding="0"
          variant="outline"
        >
          {user.isLoggedIn && (
            <>
              <div className="user-menu__inner">
                <UserIcon margin="0 0.3rem 0 0" size="1.1rem" />
                <div className="user-menu__container">
                  <Text className="user-menu__username" fontSize="12px">
                    {user.username}
                  </Text>
                  <div>
                    <KarmaIcon
                      fill="var(--color-brand-orange100)"
                      margin="0 0.2rem 0 0"
                      size="0.8rem"
                    />
                    <Text fontSize="12px">0 karma</Text>
                  </div>
                </div>
              </div>
              <ChevronDownIcon size="0.6rem" />
            </>
          )}
          {!user.isLoggedIn && (
            <>
              <UserIcon margin="0 0.3rem 0 0" size="1.1rem" />
              <ChevronDownIcon size="0.6rem" />
            </>
          )}
        </MenuButton>
        <MenuList position="right" width="220px">
          {user.isLoggedIn && (
            <MenuGroup className="user-menu__group" title="My Stuff">
              <MenuItem className="user-menu__item space-between">
                <div className="user-menu__inner">Online Status</div>
                <SwitchButton
                  isActive={onlineStatusIsActive}
                  onChange={() => setOnlineStatusIsActive(!hasNightMode)}
                  tabIndex={-1}
                />
              </MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>User Settings</MenuItem>
            </MenuGroup>
          )}

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
                tabIndex={-1}
              />
            </MenuItem>
          </MenuGroup>
          <MenuGroup className="user-menu__group" title="more stuff">
            {user.isLoggedIn && (
              <MenuItem
                className="user-menu__item"
                onClick={() => setCreateCommunityModalIsOpen(true)}
              >
                Create a Community
              </MenuItem>
            )}
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
            {!user.isLoggedIn && (
              <MenuItem className="user-menu__item">
                <LogoutIcon className="user-menu__icon" size="1.5rem" />
                Log In / Sign Up
              </MenuItem>
            )}
            {user.isLoggedIn && (
              <MenuItem className="user-menu__item">
                <LogoutIcon className="user-menu__icon" size="1.5rem" />
                Log Out
              </MenuItem>
            )}
          </MenuGroup>
        </MenuList>
        {createCommunityModalIsOpen && user.isLoggedIn && (
          <CreateCommunityModal
            isOpen={createCommunityModalIsOpen}
            onClose={() => setCreateCommunityModalIsOpen(false)}
          />
        )}
      </Menu>
    </div>
  );
};

export default UserMenu;
