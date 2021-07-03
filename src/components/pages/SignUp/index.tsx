import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CheckmarkIcon,
  Flex,
  FlexItem,
  FormErrorMessage,
  FormControl,
  FormHelperText,
  Heading,
  Paragraph,
  TextInput,
  useBreakpoint,
} from 'supernova-ui';

import { Button } from '../../atoms';
import NavBarMobile from '../../organisms/NavBar/NavBarMobile';
import { useDebounce, useForm, useUser } from '../../../hooks';
import { signUpSchema } from '../../../utils';
import {
  useIsUsernameUniqueLazyQuery,
  useSignUpMutation,
} from '../../../generated/graphql';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface SignUpPageProps {}

interface User {
  [k: string]: string;
  email: string;
  password: string;
  username: string;
}

const SignUpPage: FC<SignUpPageProps> = () => {
  const breakpoint = useBreakpoint();
  const router = useRouter();
  const emailInputRef = useRef<HTMLElement | null>(null);
  const {
    errors,
    handleBlur,
    handleChange,
    setError,
    values: user,
  } = useForm<User>(
    {
      email: '',
      password: '',
      username: '',
    },
    signUpSchema
  );
  const [signUp] = useSignUpMutation();
  const [isUsernameUnique, { data }] = useIsUsernameUniqueLazyQuery();
  const debounceValue = useDebounce<string>(user.username);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUser();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.email && !errors.username && !errors.password) {
      const signUpUser: Partial<User> = {
        ...user,
      };

      if (user.email === '') {
        // make sure that email is not send in the request
        // when email is omitted.
        signUpUser.email = undefined;
      }
      try {
        // trigger the loading icon
        setIsLoading(true);

        const res = await signUp({
          variables: signUpUser as User,
        });

        if (res.data?.signUp.created) {
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
        } else if (res.data?.signUp.errors) {
          setIsLoading(false);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log('signUp error: ', error);
      }
    }
  };

  useEffect(() => {
    // set focus on the email input field.
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [emailInputRef]);

  // send the request
  useEffect(() => {
    if (debounceValue.trim().length >= 3 && debounceValue.trim().length <= 20) {
      isUsernameUnique({
        variables: {
          username: debounceValue,
        },
      });
    }
    // if the username is not unique
    // set the error message
    if (data?.isUsernameUnique === false) {
      setError('username', 'This username is already taken.');
    } else {
      // otherwise reset the username erorr field
      setError('username', '');
    }
  }, [debounceValue, data]);

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
          <form className="signup-page__form" onSubmit={handleSubmit}>
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
            <FormControl isInvalid={!!errors.email} tag="fieldset">
              <TextInput
                floatLabel
                label="Email"
                labelClassName="signup-page__input"
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                ref={emailInputRef}
                rightIcon={
                  errors.email ? (
                    <div
                      className={`signup-page__icon${
                        errors.email ? ' signup-page__icon--visible' : ''
                      }`}
                    >
                      !
                    </div>
                  ) : (
                    <CheckmarkIcon
                      className={`signup-page__icon${
                        !errors.email &&
                        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(
                          user.email
                        )
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
                labelClassName="signup-page__input"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                rightIcon={
                  errors.username ? (
                    <div
                      className={`signup-page__icon${
                        errors.username ? ' signup-page__icon--visible' : ''
                      }`}
                    >
                      !
                    </div>
                  ) : (
                    <CheckmarkIcon
                      className={`signup-page__icon${
                        !errors.username &&
                        user.username.trim().length >= 3 &&
                        user.username.trim().length <= 20
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
                value={user.username}
              />
              <FormHelperText>
                Your username is how other community members will see you
              </FormHelperText>
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} tag="fieldset">
              <TextInput
                floatLabel
                label="Password"
                labelClassName="signup-page__input"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                rightIcon={
                  errors.password ? (
                    <div
                      className={`signup-page__icon${
                        errors.password ? ' signup-page__icon--visible' : ''
                      }`}
                    >
                      !
                    </div>
                  ) : (
                    <CheckmarkIcon
                      className={`signup-page__icon${
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
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button asSubmit isLoading={isLoading} primary margin="1rem 0 0 0">
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
