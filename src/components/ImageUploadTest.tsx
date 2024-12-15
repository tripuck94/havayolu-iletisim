import { useState } from 'react';
import { uploadImageFile } from '@/lib/cloudinary';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const ImageUploadTest = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImageFile(file);
      setUploadedUrl(url);
      toast({
        title: "Başarılı!",
        description: "Resim başarıyla yüklendi.",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Hata!",
        description: "Resim yüklenirken bir hata oluştu.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="imageUpload"
        />
        <Button
          onClick={() => document.getElementById('imageUpload')?.click()}
          disabled={uploading}
        >
          {uploading ? 'Yükleniyor...' : 'Resim Seç'}
        </Button>
      </div>

      {uploadedUrl && (
        <div className="space-y-2">
          <p>Yüklenen Resim URL:</p>
          <img src={uploadedUrl} alt="Uploaded" className="max-w-xs rounded-lg shadow-lg" />
          <p className="text-sm text-gray-500 break-all">{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
};