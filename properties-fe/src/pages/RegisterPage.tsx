import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import ImageUpload from '../components/ImageUpload ';

interface UserRegistrationFormProps {
  onSubmit: (formData: UserRegistrationData) => void;
}

interface UserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const UserRegistrationForm: React.FC<UserRegistrationFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<UserRegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.password || formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid Email');
      return;
    }

    setError(null);

    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register Page</h1>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Address"
          variant="outlined"
          margin="normal"
          fullWidth
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          fullWidth
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <ImageUpload />
    </>
  );
};

export default UserRegistrationForm;
