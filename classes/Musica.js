export class Musica {
    constructor(nome, artista, genero, duracao, link, favorita = false) {
        this.nome = nome;
        this.artista = artista;
        this.genero = genero;
        this.duracao = duracao;
        this.link = link;
        this.favorita = favorita;
    }
}
