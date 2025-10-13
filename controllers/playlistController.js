// INTEGRAÇÃO (NOVO): Importa a Classe Playlist do arquivo Playlist.js
import Playlist from '../classes/Playlist.js';
import { rl } from './musicaController.js';


// Falso banco de dados:
let playlists = [];

// CRUD 

// CRIAR: (ALTERADO: usa a Classe Playlist importada)
export function criarPlaylist(callback) {
    rl.question("Digite o nome da playlist: ", (nome) => {
        const novaPlaylist = new Playlist(nome); 
        playlists.push(novaPlaylist);
        console.log(`Playlist "${nome}" criada com sucesso!`);

        if (callback) callback();
        
    });
}

// LISTAR:
export function listarPlaylist(callback) {
    return playlists;
     if (callback) callback();
}

// ATUALIZAR: (Correção de digitação em playlistParaAtualizar)
export function atualizarNomeDaPlaylist(nomeAtual, novoNome) {
    var playlistParaAtualizar = playlists.find(function(p) {
        return p.nome === nomeAtual;
    });

    if (playlistParaAtualizar) { // CORREÇÃO AQUI: era 'playlistsParaAtualizar'
        playlistParaAtualizar.nome = novoNome;
    
        return playlistParaAtualizar;
    } else {
        return null;
    }
}

// DELETAR: (Correção de digitação em .length)
export function deletarPlaylist(nomeParaDeletar) {
    var tamanhoOriginal = playlists.length;

    var playlistsFiltradas = playlists.filter(function(p) {
        return p.nome !== nomeParaDeletar;
    });

    playlists = playlistsFiltradas;

    if (tamanhoOriginal !== playlists.length) { 
        return true;
    } else {
        return false;
    }
}

const testeMusicas = [{nome: "Oceano",
    Cantor: "Djavan"
},
{nome: "lua cheia",
    cantor: "Marina Sena"
}]


const playlistAleatoria = [];

export function gerarPlaylistAleatoria () {
    const numParaMover = Math.min(testeMusicas.length);

    for (let i=0; i<numParaMover; i++) {
        const indiceAleatorio = parseInt(Math.random() *testeMusicas.length);

        const elementoAleatorio = testeMusicas.splice(indiceAleatorio,1) [0]
        playlistAleatoria.push(elementoAleatorio);
    }
   return console.log(playlistAleatoria);     
}

