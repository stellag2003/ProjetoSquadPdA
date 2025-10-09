// Playlist.js

// ==========================
// Classes
// ==========================

// Classe base para todas as músicas
class Musica {
    constructor(nome, artista) {
        this.nome = nome;
        this.artista = artista;
        this.genero = 'Geral';
        this.favorita = false;
    }

    marcarFavorita() {
        this.favorita = true;
    }

    desmarcarFavorita() {
        this.favorita = false;
    }

    info() {
        return `${this.nome} - ${this.artista} (${this.genero})${this.favorita ? ' 💕 ' : ''}`;
    }
}

// Subclasses para cada gênero
class Pop extends Musica {
    constructor(nome, artista) {
        super(nome, artista);
        this.genero = 'Pop';
    }
}

class Sertanejo extends Musica {
    constructor(nome, artista) {
        super(nome, artista);
        this.genero = 'Sertanejo';
    }
}

class MPB extends Musica {
    constructor(nome, artista) {
        super(nome, artista);
        this.genero = 'MPB';
    }
}

class Rap extends Musica {
    constructor(nome, artista) {
        super(nome, artista);
        this.genero = 'Rap';
    }
}

class Trap extends Musica {
    constructor(nome, artista) {
        super(nome, artista);
        this.genero = 'Trap';
    }
}

// Classe Playlist
class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    listarTodas() {
        return this.musicas.map(m => m.info());
    }

    listarPorGenero(genero) {
        return this.musicas
            .filter(m => m.genero === genero)
            .map(m => m.info());
    }

    listarFavoritas() {
        return this.musicas
            .filter(m => m.favorita)
            .map(m => m.info());
    }
}

// ==========================
// Criando músicas brasileiras
// ==========================

const m1 = new Pop('Surreal', 'Luísa Sonza');
const m2 = new Pop('Motinha 2.0', 'Luísa Sonza');
const m3 = new MPB('Amor I Love You', 'Marisa Monte');
const m4 = new Pop('Sagrado Profano', 'Luísa Sonza');
const m5 = new Pop('Envolver', 'Anitta');
const m6 = new Sertanejo('Derreter a Aliança', 'Zé Neto e Cristiano');
const m7 = new Sertanejo('Barulho do Foguete', 'Zé Neto e Cristiano');
const m8 = new Sertanejo('Seu Policia', 'Zé Neto e Cristiano');
const m9 = new MPB('Por Supuesto', 'Marina Sena');
const m10 = new Sertanejo('Infil', 'Marilía Mendonça');
const m11 = new Sertanejo('Solteiro não Trai', 'Gustavo Mioto');
const m12 = new MPB('Me Sinto Abençoada', 'Marina Sena');
const m13 = new Rap('Terapia', 'Ebony');
const m14 = new Rap('Extraordinária', 'Ebony');
const m15 = new Sertanejo('Anti Amor', 'Gustavo Mioto');
const m16 = new Rap('Amina', 'Tasha & Tracie');
const m17 = new Rap('Diz', 'Duquesa');
const m18 = new Trap('Purple Rain', 'Duquesa');
const m19 = new Rap('Dharma', 'Ajuliacosta');
const m20 = new Rap('Set Ajc2', 'Ajuliacosta');

// ==========================
// Criando playlist - (BLOCO DE TESTES REMOVIDO PARA EXPORTAÇÃO)
// ==========================

// ==========================
// Exibindo no console - (BLOCO DE TESTES REMOVIDO PARA EXPORTAÇÃO)
// ==========================

// EXPORTAÇÃO PARA O CONTROLADOR (NOVO)
module.exports = {
    Playlist,
    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
    m11, m12, m13, m14, m15, m16, m17, m18, m19, m20
};