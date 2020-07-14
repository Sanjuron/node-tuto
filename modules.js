// pour importer les variables de façon destructurées
const {people, ages} = require('./people');

console.log(people, ages);



const os = require('os');

// récupère le nom de l'os et le nom du répertoire parent
console.log(os.platform(), os.homedir());