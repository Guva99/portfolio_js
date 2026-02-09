import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'client/src/assets/images';

const projects = [
  'project-wowtickets.webp',
  'project-apeiron.webp',
  'project-punicapp.webp',
  'project-lofty.webp',
  'project-wisecity.webp',
  'project-tavria.webp',
  'project-sdvor.webp'
];

async function optimize() {
  for (const filename of projects) {
    const filePath = path.join(imagesDir, filename);
    const tempPath = path.join(imagesDir, `temp-${filename}`);
    
    if (fs.existsSync(filePath)) {
      try {
        console.log(`Processing ${filename}...`);
        
        // Rename original to temp
        fs.renameSync(filePath, tempPath);
        
        // Process from temp back to original
        await sharp(tempPath)
          .resize(800) // Ensure consistent size
          .webp({ quality: 80 })
          .toFile(filePath);
          
        console.log(`Optimized ${filename}`);
        
        // Remove temp file
        fs.unlinkSync(tempPath);
      } catch (e) {
        console.error(`Error processing ${filename}:`, e);
        // Try to restore if something went wrong
        if (fs.existsSync(tempPath) && !fs.existsSync(filePath)) {
            fs.renameSync(tempPath, filePath);
        }
      }
    } else {
      console.warn(`File not found: ${filename}`);
    }
  }
}

optimize();
