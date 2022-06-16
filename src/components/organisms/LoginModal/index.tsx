import React, { FC, FormEvent, useRef, useState } from 'react';
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
import { useForm, useUser } from '../../../hooks';
import { loginSchema } from '../../../utils';
import { useLogInMutation } from '../../../generated/graphql';

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
  openSignUpModal?: () => void;
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
    setError,
    values: user,
  } = useForm<User>(
    {
      password: '',
      username: '',
    },
    loginSchema
  );
  const [logIn] = useLogInMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUser();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.username && !errors.password) {
      const logInUser: Partial<User> = {
        ...user,
      };

      try {
        // trigger the loading icon
        setIsLoading(true);

        const res = await logIn({
          variables: logInUser as User,
        });

        if (res.data?.logIn.success) {
          // save to local storage
          localStorage.setItem(
            'user',
            JSON.stringify({
              username: user.username,
            })
          );
          // update the user context
          dispatch({
            type: 'USER_LOGGED_IN',
            payload: user.username,
          });
          // close the sign up modal
          onClose();
        } else {
          setError('username', 'Incorrect username or password');
          setError('password', 'Incorrect username or password');
          setIsLoading(false);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log('logIn error: ', error);
      }
    }
  };

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
              onBlur={handleBlur as any}
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
              onBlur={handleBlur as any}
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
          <Button asSubmit isLoading={isLoading} primary width="100%">
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
