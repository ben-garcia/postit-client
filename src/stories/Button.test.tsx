import React from 'react';

import { render, a11yTest } from '../test-utils';
import { Button } from './Button';

describe('<Button />', () => {
  it('should pass a11y tests', async () => {
    await a11yTest(<Button label="button" />);
  });

  it('should render', () => {
    const { container } = render(<Button label="button" />);

    expect(container).toBeInTheDocument();
  });
  it('should contain the correct label', () => {
    const { getByText } = render(<Button label="test button" />);

    expect(getByText('test button')).toBeInTheDocument();
  });
});
