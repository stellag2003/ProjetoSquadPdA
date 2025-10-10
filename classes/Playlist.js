import { bancoMusicas } from './data/bancoMusicas.js';

export default class Playlist {
    #musicas = [];

    constructor(nome, inicial = true) {
        this.nome = nome;

        if (inicial) {
            this.#musicas = [...bancoMusicas];
        }
    }

    adicionarMusica(musica) {
        this.#musicas.push(musica);
    }

    listarTodas() {
        return this.#musicas.map(m => m.info());
    }

    listarPorGenero(genero) {
        return this.#musicas
            .filter(m => m.genero === genero)
            .map(m => m.info());
    }

    listarFavoritas() {
        return this.#musicas
            .filter(m => m.favorita)
            .map(m => m.info());
    }

    get todasMusicas() {
        return [...this.#musicas]; 
    }
}

const minhaPlaylist = new Playlist("Favoritas");
minhaPlaylist.adicionarMusica(bancoMusicas[0]); // adiciona a primeira música do banco