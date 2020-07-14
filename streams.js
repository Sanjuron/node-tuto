const fs = require('fs');

// indique à node où les lire datas / encoding pour traduire les données en texte
const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8'} );
const writeStream = fs.createWriteStream('./docs/doc4.txt');

// .on est un event listener (data listener)
// readStream.on('data', (chunk) => {
//     console.log('-----------new chunk--------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);