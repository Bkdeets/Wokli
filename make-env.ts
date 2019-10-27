const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');

let isProd = process.env.PRODUCTION;
let IsProdBool = (isProd === 'true' ? true : false);
let targetPath = './src/environments/environment.ts';
if (IsProdBool) {
    targetPath = './src/environments/environment.prod.ts';
}

const envConfigFile = `export const environment = {
    production: ${IsProdBool},
    BACKEND_API_KEY: '${process.env.COFFEEPOT_BACKEND_API_KEY}'
};`
;
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
fs.writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});