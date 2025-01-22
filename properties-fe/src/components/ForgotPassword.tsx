import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import useSubmitEmailForm from 'src/hooks/useSubmitEmailForm';

const ForgotPassword = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '3px 3px',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const { control, handleSubmitForm, handleSubmit, errors } =
    useSubmitEmailForm();

  return (
    <div>
      <Button style={{ color: 'red' }} onClick={handleOpen}>
        Забравена Парола
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title">
            На вашият имейл ще ви изпратим токен който ще трябва да копирате във
            формата за зъздаване на нова парола.
          </Typography>
          <Typography
            sx={{ margin: '14px 0px' }}
            id="modal-modal-title"
            variant="h6"
            component="h2">
            Въведете вашият Имейл
          </Typography>

          <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
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
            <Button type="submit" style={{ color: 'red', marginTop: '10px' }}>
              Анулирай паролата и изпрати Имейл
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
