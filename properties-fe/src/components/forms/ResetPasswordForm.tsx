import React from 'react';
import { Button, Grid2, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import useForgotPassword from 'src/hooks/useForgotPassword';

const ResetPasswordForm = () => {
  const { control, handleSubmitForm, handleSubmit, errors } = useForgotPassword();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: 'Попълнете нова парола',
              minLength: {
                value: 8,
                message: 'Паролата трябва да бъде поне 8 символа',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Нова парола"
                type="password"
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message}
                fullWidth
              />
            )}
          />
        </Grid2>
        <Grid2 size={12}>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Потвърдете паролата',
              minLength: {
                value: 8,
                message: 'Паролата трябва да бъде поне 8 символа',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Потвърди парола"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
              />
            )}
          />
        </Grid2>
        <Grid2 size={12}>
          <Controller
            name="token"
            control={control}
            rules={{
              required: 'Въведете код за потвърждение',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Код за потвърждение"
                error={!!errors.token}
                helperText={errors.token?.message}
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
        Промени парола
      </Button>
    </form>
  );
};

export default ResetPasswordForm; 