import React, { FC } from 'react';
import {
  Flex,
  FlexItem,
  FormControl,
  FormHelperText,
  Heading,
  Paragraph,
  Text,
  TextInput,
} from 'supernova-ui';

import { Button } from '../../atoms';
import './styles.scss';

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => {
  return (
    <div className="signup-page">
      <Flex wrap="nowrap">
        <FlexItem className="signup-page__flex-item" xs={0}>
          <div className="signup-page__image" />
        </FlexItem>
        <FlexItem>
          <form className="signup-page__form">
            <Heading className="signup-page__header">Sign Up</Heading>
            <FormControl tag="fieldset">
              <TextInput
                floatLabel
                label="Email"
                labelClassName="signup-page__input"
                size="sm"
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
              />
            </FormControl>
            <Button primary margin="1rem 0 0 0">
              Sign Up
            </Button>
            <Paragraph fontSize="0.75rem" margin="md 0 0 0">
              Already a member?
              <Text className="signup-page__text" margin="0 0 0 xs">
                Log In
              </Text>
            </Paragraph>
          </form>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default SignUpPage;
