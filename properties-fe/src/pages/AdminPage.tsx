import React, { useEffect, useState } from 'react';
import { addCity, addNeghorhood, getAllCities } from '../http';
import AddOptionOf from '../components/AddOptionOf';
import { Option } from '../common/types';
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitCity = () => {
    addCity(cityName);
    setCityName('');
  };

  return (
    <>
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
