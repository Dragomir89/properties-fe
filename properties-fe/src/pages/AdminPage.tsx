import React, { useEffect, useState } from 'react';
import {
  addCity,
  addConstructionType,
  addNeghorhood,
  getAllCities,
  addPropertyType,
  addHetingType,
} from '../http';
import AddOptionOf from '../components/AddOptionOf';
import { Option } from '@types';
import AddSingleOption from '../components/AddSingleOption';

const AdminPage = () => {
  const [formData, setFormData] = useState<{
    name: string;
    neighborhood: string;
  }>({
    name: '',
    neighborhood: '',
  });

  const [cityName, setCityName] = useState('');

  const [cities, setCities] = useState<Option[]>([]);

  const [selectedCityId, setSelectedCityId] = useState<number | null>();
  const [neighborhoodValue, setNeighborhoodValue] = useState('');

  const [constructionValue, setConstructionValue] = useState('');

  const [propertyValue, setPropertyValue] = useState('');

  const [heatingValue, setHeatingValue] = useState('');

  useEffect(() => {
    getAllCities().then((res) => {
      let newArr = [];
      for (let i = 0; i < res.length; i++) {
        const newObj = { id: res[i].id, name: res[i].cityName };
        newArr.push(newObj);
      }

      setCities(newArr);
    });
  }, [getAllCities]);

  const addNeghorhoodAction = async () => {
    if (selectedCityId && neighborhoodValue !== '') {
      const res = await addNeghorhood(neighborhoodValue, selectedCityId);
      console.log(res);
      setSelectedCityId(null);
      setNeighborhoodValue('');
    }
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   console.log(name, value);
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmitCity = () => {
    addCity(cityName);
    setCityName('');
  };

  const handleSubmitConstruction = () => {
    console.log(constructionValue);
    addConstructionType(constructionValue);
    setConstructionValue('');
  };

  const handleSubmitPropertyType = () => {
    console.log(propertyValue);
    addPropertyType(propertyValue);
    setPropertyValue('');
  };

  const handleSubmitHeadingType = () => {
    console.log(heatingValue);
    addHetingType(heatingValue);
    setHeatingValue('');
  };

  return (
    <>
      <AddSingleOption
        inputValue={constructionValue}
        setValue={setConstructionValue}
        minLength={2}
        maxLength={100}
        label="Въведи Вид Строителство"
        submit={handleSubmitConstruction}
      />

      <AddSingleOption
        inputValue={propertyValue}
        setValue={setPropertyValue}
        minLength={2}
        maxLength={100}
        label="Въведи Вид Имот"
        submit={handleSubmitPropertyType}
      />

      <AddSingleOption
        inputValue={heatingValue}
        setValue={setHeatingValue}
        minLength={2}
        maxLength={100}
        label="Въведи Вид Отопление"
        submit={handleSubmitHeadingType}
      />

      <AddSingleOption
        inputValue={cityName}
        setValue={setCityName}
        minLength={2}
        maxLength={100}
        label="Въведи Име на Град"
        submit={handleSubmitCity}
      />

      <AddOptionOf
        selectLabel="Избери град"
        inputLabel="Въведи Квартал"
        options={cities}
        handleSelectedValue={setSelectedCityId}
        selectedOptionId={selectedCityId}
        setInputValue={setNeighborhoodValue}
        inputValue={neighborhoodValue}
        submitAction={addNeghorhoodAction}
      />
    </>
  );
};

export default AdminPage;
