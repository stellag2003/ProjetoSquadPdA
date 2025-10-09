// INTEGRAÇÃO (NOVO): Importa a Classe Playlist do arquivo Playlist.js
//import { Playlist, m1, m3, m10, m17 }  from './Playlist'; 
import Playlist, { m1, m3, m10, m17 } from './Playlist.js';

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

