const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'gidasta',
  api_key: '962675384647377',
  api_secret: '1RZKTY1SXv67oSqv8eLPgyPLGzw'
});

// Function to upload a single file
const uploadFile = async (filePath, publicId) => {
  try {
    console.log(`Uploading ${filePath}...`);
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: 'ucak-bileti-static',
      resource_type: 'auto',
      overwrite: true
    });
    console.log(`✓ Uploaded: ${result.public_id} - ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`✗ Error uploading ${filePath}:`, error.message);
    return null;
  }
};

// Function to upload all files in a directory
const uploadDirectory = async (dirPath, folderName = '') => {
  const files = fs.readdirSync(dirPath);
  const results = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively upload subdirectories
      const subResults = await uploadDirectory(filePath, `${folderName}/${file}`);
      results.push(...subResults);
    } else if (stat.isFile()) {
      // Upload file
      const extension = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'].includes(extension)) {
        const fileName = path.basename(file, extension);
        const publicId = folderName ? `${folderName}/${fileName}` : fileName;
        const result = await uploadFile(filePath, publicId);
        if (result) {
          results.push({
            originalPath: filePath,
            cloudinaryUrl: result.secure_url,
            publicId: result.public_id
          });
        }
      }
    }
  }

  return results;
};

// Main function
const main = async () => {
  console.log('🚀 Starting Cloudinary upload...\n');

  try {
    // Upload public directory files
    const publicResults = await uploadDirectory('./public', 'public');
    
    console.log('\n📊 Upload Summary:');
    console.log(`Total files uploaded: ${publicResults.length}`);
    
    // Generate replacement mapping
    console.log('\n🔄 URL Replacement Mapping:');
    publicResults.forEach(result => {
      const localPath = result.originalPath.replace('./public/', '/');
      console.log(`"${localPath}" -> "${result.cloudinaryUrl}"`);
    });

    // Save mapping to file
    const mapping = {};
    publicResults.forEach(result => {
      const localPath = result.originalPath.replace('./public/', '/');
      mapping[localPath] = result.cloudinaryUrl;
    });

    fs.writeFileSync('./cloudinary-mapping.json', JSON.stringify(mapping, null, 2));
    console.log('\n💾 Mapping saved to cloudinary-mapping.json');

  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
};

// Run the script
main(); 