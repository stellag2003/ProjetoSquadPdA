// INTEGRAÇÃO (NOVO): Importa a Classe Playlist do arquivo Playlist.js
import Playlist from '../classes/Playlist.js';

// Falso banco de dados:
let playlists = [];

// CRUD 

// CRIAR: (ALTERADO: usa a Classe Playlist importada)
function criarPlaylist(nome) {
    const novaPlaylist = new Playlist(nome); // ALTERAÇÃO AQUI: usa a Classe Playlist

    playlists.push(novaPlaylist);
    return novaPlaylist;
}

// LISTAR:
function listarPlaylist() {
    return playlists;
}

// ATUALIZAR: (Correção de digitação em playlistParaAtualizar)
function atualizarNomeDaPlaylist(nomeAtual, novoNome) {
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
function deletarPlaylist(nomeParaDeletar) {
    var tamanhoOriginal = playlists.length;

    var playlistsFiltradas = playlists.filter(function(p) {
        return p.nome !== nomeParaDeletar;
    });

    playlists = playlistsFiltradas;

    if (tamanhoOriginal !== playlists.length) { // CORREÇÃO AQUI: era '.lngth'
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

