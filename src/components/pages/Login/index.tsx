import React, { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Flex,
  FlexItem,
  FormControl,
  Heading,
  Paragraph,
  Text,
  TextInput,
  useBreakpoint,
} from 'supernova-ui';

import { Button } from '../../atoms';
import NavBarMobile from '../../organisms/NavBar/NavBarMobile';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const breakpoint = useBreakpoint();
  const usernameInputRef = useRef<HTMLElement | null>(null);

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
          <form className="login-page__form">
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
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Username"
                labelClassName="login-page__input"
                ref={usernameInputRef}
                size="sm"
              />
            </FormControl>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Password"
                labelClassName="login-page__input"
                size="sm"
                typeOf="password"
              />
            </FormControl>
            <Button primary margin="1rem 0 0 0">
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
