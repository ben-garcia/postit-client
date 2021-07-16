import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

import CreateCommunityModal from '.';
import { mockMatchMedia } from '../../../test-utils';

describe('<CreateCommunityModal />', () => {
  beforeAll(() => mockMatchMedia());

  describe('name', () => {
    it('should show error when field is left empty', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <CreateCommunityModal isOpen onClose={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.blur(screen.getByLabelText(/Name/));

      const nameErrorMessage = await screen.findByText(
        /Name must be between 1 and 21 characters/i
      );

      expect(nameErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 1 character min requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <CreateCommunityModal isOpen onClose={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.blur(screen.getByLabelText(/Name/));

      const nameErrorMessage = await screen.findByText(
        /Name must be between 1 and 21 characters/i
      );

      expect(nameErrorMessage).toBeInTheDocument();
    });

    it('should show error when fails 21 character max requirement', async () => {
      render(
        <SupernovaProvider>
          <MockedProvider>
            <CreateCommunityModal isOpen onClose={() => {}} />
          </MockedProvider>
        </SupernovaProvider>
      );

      fireEvent.change(screen.getByLabelText(/Name/i), {
        target: { value: 'failsmaxcharacterrequirement' },
      });

      const nameErrorMessage = await screen.findByText(
        /Name must be between 1 and 21 characters/i
      );

      expect(nameErrorMessage).toBeInTheDocument();
    });
  });
});
