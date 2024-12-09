import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, InputLabel } from '@mui/material';
import { Option } from '../common/types';

interface MyFormProps {
  selectLabel: string;
  inputLabel: string;
  options: Option[];
  handleSelectedValue: (id: number | undefined) => void;
  selectedOptionId: any;
  setInputValue: (value: string) => void;
  inputValue: string;
  submitAction: () => void;
}

const AddOptionForm: React.FC<MyFormProps> = ({
  selectLabel,
  inputLabel,
  options,
  handleSelectedValue,
  selectedOptionId,
  setInputValue,
  inputValue,
  submitAction,
}) => {
  const handleChange = (event: SelectChangeEvent<HTMLSelectElement>) => {
    handleSelectedValue(Number(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <h3 style={{ textAlign: 'left' }}>Добави квартал</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '300px', marginRight: '10px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
            <Select
              id="demo-simple-select"
              value={selectedOptionId}
              label="Избери опция"
              onChange={handleChange}>
              {options.map((option) => (
                <MenuItem
                  style={{ textAlign: 'left' }}
                  key={option.id}
                  value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label={inputLabel}
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            style={{ height: '54px', marginLeft: '10px' }}
            onClick={submitAction}
            variant="contained"
            color="primary">
            Добави
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddOptionForm;
