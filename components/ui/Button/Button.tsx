import { MouseEventHandler, ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonBaseProps = Pick<
  MuiButtonProps,
  'type' | 'color' | 'size' | 'variant' | 'className'
>;

interface ButtonProps extends ButtonBaseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export default function Button({ onClick, children, ...rest }: ButtonProps) {
  return (
    <MuiButton onClick={onClick} {...rest}>
      {children}
    </MuiButton>
  );
}
