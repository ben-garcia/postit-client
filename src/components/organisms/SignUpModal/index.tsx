import React, { FC } from 'react';
import {
  FormControl,
  FormHelperText,
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

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: FC<SignUpModalProps> = props => {
  const { isOpen, onClose } = props;

  return (
    <Modal className="signup-modal" isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="signup-modal__header">Sign Up</ModalHeader>
      <ModalBody className="signup-modal__body">
        <div className="signup-modal__image" />
        <form className="signup-modal__form">
          <FormControl tag="fieldset">
            <TextInput
              floatLabel
              label="Email"
              labelClassName="signup-modal__input"
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
              labelClassName="signup-modal__input"
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
              labelClassName="signup-modal__input"
              size="sm"
            />
          </FormControl>
          <Paragraph fontSize="0.75rem" margin="md 0 0 0">
            Already a member?
            <Text className="signup-modal__text" margin="0 0 0 xs">
              Log In
            </Text>
          </Paragraph>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button primary>Sign Up</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUpModal;
