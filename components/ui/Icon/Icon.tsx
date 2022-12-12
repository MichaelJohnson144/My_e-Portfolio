import { MouseEventHandler, ReactNode } from 'react';
import IconButton from '@mui/material/IconButton';

interface IconProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export default function Icon({ onClick, children }: IconProps) {
  return (
    <IconButton
      onClick={onClick}
      className={
        '!container !fixed !inset-x-0 !bottom-0 !flex !flex-col !flex-nowrap !justify-center !content-center !items-center !mx-auto !w-fit !h-fit'
      }
    >
      {children}
    </IconButton>
  );
}
