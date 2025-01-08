import React from 'react';
import { Button, Grid2, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import useLoginForm from 'src/hooks/useLoginForm';

const LoginForm = () => {
  const { control, handleSubmitForm, handleSubmit, errors } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
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
                label="Имейл"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
              />
            )}
          />
        </Grid2>
        <Grid2 size={12}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Попълнете парола',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Парола"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
              />
            )}
          />
        </Grid2>
      </Grid2>
      <Button
        type="submit"
        style={{ width: '100%', marginTop: '10px' }}
        variant="contained">
        Вход
      </Button>
    </form>
  );
};

export default LoginForm;
