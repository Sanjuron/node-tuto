const fs = require('fs');

//read files

    // asynchrone
    // fs.readFile('./docs/txt.md', (err, data) => {
    //     if (err) {
    //         console.llog(err);
    //     }
    //     console.log(data.toString());
    // })

    // console.log('last line');


//écrire fichiers
    // param1: chemin du fichier, param2: le texte avec lequel on remplace le contenu
    // si le param1 ne renvoie à aucun document connu alors il le crée
    // fs.writeFile('./docs/txt2.md', "Salut salut", () => {
    //     console.log("file was written");
    // })


//directories
    //crée un dossier
    if (!fs.existsSync('./assets')){
        fs.mkdir('./assets', (err) => {
            if (err) {
                console.log(err);
            }
            console.log("dossier créé");
        });
    } else {
        fs.rmdir('./assets', (err) => {
            if (err) {
                console.log(err)
            }
            console.log('dossier supprimé');
        })
    }

// supprimer fichiers

    if (fs.existsSync('./docs/deleteme.txt')) {
        fs.unlink('./docs/deleteme.txt', (err) => {
            if (err){
                console.log(err)
            }
            console.log('fichier supprimé')
        })
    }