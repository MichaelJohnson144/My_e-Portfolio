import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Icon from './Icon';

describe('Icon component', function () {
  it('should render an icon successfully', function () {
    render(<Icon onClick={function () {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should call onClick once successfully', async function () {
    const onClick = jest.fn();
    render(<Icon onClick={onClick} />);
    const button = screen.getByRole('button');

    await userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
