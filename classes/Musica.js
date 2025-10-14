export default class Musica {
    #nome
    #artista
    #genero
    #duracao
    #favorita
    constructor(nome, artista, genero, duracao, favorita = false) {
        this.#nome = nome;
        this.#artista = artista;
        this.#genero = genero;
        this.#duracao = duracao;
        this.#favorita = favorita;
    }
 
    get nome() { return this.#nome; }
    get artista() { return this.#artista; }
    get genero() { return this.#genero; }
    get duracao() { return this.#duracao; }
    get favorita() { return this.#favorita; }

    set nome(valor) {
        this.#nome = valor.trim();
    }
    set artista(valor) {
        this.#artista = valor.trim();
    }
    set genero(valor) {
        this.#genero = valor.trim();
    }

    set duracao(valor) {
        this.#duracao = valor.trim();
    }
    set favorita(valor) {
        this.#favorita = Boolean(valor);
    }
   
    marcarFavorita() {
        this.#favorita = true;
    }

    desmarcarFavorita() {
        this.#favorita = false;
    }

    info() {
        return {
            nome: this.#nome,
            artista: this.#artista,
            genero: this.#genero,
            favorita: this.#favorita,
            duracao: this.#duracao
        };
    }
}
