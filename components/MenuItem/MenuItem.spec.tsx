import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem component', function () {
  it('should render a menu of elements successfully', function () {
    render(<MenuItem item={{ link: 'test-link', label: 'testLabel' }} />);
    const link = screen.getByText('testLabel');
    expect(link).toBeTruthy();
  });

  it("should render the menu's elements' links successfully", function () {
    render(<MenuItem item={{ link: 'test-link', label: 'testLabel' }} />);
    const link: HTMLAnchorElement = screen.getByText('testLabel');
    expect(link.href).toBeTruthy();
  });

  it('should add a target if a href is passed successfully', function () {
    render(<MenuItem item={{ link: 'test-link', label: 'testLabel', href: '/' }} />);
    const link: HTMLAnchorElement = screen.getByText('testLabel');
    expect(link.target).toBe('_blank');
  });
});
