import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'client/src/assets/images';

async function optimize() {
  try {
    console.log('Optimizing Hero Portrait...');
    await sharp(path.join(imagesDir, 'me-new.jpg'))
      .resize(800)
      .webp({ quality: 80 })
      .toFile(path.join(imagesDir, 'hero-portrait.webp'));
    console.log('Hero Portrait optimized');
  } catch (e) {
    console.error('Error optimizing Hero Portrait:', e);
  }

  try {
    console.log('Optimizing Bg Texture...');
    await sharp(path.join(imagesDir, 'bg-texture.png'))
      .resize(1920) // Keep reasonable size for background
      .webp({ quality: 70 }) // Lower quality for texture is usually fine
      .toFile(path.join(imagesDir, 'bg-texture.webp'));
    console.log('Bg Texture optimized');
  } catch (e) {
    console.error('Error optimizing Bg Texture:', e);
  }
}

optimize();
