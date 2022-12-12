import { render, screen } from '@testing-library/react';
import MuiButton from '@mui/material/Button';

describe('Button component', function () {
  it('should render a button element successfully', function () {
    render(<MuiButton />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });
});
