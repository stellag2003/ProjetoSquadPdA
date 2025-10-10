//import {testeMusicas} from "./musicaController.js"



const testeMusicas = [{nome: "Oceano",
    Cantor: "Djavan"
},
{nome: "lua cheia",
    cantor: "Marina Sena"
}]



const playlistAleatoria = [];

function gerarPlaylistAleatoria () {
    const numParaMover = Math.min(testeMusicas.length);

    for (let i=0; i<numParaMover; i++) {
        const indiceAleatorio = parseInt(Math.random() *testeMusicas.length);

        const elementoAleatorio = testeMusicas.splice(indiceAleatorio,1) [0]
        playlistAleatoria.push(elementoAleatorio);
    }
   return console.log(playlistAleatoria);     
}
gerarPlaylistAleatoria()