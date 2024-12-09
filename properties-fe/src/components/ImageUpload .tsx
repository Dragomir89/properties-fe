import React, { useState } from 'react';
import { uploadImageAxios, uploadUmage } from '../http';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>('');

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    setSelectedImage(event.target.files?.[0]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      // uploadUmage(formData);
      const url = await uploadImageAxios(formData);
      setImageUrl(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={imageUrl} width="100" height="50" />

      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;
