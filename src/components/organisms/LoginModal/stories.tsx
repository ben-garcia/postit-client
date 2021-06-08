import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import LoginModal from '.';
import { Button } from '../../atoms';

export default {
  component: LoginModal,
  title: 'Postit/Organism/LoginModal',
} as Meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <LoginModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        openSignUpModal={() => {}}
      />
    </>
  );
};
