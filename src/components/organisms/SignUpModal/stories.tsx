import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import SignUpModal from '.';
import { Button } from '../../atoms';

export default {
  component: SignUpModal,
  title: 'Postit/Organism/SignUpModal',
} as Meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <SignUpModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        openLoginModal={() => {}}
      />
    </>
  );
};
