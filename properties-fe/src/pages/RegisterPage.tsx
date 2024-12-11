import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { prepareRegistrationData } from 'src/common/helpers';
import useLanguages from 'src/hooks/useLanguages';
import { RegistrationFormValues } from '@types';
import RegistrationForm from '@components/forms/RegistrationForm';

const UserRegistrationForm = ({}) => {
  const [languagesData, loadingLanguages] = useLanguages();

  const handleSubmitRegister = (data: RegistrationFormValues) => {
    console.log(prepareRegistrationData(data, languagesData));
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
