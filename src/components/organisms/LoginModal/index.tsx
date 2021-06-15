import React, { FC, useRef } from 'react';
import {
  CheckmarkIcon,
  FormErrorMessage,
  FormControl,
  Modal,
  ModalBody,
  ModalHeader,
  Paragraph,
  Text,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';
import { useForm } from '../../../hooks';
import { loginSchema } from '../../../utils';

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

interface User {
  [k: string]: string;
  password: string;
  username: string;
}

const LoginModal: FC<LoginModalProps> = props => {
  const { isOpen, onClose, openSignUpModal } = props;
  const usernameInputRef = useRef<HTMLElement | null>(null);
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values: user,
  } = useForm<User>(
    {
      password: '',
      username: '',
    },
    loginSchema
  );

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
        <form className="login-modal__form" onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.username} tag="fieldset">
            <TextInput
              floatLabel
              label="Username"
              labelClassName="login-modal__input"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              ref={usernameInputRef}
              rightIcon={
                errors.username ? (
                  <div
                    className={`login-modal__icon${
                      errors.username ? ' login-modal__icon--visible' : ''
                    }`}
                  >
                    !
                  </div>
                ) : (
                  <CheckmarkIcon
                    className={`login-modal__icon${
                      !errors.username &&
                      user.username.trim().length >= 3 &&
                      user.username.trim().length <= 20
                        ? ' login-modal__icon--visible'
                        : ''
                    }`}
                    fill="green"
                    margin="0.6rem 0.3rem 0 0"
                    size="0.7rem"
                  />
                )
              }
              size="sm"
              value={user.username}
            />
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} tag="fieldset">
            <TextInput
              floatLabel
              label="Password"
              labelClassName="login-modal__input"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              rightIcon={
                errors.password ? (
                  <div
                    className={`login-modal__icon${
                      errors.password ? ' login-modal__icon--visible' : ''
                    }`}
                  >
                    !
                  </div>
                ) : (
                  <CheckmarkIcon
                    className={`login-modal__icon${
                      !errors.password && user.password.trim().length >= 8
                        ? ' signup-modal__icon--visible'
                        : ''
                    }`}
                    fill="green"
                    margin="0.6rem 0.3rem 0 0"
                    size="0.7rem"
                  />
                )
              }
              size="sm"
              typeOf="password"
              value={user.password}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <Button asSubmit primary width="100%">
            Log In
          </Button>
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
          <Paragraph fontSize="0.75rem" margin="md 0 xxl 0">
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
    </Modal>
  );
};

export default LoginModal;
