import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'client/src/assets/images';

async function optimize() {
  // optimize true for two
  try {
    console.log('Optimizing TrueForTwo...');
    await sharp(path.join(imagesDir, 'project-truefortwo.png'))
      .resize(800) // Resize to reasonable width
      .webp({ quality: 80 })
      .toFile(path.join(imagesDir, 'project-truefortwo.webp'));
    console.log('TrueForTwo optimized to webp');
  } catch (e) {
    console.error('Error optimizing TrueForTwo:', e);
  }

  // optimize 2sky
  try {
    console.log('Re-processing 2Sky...');
    // It's already webp, but let's ensure it's good and resized if needed
    // We'll read it and write it back to a temp file then rename
    await sharp(path.join(imagesDir, 'project-2sky.webp'))
      .resize(800)
      .webp({ quality: 80 })
      .toFile(path.join(imagesDir, 'project-2sky-opt.webp'));
    
    fs.renameSync(path.join(imagesDir, 'project-2sky-opt.webp'), path.join(imagesDir, 'project-2sky.webp'));
    console.log('2Sky re-processed');
  } catch (e) {
    console.error('Error optimizing 2Sky:', e);
  }
}

optimize();
