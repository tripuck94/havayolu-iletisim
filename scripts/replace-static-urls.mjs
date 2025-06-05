import fs from 'fs';
import path from 'path';

// Load mapping
const mapping = JSON.parse(fs.readFileSync('./cloudinary-mapping.json', 'utf8'));

// Function to replace URLs in a file
const replaceUrlsInFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Convert mapping keys to use forward slashes
    const normalizedMapping = {};
    Object.keys(mapping).forEach(key => {
      const normalizedKey = key.replace(/\\/g, '/').replace('public/', '/');
      normalizedMapping[normalizedKey] = mapping[key];
    });

    // Replace URLs
    Object.keys(normalizedMapping).forEach(localPath => {
      const cloudinaryUrl = normalizedMapping[localPath];
      
      // Create Cloudinary URL with auto format and quality
      const optimizedUrl = cloudinaryUrl
        .replace('/upload/', '/upload/f_auto,fl_lossy,q_auto/')
        .replace('.png', '')
        .replace('.jpg', '')
        .replace('.jpeg', '')
        .replace('.gif', '')
        .replace('.svg', '');

      // Replace in content
      const regex = new RegExp(`src=["']${localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
      const newContent = content.replace(regex, `src="${optimizedUrl}"`);
      
      if (newContent !== content) {
        console.log(`  ✓ Replaced: ${localPath} -> Cloudinary URL`);
        content = newContent;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated: ${filePath}`);
    }

  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
};

// Function to process all files in a directory
const processDirectory = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.git')) {
      processDirectory(filePath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      replaceUrlsInFile(filePath);
    }
  });
};

// Main function
const main = () => {
  console.log('🔄 Starting URL replacement...\n');
  
  // Process src directory
  processDirectory('./src');
  
  console.log('\n✅ URL replacement completed!');
};

main(); 