import React from 'react';
import TextField from '@mui/material/TextField';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { RegistrationFormValues } from '@types';

interface RegistrationFormProps {
  handleSubmitRegister: (param: RegistrationFormValues) => void;
  languagesData: any[];
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  handleSubmitRegister,
  languagesData,
}) => {
  const defaultValues: RegistrationFormValues = {
    firstName: 'Иван',
    lastName: 'Петров',
    email: 'test@test.com',
    password: 'test',
    confurmPassword: 'test',
    gender: 'Мъж',
    phoneNumber: '0889358720',
    languages: ['Български'],
  };

  const form = useForm<RegistrationFormValues>({ defaultValues });
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(handleSubmitRegister)} noValidate>
      <h2 style={{ textAlign: 'center' }}>Регистрация Наемодател</h2>
      <Stack style={{ padding: '10px' }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'Името е задължително' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Име"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  fullWidth
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Фамилията е задължителна' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Фамилия"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                />
              )}
            />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack style={{ padding: '10px' }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              type="password"
              label="Парола"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register('password', {
                required: {
                  value: true,
                  message: 'Паролата е задължителна',
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              type="password"
              label="Потвърдете паролата"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register('confurmPassword', {
                required: { value: true, message: 'Потвърдете паролата' },
                validate: (value) =>
                  value === password || 'Паролите не съвпадат',
              })}
              error={Boolean(errors.confurmPassword)}
              helperText={errors.confurmPassword?.message}
            />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack style={{ padding: '10px' }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name="gender"
              control={control}
              rules={{ required: 'Изберете вашият пол' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.gender}>
                  <InputLabel id="country-label">Пол</InputLabel>
                  <Select {...field} labelId="country-label" label="Country">
                    <MenuItem value="Мъж">Мъж</MenuItem>
                    <MenuItem value="Жена">Жена</MenuItem>
                    <MenuItem value="Друг">Друг</MenuItem>
                  </Select>
                  {!!errors.gender && (
                    <FormHelperText>{errors.gender?.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Попълнете e-mail',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Невалиден e-mail',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                />
              )}
            />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack style={{ padding: '10px' }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: 'Телефонът е задължителен' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Телефон"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  fullWidth
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name="languages"
              control={control}
              rules={{ required: 'Моля изберете поне един език' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.languages}>
                  <InputLabel id="languages-label">Говорим Език</InputLabel>
                  <Select
                    {...field}
                    labelId="languages-label"
                    multiple
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 0.1,
                        }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}>
                    {languagesData.map((language) => (
                      <MenuItem
                        key={language.languageName}
                        value={language.languageName}>
                        {language.languageName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{errors.languages?.message}</FormHelperText>
                </FormControl>
              )}
            />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack style={{ padding: '10px' }}>
        <Button style={{ width: '200px' }} variant="contained">
          Регистрация
        </Button>
      </Stack>
      <DevTool control={control} />
    </form>
  );
};

export default RegistrationForm;
