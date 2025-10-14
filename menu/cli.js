import chalk from 'chalk';
import { rl, adicionaMusicas, listaMusicas, deletaMusicas, atualizaMusicas, listaFavoritas, filtrarPorGenero } from "../controllers/musicaController.js";
import { criarPlaylist, listarPlaylist, atualizarNomeDaPlaylist, deletarPlaylist, gerarPlaylistAleatoria } from "../controllers/playlistController.js"

export function exibirMenu() {
    console.log(chalk.bold.cyan("\n=== Bem-vindo ao Make Hits ==="));
    console.log(chalk.bold.yellow("-Seu app de fazer playlists!-\n"));
console.log(chalk.bold("=== Menu de opções ==="));

// Adicionar / Criar
console.log(chalk.green("1- Adicionar música"));
console.log(chalk.green("7- Criar playlist"));

// Listar / Visualizar
console.log(chalk.blue("2- Listar todas as músicas"));
console.log(chalk.blue("5- Listar Favoritas"));
console.log(chalk.blue("6- Filtrar por gênero"));
console.log(chalk.blue("9- Listar todas as playlists"));

// Atualizar
console.log(chalk.yellow("3- Atualizar música"));
console.log(chalk.yellow("8- Atualizar nome da playlist"));

// Deletar (ações críticas)
console.log(chalk.redBright("4- Deletar música"));
console.log(chalk.redBright("11- Deletar playlist"));

// Gerar playlist automática
console.log(chalk.magenta("10- Gerar playlist automática"));

// Sair
console.log(chalk.bold.cyan("0- Sair\n"));


    rl.question("Escolha uma opção: ", escolha => {
        switch (escolha) {
            case "1": adicionaMusicas(() => exibirMenu()); break;
            case "2": listaMusicas(() => exibirMenu()); break;
            case "3": atualizaMusicas(() => exibirMenu()); break;
            case "4": deletaMusicas(() => exibirMenu()); break;
            case "5": listaFavoritas(() => exibirMenu()); break;
            case "6": filtrarPorGenero(() => exibirMenu()); break;
            case "7": criarPlaylist(() => exibirMenu()); break;
            case "8": atualizarNomeDaPlaylist(() => exibirMenu()); break;
            case "9": listarPlaylist(() => exibirMenu()); break;
            case "10": gerarPlaylistAleatoria(() => exibirMenu()); break;
            case "11": deletarPlaylist(() => exibirMenu()); break;
            case "0": console.log("Saindo..."); rl.close(); break;
            default: console.log("//Opção inválida! Tente novamente.//"); exibirMenu(); break;
        }
    });

};

