export default class Musica {
    
    constructor(nome, artista, genero, duracao, favorita = false) {
        this.nome = nome;
        this.artista = artista;
        this.genero = genero;
        this.duracao = duracao;
        this.favorita = favorita;
    }

    marcarFavorita() {
        this.favorita = true;
    }

    desmarcarFavorita() {
        this.favorita = false;

    }

    info() {
    return {
        nome: this.nome,
        artista: this.artista,
        genero: this.genero,       
        favorita: this.favorita,          
        duracao: this.duracao       
    };
}
}
