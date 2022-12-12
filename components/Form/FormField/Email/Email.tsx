import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { CustomTextField } from '../TextFieldStyle';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Email() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={'email'}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <CustomTextField
          error={!!errors.email}
          helperText={errors.email ? 'Please enter a valid email address' : null}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position={'end'}
                className={'!z-10 !text-3xl sm:!text-4xl !text-pink-400'}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </InputAdornment>
            ),
          }}
          {...register('email', {
            max: 254,
            pattern:
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
          })}
          label={'Email *'}
          name={'email'}
          onChange={onChange}
          placeholder={'username@mailbox-provider.domain'}
          onBlur={onBlur}
          type={'email'}
          value={value}
          variant={'outlined'}
          className={'!mb-4 sm:!mb-0 !w-64 sm:!w-full'}
        />
      )}
      defaultValue={''}
      rules={{ required: true }}
    />
  );
}
