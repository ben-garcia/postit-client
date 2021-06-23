import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

import LoginModal from '.';
import { mockMatchMedia } from '../../../test-utils';

describe('<LoginModal />', () => {
  beforeAll(() => mockMatchMedia());

  describe('username', () => {
    it('should show error when field is left empty', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <LoginModal isOpen onClose={() => {}} openSignUpModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.blur(screen.getByLabelText(/Username/i));

      const usernameErrorMessage = await screen.findByText(
        /Username must be between 3 and 20 characters./i
      );

      expect(usernameErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 3 character min requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <LoginModal isOpen onClose={() => {}} openSignUpModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Username/i), {
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
            <LoginModal isOpen onClose={() => {}} openSignUpModal={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Username/i), {
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
            <LoginModal isOpen onClose={() => {}} openSignUpModal={() => {}} />
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
            <LoginModal isOpen onClose={() => {}} openSignUpModal={() => {}} />
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
    const mockOpenSignUpModal = jest.fn();

    render(
      <SupernovaProvider>
        <MockedProvider>
          <LoginModal
            isOpen
            onClose={() => {}}
            openSignUpModal={mockOpenSignUpModal}
          />
        </MockedProvider>
      </SupernovaProvider>
    );

    fireEvent.click(screen.getByText('Sign Up'));

    expect(mockOpenSignUpModal).toHaveBeenCalledTimes(1);
  });
});
