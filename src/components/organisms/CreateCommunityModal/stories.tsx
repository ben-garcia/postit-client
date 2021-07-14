import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import CreateCommunityModal from '.';
import { Button } from '../../atoms';

export default {
  component: CreateCommunityModal,
  title: 'Postit/Organism/CreateCommunityModal',
} as Meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <CreateCommunityModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
