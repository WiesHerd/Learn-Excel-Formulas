const fs = require('fs');
const path = require('path');
const { IMAGES } = require('../utils/imageRegistry');

function verifyImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const missingImages = [];

  function checkImage(imagePath) {
    const fullPath = path.join(publicDir, imagePath);
    if (!fs.existsSync(fullPath)) {
      missingImages.push(imagePath);
    }
  }

  // Recursively check all images in the registry
  const checkObject = (obj) => {
    Object.values(obj).forEach(value => {
      if (typeof value === 'string') {
        checkImage(value);
      } else if (typeof value === 'object') {
        checkObject(value);
      }
    });
  };

  checkObject(IMAGES);

  if (missingImages.length > 0) {
    console.error('Missing images:');
    missingImages.forEach(img => console.error(`- ${img}`));
    process.exit(1);
  } else {
    console.log('All images verified successfully!');
  }
}

verifyImages(); 