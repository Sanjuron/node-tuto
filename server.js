//requête du module http
const http = require('http');
const { url } = require('inspector');
const fs = require('fs');

const _ = require('lodash');
//méthode pour créer un serveur. Cette méthode est lancée à chaque fois qu'une requête au serveur est faite
 const server = http.createServer((req, res) => {

    //set header content type
    res.setHeader('Content-type', "text/html");

    //lodash
    const num =  _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("hello");
    });

    greet();
    greet();

    //mise en place d'un système de routing simple avec les status codes
    let path = './views/';
    switch(req.url){
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; // code redirection
            res.setHeader('Location', '/about'); //mise en place d'une redirection. 
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //envoyer un fichier html
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
 }) 

 // le nombre entre parenthèse correspond au numéro du port que l'on souhaite écouter
 server.listen(3000, 'localhost', () => {
     console.log("listening for resquest on port 3000");
 })


