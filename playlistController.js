// playlistController.js

// INTEGRAÇÃO (NOVO): Importa a Classe Playlist do arquivo Playlist.js
const { Playlist, m1, m3, m10, m17 } = require('./Playlist'); 


// Falso banco de dados:
let playlists = [];


// CRUD 

// 1. CRIAR: (ALTERADO: usa a Classe Playlist importada)
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


// BLOCO DE TESTES DE INTEGRAÇÃO (Adicionado para rodar e testar)

console.log("--- TESTE DE INTEGRAÇÃO DO CONTROLADOR ---");

const pRock = criarPlaylist("Rock Clássico");
const pLofi = criarPlaylist("Estudos Lofi");

console.log("Playlists Criadas:", listarPlaylist().map(p => p.nome)); // [ 'Rock Clássico', 'Estudos Lofi' ]

// Adicionando músicas (usa o método e as músicas da classe Playlist)
pRock.adicionarMusica(m1);  
pRock.adicionarMusica(m17); 
pLofi.adicionarMusica(m3); 

console.log("\n--- TESTE DE ATUALIZAÇÃO ---");
atualizarNomeDaPlaylist("Estudos Lofi", "Lofi Relax");
console.log("Playlists após atualização:", listarPlaylist().map(p => p.nome)); // [ 'Rock Clássico', 'Lofi Relax' ]


console.log("\n--- TESTE DE LISTAGEM DE MÚSICAS ---");
// Lista o conteúdo da playlist Rock (usa o método da sua amiga)
console.log(`Conteúdo de '${pRock.nome}':`);
console.log(pRock.listarTodas()); 


console.log("\n--- TESTE DE DELEÇÃO ---");
// Deleta uma playlist
console.log("Deletando 'Rock Clássico' (Sucesso):", deletarPlaylist("Rock Clássico")); // true
console.log("Deletando 'Rock Clássico' novamente (Falha):", deletarPlaylist("Rock Clássico")); // false

console.log("\nLista Final:");
console.log(listarPlaylist().map(p => p.nome)); // [ 'Lofi Relax' ]