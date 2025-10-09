import readline from "readline";
import { bancoMusicas } from "../classes/bancoMusica.js";
import { Musica } from "../classes/Musica.js";
import { schemas } from "../validation/schemas.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function exibirMenu() {
    console.log(`
===========================
MENU DE MÚSICAS
===========================
1 - Adicionar música
2 - Listar todas as músicas
3 - Atualizar música
4 - Deletar música
5 - Listar favoritas
6 - Filtrar por gênero
0 - Sair
---------------------------
`);

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1": adicionaMusica(); break;
            case "2": listaMusicas(); break;
            case "3": atualizaMusica(); break;
            case "4": deletaMusica(); break;
            case "5": listaFavoritas(); break;
            case "6": filtrarPorGenero(); break;
            case "0": console.log("Saindo..."); rl.close(); break;
            default: console.log("Opção inválida!"); exibirMenu();
        }
    });
}

function adicionaMusica() {
    rl.question("Nome da música: ", (nome) => {
        const validNome = schemas.nome.safeParse(nome);
        if (!validNome.success) {
            console.log(validNome.error.errors[0].message);
            return adicionaMusica();
        }

        rl.question("Artista: ", (artista) => {
            const validArtista = schemas.artista.safeParse(artista);
            if (!validArtista.success) {
                console.log(validArtista.error.errors[0].message);
                return adicionaMusica();
            }

            rl.question("Gênero: ", (genero) => {
                const validGenero = schemas.genero.safeParse(genero);
                if (!validGenero.success) {
                    console.log(validGenero.error.errors[0].message);
                    return adicionaMusica();
                }

                rl.question("Duração (mm:ss): ", (duracao) => {
                    const validDuracao = schemas.duracao.safeParse(duracao);
                    if (!validDuracao.success) {
                        console.log(validDuracao.error.errors[0].message);
                        return adicionaMusica();
                    }

                    rl.question("Link: ", (link) => {
                        const validLink = schemas.link.safeParse(link);
                        if (!validLink.success) {
                            console.log(validLink.error.errors[0].message);
                            return adicionaMusica();
                        }

                        rl.question("Favorita? (s/n): ", (fav) => {
                            const favorita = fav.toLowerCase() === "s";
                            const novaMusica = new Musica(
                                validNome.data,
                                validArtista.data,
                                validGenero.data,
                                validDuracao.data,
                                validLink.data,
                                favorita
                            );

                            bancoMusicas.push(novaMusica);
                            console.log("Música adicionada com sucesso!");
                            exibirMenu();
                        });
                    });
                });
            });
        });
    });
}

function listaMusicas(lista = bancoMusicas, mostrarMenu = true) {
    console.log("\nLista de Músicas:");
    if (lista.length === 0) {
        console.log("Nenhuma música encontrada.");
    } else {
        console.table(
            lista.map((m, i) => ({
                Nº: i + 1,
                Nome: m.nome,
                Artista: m.artista,
                Gênero: m.genero,
                Duração: m.duracao,
                Link: m.link,
                Favorita: m.favorita ? "Sim" : "Não",
            }))
        );
    }
    if (mostrarMenu) exibirMenu();
}

function listaFavoritas() {
    const favoritas = bancoMusicas.filter((m) => m.favorita);
    if (favoritas.length === 0) console.log("Nenhuma música favorita encontrada.");
    else listaMusicas(favoritas, false);
    exibirMenu();
}

function filtrarPorGenero() {
    rl.question("Digite o gênero: ", (genero) => {
        const resultado = bancoMusicas.filter(
            (m) => m.genero.toLowerCase() === genero.toLowerCase()
        );
        if (resultado.length === 0)
            console.log(`Nenhuma música encontrada para o gênero "${genero}".`);
        else listaMusicas(resultado, false);
        exibirMenu();
    });
}

function atualizaMusica() {
    if (bancoMusicas.length === 0) {
        console.log("Nenhuma música para atualizar.");
        return exibirMenu();
    }

    bancoMusicas.forEach((m, i) => console.log(`${i + 1} - ${m.nome} (${m.artista})`));

    rl.question("Número da música: ", (numStr) => {
        const index = parseInt(numStr) - 1;
        if (isNaN(index) || index < 0 || index >= bancoMusicas.length) {
            console.log("Número inválido.");
            return atualizaMusica();
        }

        const musica = bancoMusicas[index];
        rl.question(`Novo nome (${musica.nome}): `, (novoNome) => {
            if (novoNome.trim()) {
                const valid = schemas.nome.safeParse(novoNome);
                if (!valid.success) return console.log(valid.error.errors[0].message);
                musica.nome = novoNome;
            }

            rl.question(`Novo artista (${musica.artista}): `, (novoArtista) => {
                if (novoArtista.trim()) {
                    const valid = schemas.artista.safeParse(novoArtista);
                    if (!valid.success) return console.log(valid.error.errors[0].message);
                    musica.artista = novoArtista;
                }

                rl.question(`Novo gênero (${musica.genero}): `, (novoGenero) => {
                    if (novoGenero.trim()) {
                        const valid = schemas.genero.safeParse(novoGenero);
                        if (!valid.success) return console.log(valid.error.errors[0].message);
                        musica.genero = novoGenero;
                    }

                    rl.question(`Nova duração (${musica.duracao}): `, (novaDuracao) => {
                        if (novaDuracao.trim()) {
                            const valid = schemas.duracao.safeParse(novaDuracao);
                            if (!valid.success) return console.log(valid.error.errors[0].message);
                            musica.duracao = novaDuracao;
                        }

                        rl.question(`Novo link (${musica.link}): `, (novoLink) => {
                            if (novoLink.trim()) {
                                const valid = schemas.link.safeParse(novoLink);
                                if (!valid.success) return console.log(valid.error.errors[0].message);
                                musica.link = novoLink;
                            }

                            rl.question(`Favorita? (s/n) (${musica.favorita ? "s" : "n"}): `, (fav) => {
                                if (fav.trim()) musica.favorita = fav.toLowerCase() === "s";
                                console.log("Música atualizada com sucesso!");
                                exibirMenu();
                            });
                        });
                    });
                });
            });
        });
    });
}

function deletaMusica() {
    if (bancoMusicas.length === 0) {
        console.log("Nenhuma música para deletar.");
        return exibirMenu();
    }

    bancoMusicas.forEach((m, i) => console.log(`${i + 1} - ${m.nome} (${m.artista})`));

    rl.question("Número da música: ", (numStr) => {
        const index = parseInt(numStr) - 1;
        if (isNaN(index) || index < 0 || index >= bancoMusicas.length) {
            console.log("Número inválido.");
            return deletaMusica();
        }

        const removida = bancoMusicas.splice(index, 1);
        console.log(`Música "${removida[0].nome}" deletada com sucesso.`);
        exibirMenu();
    });
}
