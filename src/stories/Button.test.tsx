import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    const { container }: RenderResult = render(<Button label="button" />);

    expect(container).toBeInTheDocument();
  });
  it('should contain the correct label', () => {
    const { getByText } = render(<Button label="test button" />);

    expect(getByText('test button')).toBeInTheDocument();
  });
});
