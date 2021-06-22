import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

import NavBarDesktop from '.';
import { mockMatchMedia } from '../../../../test-utils';

describe('<NavBarDesktop />', () => {
  beforeAll(() => mockMatchMedia());

  it('should open sign up modal', () => {
    render(
      <SupernovaProvider>
        <MockedProvider>
          <NavBarDesktop />
        </MockedProvider>
      </SupernovaProvider>
    );

    const signUpButton = screen.getByText('Sign Up');

    fireEvent.click(signUpButton);

    const signUpModal = screen.getByRole('dialog');
    const emailInput = screen.getByLabelText('Email');
    const usernameInput = screen.getByLabelText(/Choose a Username/i);
    const passwordInput = screen.getByLabelText('Password');

    expect(signUpModal).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should open login modal', () => {
    render(
      <SupernovaProvider>
        <MockedProvider>
          <NavBarDesktop />
        </MockedProvider>
      </SupernovaProvider>
    );

    const loginButton = screen.getByText('Log In');

    fireEvent.click(loginButton);

    const loginModal = screen.getByRole('dialog');
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');

    expect(loginModal).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
