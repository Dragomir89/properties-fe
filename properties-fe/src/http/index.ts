import axios from 'axios';

const tokenOfTheDay =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJyb2xlIjoiY2xpZW50IiwiZXhwIjoxNzMzNDYyODgwLCJpc3MiOiJwcm9wZXJ0aWVzIHdlYiBhcGkiLCJhdWQiOiJCZXN0IFN0b3JlIENsaWVudHMifQ.v2pY6YdQvVgjAosBsMnbqcoGWIiCmxWNS6KlufFm5S51t8mVvqFNed4npRt-6HqS5X-xwiWxd5roAqTYNXxdkA';

export const register = () => {
  console.log('register');

  const fetchData = async () => {
    const method = 'POST';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      firstName: 'Dragomir',
      lastName: 'Mildov',
      email: 'drashoo@abv.bg',
      phone: '0889358720',
      address: 'Lozenec Cvetna Gradina 71a',
      password: 'testpass',
    };

    const response = await fetch('http://localhost:5117/api/Account/register', {
      method,
      headers,
      body: JSON.stringify(body),
    });
    const jsonData = await response.json();
    console.log(jsonData);
  };

  fetchData();
};

export const login = async () => {
  console.log('login');
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    email: 'drashoo@abv.bg',
    password: 'testpass',
  };

  const response = await fetch('http://localhost:5117/api/Account/login', {
    method,
    headers,
    body: JSON.stringify(body),
  });
  const jsonData = await response.json();
  console.log(jsonData);
};

export const testProtectedUrl = async () => {
  console.log('protected');

  const URL = 'http://localhost:5117/api/Account/test-protected-url';
  const method = 'GET';
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
  };

  const response = await fetch(URL, { method, headers });

  const jsonData = await response.json();
  console.log(jsonData);
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

export const forgotPassword = async () => {
  console.log('forgotPassword');
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    email: 'lubo@abv.bg',
  };

  const response = await fetch(
    'http://localhost:5117/api/Account/forgot-password',
    {
      method,
      headers,
      body: JSON.stringify(body),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
};

export const resetPassword = async () => {
  console.log('reset Password');
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    password: 'testnewpass',
    // get the token from email
    token:
      '6a5a7585-5e3b-4b87-b6b7-b97e72328690-ea6bbb11-a593-48c6-8752-dee1506f5a8a',
  };

  const response = await fetch(
    'http://localhost:5117/api/Account/reset-password',
    {
      method,
      headers,
      body: JSON.stringify(body),
    }
  );
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
  console.log('addCity');
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    name: city,
  };

  const response = await fetch('http://localhost:5117/api/Admin/add-city', {
    method,
    headers,
    body: JSON.stringify(body),
  });
  const jsonData = await response.json();
  console.log(jsonData);
};

export const addNeghorhood = async (name: string, parentId: number) => {
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const data = { name, parentId };
  const res = await axios({
    method: 'post',
    url: 'http://localhost:5117/api/Admin/add-neighborhood',
    data,
    headers,
  });
  return res.data;
};

export const getAllCities = async () => {
  const headers = {
    Authorization: 'Bearer ' + tokenOfTheDay,
  };

  const res = await axios({
    method: 'get',
    url: 'http://localhost:5117/api/Admin/all-cities',
    headers,
  });
  return res.data;
};
