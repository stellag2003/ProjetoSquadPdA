export class Musica {
    #link
    #duracao
    #genero
    constructor(nome, artista, genero, duracao, link, favorita = false) {
        this.nome = nome;
        this.artista = artista;
        this.#genero = genero;
        this.#duracao = duracao;
        this.#link = link;
        this.favorita = favorita;
    }

    marcarFavorita() {
        this.favorita = true;
    }

    desmarcarFavorita() {
        this.favorita = false;

    }

    get link() {
        return this.#link
    }

    get duracao() {
        return this.#duracao
    }

    get genero() {
        return this.#genero
    }

    info() {
    return {
        nome: this.nome,
        artista: this.artista,
        genero: this.genero,       
        favorita: this.favorita,
        link: this.link,            
        duracao: this.duracao       
    };
}
}
