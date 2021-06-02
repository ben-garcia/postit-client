import React, { FC } from 'react';

// import { Button } from '../../../../atoms';
import { Button } from 'supernova-ui';

import './styles.scss';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick?: () => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = props => {
  const { isOpen, onClick } = props;

  return (
    <Button
      className="hamburger-button"
      hoverBackgroundColor="transparent"
      onClick={onClick}
      variant="outline"
    >
      <div
        className={`hamburger-button__line ${
          isOpen ? 'hamburger-button__line--first' : ''
        }`}
      />
      <div
        className={`hamburger-button__line ${
          isOpen ? 'hamburger-button__line--second' : ''
        }`}
      />
      <div
        className={`hamburger-button__line ${
          isOpen ? 'hamburger-button__line--third' : ''
        }`}
      />
    </Button>
  );
};

export default HamburgerButton;
