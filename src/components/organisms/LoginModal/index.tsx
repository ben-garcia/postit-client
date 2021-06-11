import React, { FC, useRef } from 'react';
import {
  FormControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Paragraph,
  Text,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface LoginModalProps {
  /**
   * flag to indicate whether the modal is open
   */
  isOpen: boolean;
  /**
   * Function to call when closing the modal
   */
  onClose: () => void;
  /**
   * function to call when the 'Sign Up' button is clicked
   */
  openSignUpModal: () => void;
}

const LoginModal: FC<LoginModalProps> = props => {
  const { isOpen, onClose, openSignUpModal } = props;
  const usernameInputRef = useRef<HTMLElement | null>(null);

  return (
    <Modal
      className="login-modal"
      initialFocusRef={usernameInputRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalHeader className="login-modal__header">Login</ModalHeader>
      <ModalBody className="login-modal__body">
        <div className="login-modal__image" />
        <form className="login-modal__form">
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Username"
              labelClassName="login-modal__input"
              ref={usernameInputRef}
              size="sm"
            />
          </FormControl>
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Password"
              labelClassName="login-modal__input"
              size="sm"
              typeOf="password"
            />
          </FormControl>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            Forgot your
            <Text className="login-modal__text" margin="0 xs">
              username
            </Text>
            or
            <Text className="login-modal__text" margin="0 xs">
              password
            </Text>
            ?
          </Paragraph>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            New to Postit?
            <Button
              className="login-modal__button"
              hoverColor="transparent"
              onClick={openSignUpModal}
              margin="0 0 0 xs"
              secondary
            >
              Sign Up
            </Button>
          </Paragraph>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button primary>Log In</Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
