import { bancoMusica } from '../data/bancoMusica.js';

export default class Playlist {
    #musicas = [];
    #nome

    constructor(nome, inicial = true) {
        this.nome = nome;

        if (inicial) {
            this.#musicas = [...bancoMusica];
        }
    }

    set nome(valor) {
        if (!valor) throw new Error("O nome da música não pode ser vazio.");
        this.#nome = valor;
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
