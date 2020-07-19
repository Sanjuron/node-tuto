// toujours requérir les dépendances que l'on souhaite utiliser
const express = require("express");

const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
//localholst est implicite, pas besoin de l'ajouter
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    //send pour répondre à une url spécifique
    // send permet de rendre la commande setHeader obsolète
    //évite aussi de gérer les status code
    // res.send("<p>Page d'accueil</p>");
    // le deuxième paramètre permet d'établir le premier en chemin relatif en précisant que la racine du chemin est notre projet
    res.render('index', {title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    
    // res.send("<p>about</p>");
    res.render('about', {title: 'About'});
});

//redirection
app.get('/about-us', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
});


//404
app.use((req, res) => {
    res.render('404', {title: '404'});})