import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface MyFormProps {
  minLength: number;
  maxLength: number;
  label: string;
  inputValue: string;
  setValue: (input: string) => void;
  submit: () => void;
}

const AddSingleOption: React.FC<MyFormProps> = ({
  minLength,
  maxLength,
  label,
  inputValue,
  setValue,
  submit,
}) => {
  const [error, setError] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(
      event.target.value.length < minLength ||
        event.target.value.length > maxLength
    );
  };

  return (
    <>
      <form style={{ marginBottom: '10px' }}>
        <TextField
          style={{ width: '300px' }}
          label={label}
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          error={error}
          helperText={
            error
              ? `Дължината трябва да е между ${minLength} и ${maxLength} символа`
              : ''
          }
        />
      </form>

      <Button
        style={{ marginBottom: '16px' }}
        variant="contained"
        color="primary"
        onClick={submit}>
        Добави
      </Button>
    </>
  );
};

export default AddSingleOption;
