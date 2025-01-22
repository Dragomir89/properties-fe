import React from "react";
import ResetPasswordForm from "@components/forms/ResetPasswordForm";
import { Typography, Container, Box } from '@mui/material';

const ForgotPasswordPage = () => {


  return (<>
    <Container maxWidth="sm" sx={{ width: '50%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Проверете вашият имейл за код за смяна на паролата
        </Typography>
        <ResetPasswordForm />
      </Box>
    </Container>
    </>);
};

export default ForgotPasswordPage;