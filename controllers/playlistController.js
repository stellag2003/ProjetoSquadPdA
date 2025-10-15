import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
// teste de musicas
const testeMusicas = [ 
{nome: "Oceano", cantor: "Djavan", genero: "MPB"},
{nome: "Lua Cheia", cantor: "Marina Sena", genero: "Pop"},
{nome: "Céu Azul", cantor: "Charlie Brown Jr.", genero: "Rock"},
{nome: "Deixa", cantor: "Lagum", genero: "Pop"}
];
// gerar playlist aleatoria
function gerarPlaylistAleatoria() {
  const copiaMusicas = [...testeMusicas]; // não altera o array original
  const playlistAleatoria = [];

  while (copiaMusicas.length > 0) {
    const indice = Math.floor(Math.random() * copiaMusicas.length);
    playlistAleatoria.push(copiaMusicas.splice(indice, 1)[0]);
  }

  console.log("Playlist aleatória gerada:", playlistAleatoria);
  return playlistAleatoria;
}

//gerar banco de playlists
const bancoDePlaylists = [];


function criarPlaylist(nome, genero) {
  const musicasFiltradas = testeMusicas.filter(
    (musica) => musica.genero.toLowerCase() === genero.toLowerCase()
  );

  if (musicasFiltradas.length === 0) {
    console.log(`Nenhuma música encontrada para o gênero "${genero}"`);
    return null;
  }

  const playlistAleatoria = [...musicasFiltradas].sort(() => Math.random() - 0.5);

  const novaPlaylist = { nome, genero, musicas: playlistAleatoria };
  bancoDePlaylists.push(novaPlaylist);

  console.log(`Playlist "${nome}" criada com sucesso!`);
  // Use novaPlaylist aqui, não 'nova'
  console.log("Conteúdo da playlist:", novaPlaylist.musicas.map(m => `${m.nome} - ${m.cantor}`));

  return novaPlaylist;
}




const rl = readline.createInterface({ input, output });


rl.question('Digite o nome da playlist: ', (nome) => {
  rl.question('Digite o gênero da playlist: ', (genero) => {
    const nova = criarPlaylist(nome, genero);
    if (nova) {
      console.log("Conteúdo da playlist:", nova.musicas.map(m => `${m.nome} - ${m.cantor}`));
    }
      console.log("Banco de playlists atual:", JSON.stringify(bancoDePlaylists, null, 2));
    
    rl.close();
    });
});