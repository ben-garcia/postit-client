import React, { FC } from 'react';
import Link from 'next/link';
import {
  Flex,
  FlexItem,
  FormControl,
  FormHelperText,
  Heading,
  Paragraph,
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

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="signup-page">
      {breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' ? (
        <NavBarMobile />
      ) : null}

      <Flex wrap="nowrap">
        <FlexItem className="signup-page__flex-item" xs={0}>
          <div className="signup-page__image" />
        </FlexItem>
        <FlexItem>
          <form className="signup-page__form">
            <Heading
              className={`signup-page__header ${
                breakpoint === 'xs' ||
                breakpoint === 'sm' ||
                breakpoint === 'md'
                  ? ''
                  : 'signup-page__header--desktop'
              }`}
            >
              Sign Up
            </Heading>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Email"
                labelClassName="signup-page__input"
                size="sm"
                typeOf="email"
              />
              <FormHelperText>
                We will use this email to communicate with you.
              </FormHelperText>
            </FormControl>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Choose a username"
                labelClassName="signup-page__input"
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
                labelClassName="signup-page__input"
                size="sm"
                typeOf="password"
              />
            </FormControl>
            <Button primary margin="1rem 0 0 0">
              Sign Up
            </Button>
            <Paragraph fontSize="0.75rem" margin="md 0 0 0">
              Already a member?
              <Link href="/account/login">
                <a tabIndex={-1}>
                  <Button
                    className="signup-page__button"
                    margin="0 0 0 xs"
                    secondary
                  >
                    Log In
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

export default SignUpPage;
