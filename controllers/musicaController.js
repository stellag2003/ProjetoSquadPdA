import readline from "readline";
import { bancoMusica } from '../data/bancoMusica.js'
import { schemas } from "../validation/schemas.js";
import Musica from '../classes/Musica.js'

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function adicionaMusicas(callback) {
    console.log("\n");
    rl.question("Nome da música a ser adicionada: ", (nome) => {
        const validNome = schemas.nome.safeParse(nome);
        if (!validNome.success) {
            console.log(validNome.error.issues[0].message);
            return adicionaMusicas();
        }

        rl.question("Artista: ", (artista) => {
            const validArtista = schemas.artista.safeParse(artista);
            if (!validArtista.success) {
                console.log(validArtista.error.issues[0].message);
                return adicionaMusicas();
            }

            rl.question("Gênero: ", (genero) => {
                const validGenero = schemas.genero.safeParse(genero);
                if (!validGenero.success) {
                    console.log(validGenero.error.issues[0].message);
                    return adicionaMusicas();
                }

                rl.question("Duração (mm:ss): ", (duracao) => {
                    const validDuracao = schemas.duracao.safeParse(duracao);
                    if (!validDuracao.success) {
                        console.log(validDuracao.error.issues[0].message);
                        return adicionaMusicas();
                    }

                    rl.question("Favorita? (s/n): ", (fav) => {
                        const favorita = fav.toLowerCase() === "s";
                        const novaMusica = new Musica(
                            validNome.data,
                            validArtista.data,
                            validGenero.data,
                            validDuracao.data,
                            favorita
                        );

                        bancoMusica.push(novaMusica);

                        listaMusicas()
                        console.log("\n");
                        if (callback) callback();
                    });
                });
            });
        });
    });
}

export function listaMusicas(callback) {
   
    console.log("\nLista de Músicas:");
    if (bancoMusica.length === 0) {
        console.log("Nenhuma música encontrada.");
    } else {
        console.table(
            bancoMusica.map((m, i) => ({
                Nº: i + 1,
                Nome: m.nome,
                Artista: m.artista,
                Gênero: m.genero,
                Duração: m.duracao,
                Favorita: m.favorita ? "Sim" : "Não",
            }))
        );
    }

    if (callback && typeof callback === 'function') {
        callback();
    }
console.log("\n");
}

export function deletaMusicas(callback) {
     console.log("\n"); 
    if (bancoMusica.length === 0) {
        console.log("Nenhuma música para deletar.");
        return callback();
    }

    bancoMusica.forEach((m, i) => console.log(`${i + 1} - ${m.nome} (${m.artista})`));

    rl.question("Digite o número da música a ser deletada: ", (numStr) => {
        const index = parseInt(numStr) - 1;
        if (isNaN(index) || index < 0 || index >= bancoMusica.length) {
            console.log("Número inválido.");
            return deletaMusicas();
        }

        const removida = bancoMusica.splice(index, 1);
        console.log(`Música "${removida[0].nome}" deletada com sucesso.`);
        listaMusicas();
        console.log("\n"); 
        if (callback) callback();
    });

}

export function atualizaMusicas(callback) {
    if (bancoMusica.length === 0) {
        console.log("Nenhuma música para atualizar.");
        return callback();
    }

    bancoMusica.forEach((m, i) => console.log(`${i + 1} - ${m.nome} (${m.artista})`));

    rl.question("Número da música: ", (numStr) => {
        const index = parseInt(numStr) - 1;
        if (isNaN(index) || index < 0 || index >= bancoMusica.length) {
            console.log("Número inválido.");
            return atualizaMusicas();
        }

        const musica = bancoMusica[index];
        rl.question(`Nova música (${musica.nome}): `, (novoNome) => {
            if (novoNome.trim()) {
                const valid = schemas.nome.safeParse(novoNome);
                if (!valid.success) return console.log(valid.error.issues[0].message);
                musica.nome = novoNome;
            }

            rl.question(`Novo artista (${musica.artista}): `, (novoArtista) => {
                if (novoArtista.trim()) {
                    const valid = schemas.artista.safeParse(novoArtista);
                    if (!valid.success) return console.log(valid.error.issues[0].message);
                    musica.artista = novoArtista;
                }

                rl.question(`Novo gênero (${musica.genero}): `, (novoGenero) => {
                    if (novoGenero.trim()) {
                        const valid = schemas.genero.safeParse(novoGenero);
                        if (!valid.success) return console.log(valid.error.issues[0].message);
                        musica.genero = novoGenero;
                    }

                    rl.question(`Nova duração (${musica.duracao}): `, (novaDuracao) => {
                        if (novaDuracao.trim()) {
                            const valid = schemas.duracao.safeParse(novaDuracao);
                            if (!valid.success) return console.log(valid.error.issues[0].message);
                            musica.duracao = novaDuracao;
                        }

                        rl.question(`Favorita? (s/n) (${musica.favorita ? "s" : "n"}): `, (fav) => {
                            if (fav.trim()) musica.favorita = fav.toLowerCase() === "s";
                            console.log("Música atualizada com sucesso!");
                            listaMusicas();
                            return callback();
                        });
                    });
                });
            });
        });
    });
}

export function listaFavoritas(callback) {
    const favoritas = bancoMusica.filter((m) => m.favorita === true);

    console.log("\n🎵 Músicas Favoritas:");
    if (favoritas.length === 0) {
        console.log("Nenhuma música favorita encontrada.");
    } else {
        console.table(
            favoritas.map((m, i) => ({
                Nome: m.nome,
                Artista: m.artista,
                Favorita: '❤️'
            }))
        );
        if (callback) callback();
    }
}

export function filtrarPorGenero(callback) {
    rl.question("Digite o gênero: ", (genero) => {
        const resultado = bancoMusica.filter(
            (m) => m.genero.toLowerCase() === genero.toLowerCase()
        );
        if (resultado.length === 0)
            console.log(`Nenhuma música encontrada para o gênero "${genero}".`);
        else console.table(
            resultado.map((m, i) => ({
                Nome: m.nome,
                Artista: m.artista,
                Genero: m.genero
            }))
        );
        if (callback) callback();
    });
}

