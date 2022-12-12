import { styled, TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  input: {
    zIndex: 10,
    color: 'white',
  },
  label: {
    fontSize: 17,
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label.Mui-focused.Mui-error': {
    color: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: 'rgb(0 0 0 / 35%)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': {
      borderWidth: 2,
      borderColor: 'red',
      backgroundColor: 'rgb(0 0 0 / 35%)',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
    },
  },
});
