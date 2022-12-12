import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { CustomTextField } from '../TextFieldStyle';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Subject() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={'subject'}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <CustomTextField
          error={!!errors.subject}
          helperText={errors.subject ? 'Please enter a subject' : null}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position={'end'}
                className={'!z-10 !text-3xl sm:!text-4xl !text-pink-400'}
              >
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          ref={ref}
          label={'Subject *'}
          name={'subject'}
          onChange={onChange}
          placeholder={'About'}
          onBlur={onBlur}
          value={value}
          variant={'outlined'}
          className={'!w-64 sm:!w-full'}
        />
      )}
      defaultValue={''}
      rules={{ required: true }}
    />
  );
}
