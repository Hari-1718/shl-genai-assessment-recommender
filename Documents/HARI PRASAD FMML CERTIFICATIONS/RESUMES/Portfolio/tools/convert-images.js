import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = path.resolve(process.cwd(), 'public', 'hero-main.png');
const outDir = path.resolve(process.cwd(), 'public');

if (!fs.existsSync(input)) {
  console.error('Input image not found:', input);
  process.exit(1);
}

const sizes = [1200, 800, 400];

async function run(){
  // create full-size webp
  await sharp(input).webp({quality:80}).toFile(path.join(outDir,'hero-main.webp'));

  for(const w of sizes){
    const out = path.join(outDir, `hero-main-${w}.webp`);
    await sharp(input).resize({width:w}).webp({quality:78}).toFile(out);
    console.log('written', out);
  }

  console.log('Done generating webp variants');
}

run().catch(e=>{console.error(e);process.exit(1)});
