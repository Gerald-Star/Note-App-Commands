import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const readPjson = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pjsonPath = `${__dirname}/package.json`;

  const fileContent = await fs.readFile(pjsonPath, 'utf-8');
  const parsedContent = JSON.parse(fileContent);

  console.log(parsedContent);
};

//readPjson();


const writeFile = async () => {
  const newFile = new URL('./demo.js', import.meta.url).pathname
  await fs.writeFile(newFile, `console.log('yoo!)`)

}


//readPjson

writeFile()

// destructuring

const obj = {
  shooting: 'star',
  dribbling: 'ball',
  jumping: 'rope',
}

//const jumping = obj.jumping
//const dribbling = obj.dribbling

// console.log(jumping, dribbling)

const { dribbling, jumping } = obj