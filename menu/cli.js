import { rl, adicionaMusicas, listaMusicas, deletaMusicas, atualizaMusicas, listaFavoritas, filtrarPorGenero } from "../controllers/musicaController.js";
import { criarPlaylist, listarPlaylist, atualizarNomeDaPlaylist, deletarPlaylist, gerarPlaylistAleatoria } from "../controllers/playlistController.js"

export function exibirMenu() {
    console.log("Bem vindo ao Make Hits 🎧")
    console.log("=== Menu de opções ===");
    console.log("1- Adicionar música ➕");
    console.log("2- Listar todas as músicas📜");
    console.log("3- Atualizar música 🆙");
    console.log("4- Deletar música ⛔");
    console.log("5- Listar Favoritas 🏅");
    console.log("6- Filtrar por gênero 🧩");
    console.log("7- Criar playlist 📼");
    console.log("8- Atualizar nome da playlist ⏫");
    console.log("9- Listar todas as playlists 🗒️");
    console.log("10- Gerar playlist automática 💡");
    console.log("11- Deletar playlist");
    console.log("0- Sair 🔚");

    rl.question("Escolha uma opção: ", (escolhaUmaOpção) => {
        switch (escolhaUmaOpção) {
            case "1":
                adicionaMusicas(() => {
                    exibirMenu();
                });
                break;
            case "2":

                listaMusicas(() => {
                    exibirMenu();
                });
                break;
            case "3":
                atualizaMusicas(() => {
                    exibirMenu();
                });
                break;
            case "4":
                deletaMusicas(() => {
                    exibirMenu();
                });
                break;
            case "5":
                listaFavoritas(() => {
                    exibirMenu();
                });
                break;
            case "6":
                filtrarPorGenero(() => {
                    exibirMenu();
                });
                break;
            case "7":
                criarPlaylist(() => {
                    exibirMenu();
                });
                break;
            case "8":
                atualizarNomeDaPlaylist(() => {
                    exibirMenu();
                });
                break;
            case "9":
                listarPlaylist(() => {
                    exibirMenu();
                });
                break;
            case "10":
                gerarPlaylistAleatoria(() => {
                    exibirMenu();
                });
                break;
            case "11":
                deletarPlaylist(() => {
                    exibirMenu();
                });
                break;
            case "0":
                console.log("Saindo...👋");
                rl.close();
                break;

            default:
                console.log("//Opção inválida! Tente novamente.//");
                exibirMenu();
                break;
        }
    })
};


