// toujours requérir les dépendances que l'on souhaite utiliser
const express = require("express");

const app = express();

//listen for requests
//localholst est implicite, pas besoin de l'ajouter
app.listen(3000);

app.get('/', (req, res) => {
    //send pour répondre à une url spécifique
    // send permet de rendre la commande setHeader obsolète
    //évite aussi de gérer les status code
    // res.send("<p>Page d'accueil</p>");
    // le deuxième paramètre permet d'établir le premier en chemin relatif en précisant que la racine du chemin est notre projet
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    
    // res.send("<p>about</p>");
    res.sendFile('./views/about.html', {root: __dirname});

});

//redirection
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})