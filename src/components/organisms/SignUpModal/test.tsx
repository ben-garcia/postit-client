import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

import SignUpModal from '.';
import { mockMatchMedia } from '../../../test-utils';

describe('<SignUpModal />', () => {
  beforeAll(() => mockMatchMedia());

  describe('email', () => {
    it('should show error message when email is invalid', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'email' },
      });

      const emailErrorMessage = await screen.findByText(
        /Please fix your email to continue/i
      );

      expect(emailErrorMessage).toBeInTheDocument();
    });
  });

  describe('username', () => {
    it('should show error when field is left empty', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.blur(screen.getByLabelText(/Choose a Username/i));

      const usernameErrorMessage = await screen.findByText(
        /Username must be between 3 and 20 characters./i
      );

      expect(usernameErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 3 character min requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Choose a Username/i), {
        target: { value: 'no' },
      });

      const usernameErrorMessage = await screen.findByText(
        /Username must be between 3 and 20 characters./i
      );

      expect(usernameErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 20 character max requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Choose a Username/i), {
        target: { value: 'failsmaxcharacterrequirement' },
      });

      const usernameErrorMessage = await screen.findByText(
        /Username must be between 3 and 20 characters./i
      );

      expect(usernameErrorMessage).toBeInTheDocument();
    });
  });

  describe('password', () => {
    it('should show error when field is left empty', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.blur(screen.getByLabelText(/Password/i));

      const passwordErrorMessage = await screen.findByText(
        /Password must be at least 8 characters long./i
      );

      expect(passwordErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 8 character min requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <SignUpModal isOpen onClose={() => {}} openLoginModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Password/i), {
        target: { value: 'failed' },
      });

      const passwordErrorMessage = await screen.findByText(
        /Password must be at least 8 characters long./i
      );

      expect(passwordErrorMessage).toBeInTheDocument();
    });
  });

  it('should call openLoginModal prop function when Login button is clicked', () => {
    const mockOpenLoginModal = jest.fn();

    render(
      <SupernovaProvider>
        <MockedProvider>
          <SignUpModal
            isOpen
            onClose={() => {}}
            openLoginModal={mockOpenLoginModal}
          />
        </MockedProvider>
      </SupernovaProvider>
    );

    fireEvent.click(screen.getByText('Log In'));

    expect(mockOpenLoginModal).toHaveBeenCalledTimes(1);
  });
});
