import React, { FC, useRef } from 'react';
import {
  CheckmarkIcon,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Modal,
  ModalBody,
  ModalHeader,
  Paragraph,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';
import { useForm } from '../../../hooks';
import { signUpSchema } from '../../../utils';

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

interface User {
  [k: string]: string;
  email: string;
  password: string;
  username: string;
}

const SignUpModal: FC<SignUpModalProps> = props => {
  const { isOpen, onClose, openLoginModal } = props;
  const emailInputRef = useRef<HTMLElement | null>(null);
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values: user,
  } = useForm<User>(
    {
      email: '',
      password: '',
      username: '',
    },
    signUpSchema
  );

  return (
    <Modal
      className="signup-modal"
      initialFocusRef={emailInputRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalHeader className="signup-modal__header">Sign Up</ModalHeader>
      <ModalBody className="signup-modal__body">
        <div className="signup-modal__image" />
        <form className="signup-modal__form" onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.email} tag="fieldset">
            <TextInput
              floatLabel
              label="Email"
              labelClassName="signup-modal__input"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              ref={emailInputRef}
              rightIcon={
                errors.email ? (
                  <div
                    className={`signup-modal__icon${
                      errors.email ? ' signup-modal__icon--visible' : ''
                    }`}
                  >
                    !
                  </div>
                ) : (
                  <CheckmarkIcon
                    className={`signup-modal__icon${
                      !errors.email &&
                      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(user.email)
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
              typeOf="email"
              value={user.email}
            />
            <FormHelperText>
              We will use this email to communicate with you. (Optional but
              recommended)
            </FormHelperText>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.username} tag="fieldset">
            <TextInput
              floatLabel
              label="Choose a username"
              labelClassName="signup-modal__input"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              rightIcon={
                errors.username ? (
                  <div
                    className={`signup-modal__icon${
                      errors.username ? ' signup-modal__icon--visible' : ''
                    }`}
                  >
                    !
                  </div>
                ) : (
                  <CheckmarkIcon
                    className={`signup-modal__icon${
                      !errors.username &&
                      user.username.trim().length >= 3 &&
                      user.username.trim().length <= 20
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
              value={user.username}
            />
            <FormHelperText>
              Your username is how other community members will see you.
            </FormHelperText>
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} tag="fieldset">
            <TextInput
              floatLabel
              label="Password"
              labelClassName="signup-modal__input"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              rightIcon={
                errors.password ? (
                  <div
                    className={`signup-modal__icon${
                      errors.password ? ' signup-modal__icon--visible' : ''
                    }`}
                  >
                    !
                  </div>
                ) : (
                  <CheckmarkIcon
                    className={`signup-modal__icon${
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
            Sign Up
          </Button>
          <Paragraph fontSize="0.75rem" margin="md 0 xxl 0">
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
    </Modal>
  );
};

export default SignUpModal;
