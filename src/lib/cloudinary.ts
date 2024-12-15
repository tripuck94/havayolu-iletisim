import { v2 as cloudinary } from 'cloudinary';

// Cloudinary yapılandırması
cloudinary.config({
  cloud_name: 'tripuck',
  api_key: '417349661273938',
  api_secret: 'temporary_secret'
});

// Function to upload image from URL to Cloudinary
export const uploadImageFromUrl = async (imageUrl: string) => {
  try {
    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: 'airline-services',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};

// Function to upload image file to Cloudinary
export const uploadImageFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/tripuck/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};