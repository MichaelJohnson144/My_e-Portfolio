import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component', function () {
  it('should render a logo element successfully', function () {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });
});
