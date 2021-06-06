import React, { FC } from 'react';
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
import './styles.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = props => {
  const { isOpen, onClose } = props;

  return (
    <Modal className="login-modal" isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="login-modal__header">Login</ModalHeader>
      <ModalBody className="login-modal__body">
        <div className="login-modal__image" />
        <form className="login-modal__form">
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Username"
              labelClassName="login-modal__input"
              size="sm"
            />
          </FormControl>
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Password"
              labelClassName="login-modal__input"
              size="sm"
            />
          </FormControl>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            Forgot your
            <Text className="signup-modal__text" margin="0 xs">
              username
            </Text>
            or
            <Text className="signup-modal__text" margin="0 xs">
              password
            </Text>
            ?
          </Paragraph>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            New to Postit?
            <Text className="signup-modal__text" margin="0 0 0 xs">
              Sign Up
            </Text>
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
