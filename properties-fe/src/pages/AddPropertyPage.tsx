import React from 'react';
import AddPropertyForm from '@components/forms/AddPropertyForm';
import { Box, CircularProgress } from '@mui/material';
import useAddPropertyMenus from 'src/hooks/useAddPropertyMenus';
import { locationAtom } from 'src/atoms';
import { useAtomValue } from 'jotai';
import { addProprery } from '@http';
import { SubmitHandler } from 'react-hook-form';
import { AddPropertyFormValues } from '@types';

function AddPropertyPage() {
  const [propertyMenus, loading] = useAddPropertyMenus();
  const location = useAtomValue(locationAtom);

  const handleSubmitFilter: SubmitHandler<AddPropertyFormValues> = (
    formData
  ) => {
    const property = {
      ...formData,
      animalsAllowed: formData.animalsAllowed === 'yes' ? true : false,
      location,
    };

    addProprery(property).then((res) => {
      console.log('res = ', res);
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress size="5rem" />
      </Box>
    );
  }

  return (
    <div>
      <AddPropertyForm
        propertyMenus={propertyMenus}
        handleSubmitForm={handleSubmitFilter}
      />
    </div>
  );
}

export default AddPropertyPage;
