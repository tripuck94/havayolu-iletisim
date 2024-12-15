import { v2 as cloudinary } from 'cloudinary';
import { supabase } from './supabase';

// Cloudinary yapılandırması için async bir fonksiyon oluşturalım
async function configureCloudinary() {
  try {
    // Supabase'den API secret'ı almaya çalışalım
    const { data: secretData, error: secretError } = await supabase
      .from('secrets')
      .select('value')
      .eq('name', 'CLOUDINARY_API_SECRET')
      .single();

    if (secretError) {
      console.error('Supabase secret error:', secretError);
      throw secretError;
    }

    // Cloudinary yapılandırması
    cloudinary.config({
      cloud_name: 'tripuck',
      api_key: '417349661273938',
      api_secret: secretData?.value || 'temporary_secret' // Güvenli bir varsayılan değer
    });
  } catch (error) {
    console.error('Cloudinary configuration error:', error);
  }
}

// İlk yapılandırmayı çalıştır
configureCloudinary();

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