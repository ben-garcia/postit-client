import React, { FC } from 'react';
import {
  FormControl,
  FormHelperText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Paragraph,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface SignUpModalProps {
  /**
   * flag to indicate whether the modal is open
   */
  isOpen: boolean;
  /**
   * Function to call when closing the modal
   */
  onClose: () => void;
  /**
   * function to call when the 'Log In' button is clicked
   */
  openLoginModal: () => void;
}

const SignUpModal: FC<SignUpModalProps> = props => {
  const { isOpen, onClose, openLoginModal } = props;

  return (
    <Modal className="signup-modal" isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="signup-modal__header">Sign Up</ModalHeader>
      <ModalBody className="signup-modal__body">
        <div className="signup-modal__image" />
        <form className="signup-modal__form">
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Email"
              labelClassName="signup-modal__input"
              size="sm"
            />
            <FormHelperText>
              We will use this email to communicate with you.
            </FormHelperText>
          </FormControl>
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Choose a username"
              labelClassName="signup-modal__input"
              size="sm"
            />
            <FormHelperText>
              Your username is how other community members will see you
            </FormHelperText>
          </FormControl>
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Password"
              labelClassName="signup-modal__input"
              size="sm"
            />
          </FormControl>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            Already a member?
            <Button
              className="signup-modal__button"
              hoverColor="transparent"
              onClick={openLoginModal}
              margin="0 0 0 xs"
              secondary
            >
              Log In
            </Button>
          </Paragraph>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button primary>Sign Up</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUpModal;
