import React from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid2,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { AddPropertyFormMenus, AddPropertyFormValues } from '@types';
import '../css/select.css';
import { createOptionsFor } from 'src/common/helpers';
import useSelectedNeighborhoods from 'src/hooks/useSelectedNeighborhoods';
import GoogleMapsSearchInMap from '@components/GoogleMapsSearchInMap';

interface AddPropertyFormPeops {
  propertyMenus: AddPropertyFormMenus;
  handleSubmitForm: SubmitHandler<AddPropertyFormValues>;
}

const defaultValues: AddPropertyFormValues = {
  city: '',
  neighborhood: '',
  propertyType: '',
  constructionType: '',
  heatingType: '',
  animalsAllowed: 'no',
  floor: '',
  yearOfBuilding: '',
  price: '',
  yardArea: '',
  area: '',
  furnitureLevel: '',
  description: '',
};

const AddPropertyForm: React.FC<AddPropertyFormPeops> = ({
  propertyMenus,
  handleSubmitForm,
}) => {
  const form = useForm<AddPropertyFormValues>({ defaultValues });

  const { control, handleSubmit, formState, watch, reset } = form;
  const { errors } = formState;
  const {
    cities,
    neighborhoods,
    propertyTypes,
    constructionTypes,
    heatingTypes,
    furnitureLevels,
  } = propertyMenus;

  const [selectedNeighborhoods, isDisabledNeighborhoods] =
    useSelectedNeighborhoods(watch('city'), neighborhoods);

  const submitWithReset = (formData: AddPropertyFormValues) => {
    handleSubmitForm(formData);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitWithReset)} noValidate>
        <Stack style={{ padding: '10px' }}>
          <h2>Създаване на обява</h2>
          <Grid2 container spacing={3}>
            <Grid2 size={4}>
              <Controller
                name="city"
                control={control}
                rules={{ required: 'Моля изберете град' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.city}>
                    <InputLabel id="city-label">Град</InputLabel>
                    <Select
                      labelId="city-label"
                      id="city-select"
                      label="Град"
                      {...field}>
                      {createOptionsFor(cities)}
                    </Select>
                    <FormHelperText>
                      {errors.city?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                disabled={isDisabledNeighborhoods}
                name="neighborhood"
                control={control}
                rules={{ required: 'Моля изберете квартал' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.neighborhood}>
                    <InputLabel id="neighborhoods-label">Квартал</InputLabel>
                    <Select
                      className="neighborhoodSelect"
                      labelId="neighborhoods-label"
                      id="neighborhoods-select"
                      label="Квартал"
                      {...field}>
                      {createOptionsFor(selectedNeighborhoods)}
                    </Select>
                    <FormHelperText>
                      {errors.neighborhood?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="propertyType"
                control={control}
                rules={{ required: 'Изберете Вид Имот' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.propertyType}>
                    <InputLabel id="propertyTypes-label">Вид Имот</InputLabel>
                    <Select
                      labelId="propertyTypes-label"
                      id="propertyTypes-select"
                      label="Вид Имот"
                      {...field}>
                      {createOptionsFor(propertyTypes)}
                    </Select>
                    <FormHelperText>
                      {errors.propertyType?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
          </Grid2>
        </Stack>
        <Stack style={{ padding: '10px' }}>
          <Grid2 container spacing={3}>
            <Grid2 size={4}>
              <Controller
                name="price"
                control={control}
                rules={{ required: 'Попълнете цена' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Цена за наем"
                    type="number"
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    fullWidth
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="area"
                control={control}
                rules={{ required: 'Попълнете площа на имота' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Площ кв.м."
                    type="number"
                    error={!!errors.area}
                    helperText={errors.area?.message}
                    fullWidth
                  />
                )}
              />
            </Grid2>

            <Grid2 size={4}>
              <Controller
                name="furnitureLevel"
                control={control}
                rules={{ required: 'Изберете нивото на обзавеждане' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.furnitureLevel}>
                    <InputLabel id="heatingType-label">Обзавеждане</InputLabel>
                    <Select
                      className="furnitureLevel"
                      labelId="furnitureLevel-label"
                      id="heatingfurnitureLevelType-select"
                      label="Обзавеждане"
                      {...field}>
                      {createOptionsFor(furnitureLevels)}
                    </Select>
                    <FormHelperText>
                      {errors.furnitureLevel?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
          </Grid2>
        </Stack>

        <Stack style={{ padding: '10px' }}>
          <Grid2 container spacing={3}>
            <Grid2 size={4}>
              <Controller
                name="constructionType"
                control={control}
                rules={{ required: 'Изберете Вид Строителство' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.constructionType}>
                    <InputLabel id="constructionType-label">
                      Вид Строителство
                    </InputLabel>
                    <Select
                      className="constructionType"
                      labelId="constructionType-label"
                      id="constructionType-select"
                      label="Вид Строителство"
                      {...field}>
                      {createOptionsFor(constructionTypes)}
                    </Select>
                    <FormHelperText>
                      {errors.constructionType?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="heatingType"
                control={control}
                rules={{ required: 'Изберете Вид Отопление' }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.heatingType}>
                    <InputLabel id="heatingType-label">
                      Вид Отопление
                    </InputLabel>
                    <Select
                      className="heatingType"
                      labelId="heatingType-label"
                      id="heatingType-select"
                      label="Вид Отопление"
                      {...field}>
                      {createOptionsFor(heatingTypes)}
                    </Select>
                    <FormHelperText>
                      {errors.heatingType?.message.toString()}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="floor"
                control={control}
                rules={{ required: 'Етаж е Задължителен' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Етаж"
                    type="number"
                    error={!!errors.floor}
                    helperText={errors.floor?.message}
                    fullWidth
                  />
                )}
              />
            </Grid2>
          </Grid2>
        </Stack>
        <Stack style={{ padding: '10px' }}>
          <Grid2 container spacing={3}>
            <Grid2 size={4}>
              <Controller
                name="yearOfBuilding"
                control={control}
                rules={{ required: 'Годината е задължителна' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Година на стрителство"
                    type="number"
                    error={!!errors.yearOfBuilding}
                    helperText={errors.yearOfBuilding?.message}
                    fullWidth
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="yardArea"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Площ на двор кв.м."
                    type="number"
                    fullWidth
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <FormControl>
                <FormLabel id="animals-аllowed-label">
                  Опция за домашни любимци
                </FormLabel>
                <Controller
                  name="animalsAllowed"
                  control={control}
                  render={({ field, fieldState }) => (
                    <RadioGroup
                      {...field}
                      aria-labelledby="animals-аllowed-label"
                      name="radio-buttons-group">
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="Не"
                      />
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Да"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid2>
          </Grid2>
        </Stack>
        <Stack style={{ padding: '10px' }}>
          <Grid2 container spacing={3}>
            <Grid2 size={12}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Допълнитело описание на имота"
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid2>
          </Grid2>
        </Stack>
        <Stack style={{ padding: '10px' }}>
          <GoogleMapsSearchInMap />
        </Stack>
        <Button type="submit" style={{ width: '200px' }} variant="contained">
          Запази
        </Button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
