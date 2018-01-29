// const Jimp = require("jimp");
// const fs = require('fs');
// const path = require('path');
// const Promise = require('bluebird');
//
//
// const MASK = fs.readFileSync(path.join(__dirname, 'rounde_mask.png'));
//
// Jimp.read(Buffer.from(MASK))
//   .then(mask => {
//     return mask;
//   })

const foo = () => {

};

foo(console.log(1), console.log(2), console.log(3));



// Promise.all([
//   Jimp.read("https://s3-eu-west-1.amazonaws.com/memegenerator.dev/0b/0b3fa603a0e5a401abb21472bd190bdb.png"),
//   Jimp.read("./rounde_mask.png")
// ])
//   .spread((image, mask) => {
//     mask.resize(image.bitmap.width, image.bitmap.height);
//
//     return image.mask(mask, 0, 0);
//   })
//   .then(image => {
//     return new Promise(resolve => {
//       image.getBuffer(Jimp.MIME_PNG, (error, result) => resolve(result))
//     });
//   })
//   .then(imageBuffer => {
//     fs.writeFileSync('result.png', imageBuffer, "binary");
//   })
//   .catch(error => {
//     console.log(error)
//   })
//   .finally(() => process.exit(0));


