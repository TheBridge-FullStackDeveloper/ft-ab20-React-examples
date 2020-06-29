import React from 'react';
import { render } from '@testing-library/react';
import RollerCoaster from './RollerCoaster';

test('renders learn react link', () => {
  const { getByText } = render(<RollerCoaster />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
