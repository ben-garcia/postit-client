import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CheckmarkIcon,
  Flex,
  FlexItem,
  FormErrorMessage,
  FormControl,
  Heading,
  Paragraph,
  Text,
  TextInput,
  useBreakpoint,
} from 'supernova-ui';

import { Button } from '../../atoms';
import NavBarMobile from '../../organisms/NavBar/NavBarMobile';
import { useForm, useUser } from '../../../hooks';
import { loginSchema } from '../../../utils';
import { useLogInMutation } from '../../../generated/graphql';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface LoginPageProps {}

interface User {
  [k: string]: string;
  password: string;
  username: string;
}

const LoginPage: FC<LoginPageProps> = () => {
  const breakpoint = useBreakpoint();
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

  const router = useRouter();
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

          // redirect to the home page
          router.replace('/');
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

  useEffect(() => {
    // set focus on the email input field.
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, [usernameInputRef]);

  return (
    <div className="login-page">
      {breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? (
        <NavBarMobile />
      ) : null}
      <Flex wrap="nowrap">
        <FlexItem className="login-page__flex-item" xs={0}>
          <div className="login-page__image" />
        </FlexItem>
        <FlexItem>
          <form className="login-page__form" onSubmit={handleSubmit}>
            <Heading
              className={`login-page__header ${
                breakpoint === 'xs' ||
                breakpoint === 'sm' ||
                breakpoint === 'md'
                  ? ''
                  : 'login-page__header--desktop'
              }`}
            >
              Login
            </Heading>
            <FormControl isInvalid={!!errors.username} tag="fieldset">
              <TextInput
                floatLabel
                label="Username"
                labelClassName="login-page__input"
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
                labelClassName="login-page__input"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                rightIcon={
                  errors.password ? (
                    <div
                      className={`login-page__icon${
                        errors.password ? ' login-page__icon--visible' : ''
                      }`}
                    >
                      !
                    </div>
                  ) : (
                    <CheckmarkIcon
                      className={`login-page__icon${
                        !errors.password && user.password.trim().length >= 8
                          ? ' signup-page__icon--visible'
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
            <Button asSubmit isLoading={isLoading} primary margin="1rem 0 0 0">
              Log In
            </Button>
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
              <Link href="/register">
                <a tabIndex={-1}>
                  <Button
                    className="signup-modal__button"
                    margin="0 0 0 xs"
                    secondary
                  >
                    Sign Up
                  </Button>
                </a>
              </Link>
            </Paragraph>
          </form>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default LoginPage;
