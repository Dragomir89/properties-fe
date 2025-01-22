import axios from 'axios';
import httpInstance from 'src/http/HttpInstance';

const tokenOfTheDay =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJyb2xlIjoiY2xpZW50IiwiZXhwIjoxNzMzNDYyODgwLCJpc3MiOiJwcm9wZXJ0aWVzIHdlYiBhcGkiLCJhdWQiOiJCZXN0IFN0b3JlIENsaWVudHMifQ.v2pY6YdQvVgjAosBsMnbqcoGWIiCmxWNS6KlufFm5S51t8mVvqFNed4npRt-6HqS5X-xwiWxd5roAqTYNXxdkA';

export const getLanguages = async () => {
  const res = await httpInstance.get('Account/languages');
  return res.data;
};

export const testProtectedUrl = async () => {
  const res = await httpInstance.get('Account/test-protected-url');
  console.log(res.data);
};

export const testClaims = async () => {
  console.log('protected');

  const URL = 'http://localhost:5117/api/Account/get-token-claims';
  const method = 'GET';
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
  };

  const response = await fetch(URL, { method, headers });

  const jsonData = await response.json();
  console.log(jsonData);
};


export const uploadUmage = async (formData: FormData) => {
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
  };
  const response = await fetch(
    'http://localhost:5117/api/Account/upload-image',
    {
      method: 'POST',
      headers,
      body: formData,
    }
  );
  console.log(response);
  if (response.ok) {
    console.log('Image uploaded successfully');
    debugger;
    const jsonData = await response.json();
    console.log(jsonData);
    debugger;
    return jsonData;
  } else {
    console.error('Error uploading image');
  }
  return '';
};

export const uploadImageAxios = async (formData: FormData) => {
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
  };
  const res = await axios({
    method: 'post',
    url: 'http://localhost:5117/api/Account/upload-image',
    data: formData,
    headers,
    // headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const addCity = async (city: string) => {
  const body = { name: city };
  const res = await httpInstance.post('Admin/add-city', body);
  return res.data;
};

export const addNeghorhood = async (name: string, parentId: number) => {
  const data = { name, parentId };
  const res = await httpInstance.post('Admin/add-construction-type', data);
  return res.data;
};

export const getAllCities = async () => {
  const res = await httpInstance.get('Admin/all-cities');
  return res.data;
};

export const addConstructionType = async (name: string) => {
  const data = { name };
  const res = await httpInstance.post('Admin/add-construction-type', data);
  return res.data;
};

export const addPropertyType = async (name: string) => {
  const data = { name };
  const res = await httpInstance.post('Admin/add-property-type', data);
  return res.data;
};

export const addHetingType = async (name: string) => {
  const data = { name };
  const res = await httpInstance.post('Admin/add-heating-type', data);
  return res.data;
};

export const getProprtyMenusOptions = async () => {
  const res = await httpInstance.get('Property/property-menus-oiptions');
  return res.data;
};

export const addProprery = async (property: any) => {
  const res = await httpInstance.post('Property/add-property', property);
  return res.data;
};

export const login = async (body) => {
  const res = await httpInstance.post('Account/login', body);
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export const register = async (data: any) => {
  data.languagesIds = data.languages;
  return await httpInstance.post('Account/register', data);
};

export const forgotPassword = async (data: { email: string }) => {
  return await httpInstance.post('Account/forgot-password', data);
}

export const resetPassword = async (data: { password: string; token: string }) => {
  return await httpInstance.post('Account/reset-password', data);
}
