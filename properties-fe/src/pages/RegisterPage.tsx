import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { prepareRegistrationData } from 'src/common/helpers';
import useLanguages from 'src/hooks/useLanguages';
import { RegistrationFormValues } from '@types';
import RegistrationForm from '@components/forms/RegistrationForm';
import { register } from '@http';

const UserRegistrationForm = ({}) => {
  const [languagesData, loadingLanguages] = useLanguages();

  const handleSubmitRegister = (data: RegistrationFormValues) => {
    register(prepareRegistrationData(data, languagesData));
  };

  return (
    <>
      {loadingLanguages ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <RegistrationForm
          handleSubmitRegister={handleSubmitRegister}
          languagesData={languagesData}
        />
      )}

      {/* <ImageUpload /> */}
    </>
  );
};

export default UserRegistrationForm;
