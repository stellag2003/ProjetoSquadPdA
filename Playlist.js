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
export default class Playlist {
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

export const m1 = new Pop('Surreal', 'Luísa Sonza');
export const m2 = new Pop('Motinha 2.0', 'Luísa Sonza');
export const m3 = new MPB('Amor I Love You', 'Marisa Monte');
export const m4 = new Pop('Sagrado Profano', 'Luísa Sonza');
export const m5 = new Pop('Envolver', 'Anitta');
export const m6 = new Sertanejo('Derreter a Aliança', 'Zé Neto e Cristiano');
export const m7 = new Sertanejo('Barulho do Foguete', 'Zé Neto e Cristiano');
export const m8 = new Sertanejo('Seu Policia', 'Zé Neto e Cristiano');
export const m9 = new MPB('Por Supuesto', 'Marina Sena');
export const m10 = new Sertanejo('Infil', 'Marilía Mendonça');
export const m11 = new Sertanejo('Solteiro não Trai', 'Gustavo Mioto');
export const m12 = new MPB('Me Sinto Abençoada', 'Marina Sena');
export const m13 = new Rap('Terapia', 'Ebony');
export const m14 = new Rap('Extraordinária', 'Ebony');
export const m15 = new Sertanejo('Anti Amor', 'Gustavo Mioto');
export const m16 = new Rap('Amina', 'Tasha & Tracie');
export const m17 = new Rap('Diz', 'Duquesa');
export const m18 = new Trap('Purple Rain', 'Duquesa');
export const m19 = new Rap('Dharma', 'Ajuliacosta');
export const m20 = new Rap('Set Ajc2', 'Ajuliacosta');
