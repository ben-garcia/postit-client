import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import WarningModal from '.';
import { Button } from '../../atoms';

export default {
  component: WarningModal,
  title: 'Postit/Organism/WarningModal',
} as Meta;

export const CommunityDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <WarningModal
        cancelButtonTitle="Discard"
        cancelButtonOnClick={() => setIsOpen(false)}
        content="You have made some changes to your community, do you wish to leave
          this menu without saving?"
        header="Save changes before leaving?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        submitButtonTitle="Save"
        submitButtonOnClick={() => setIsOpen(false)}
      />
    </>
  );
};

export const PostDraft = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <WarningModal
        cancelButtonTitle="Discard Post"
        cancelButtonOnClick={() => setIsOpen(false)}
        content="Do you want to save a draft of your post?"
        header="Save draft"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        submitButtonTitle="Save Draft"
        submitButtonOnClick={() => setIsOpen(false)}
      />
    </>
  );
};
