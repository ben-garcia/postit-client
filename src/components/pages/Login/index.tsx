import React, { FC } from 'react';
import {
  Flex,
  FlexItem,
  FormControl,
  Heading,
  Paragraph,
  Text,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';
import './styles.scss';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="login-page">
      <Flex wrap="nowrap">
        <FlexItem className="login-page__flex-item" xs={0}>
          <div className="login-page__image" />
        </FlexItem>
        <FlexItem>
          <form className="login-page__form">
            <Heading className="login-page__header">Login</Heading>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Username"
                labelClassName="login-page__input"
                size="sm"
              />
            </FormControl>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Password"
                labelClassName="login-page__input"
                size="sm"
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
              <Text className="signup-modal__text" margin="0 0 0 xs">
                Sign Up
              </Text>
            </Paragraph>
          </form>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default LoginPage;
