import { Controller, useFormContext } from 'react-hook-form';
import { CustomTextField } from '../TextFieldStyle';
import { InputAdornment } from '@mui/material';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Message() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={'message'}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <CustomTextField
          error={!!errors.message}
          helperText={errors.message ? 'Please enter your message' : null}
          inputProps={{ className: '!z-10 !text-white' }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position={'end'}
                className={'!z-10 !text-3xl sm:!text-4xl !text-pink-400'}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          ref={ref}
          label={'Message *'}
          multiline={true}
          name={'message'}
          onChange={onChange}
          placeholder={'Your message'}
          rows={4}
          onBlur={onBlur}
          value={value}
          variant={'outlined'}
          className={'!mb-4 !w-64 sm:!w-full'}
        />
      )}
      defaultValue={''}
      rules={{ required: true }}
    />
  );
}
