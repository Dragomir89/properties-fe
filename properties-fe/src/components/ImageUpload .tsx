import React, { useRef, useState } from 'react';
import { uploadImageAxios, uploadUmage } from '../http';
import { Button } from '@mui/material';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    console.log('CHANGE');
    console.log(event.target.files?.[0]);
    setSelectedImage(event.target.files?.[0]);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Кликваме върху скрития <input>
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('SUBMIT');
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      const url = await uploadImageAxios(formData);
      setImageUrl(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={imageUrl} width="100" height="50" />
      <input
        style={{ display: 'none' }}
        type="file"
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Click me
      </Button>
    </form>
  );
};

export default ImageUpload;
