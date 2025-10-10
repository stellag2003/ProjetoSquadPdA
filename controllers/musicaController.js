 import readline from "readline";
import { z } from 'zod';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const testeMusicas = [ // base de dados pra teste
    {
        nome: 'I Want To Break Free',
        cantor: 'Quenn',
        anoLancamento: 1984
    },

    {
        nome: 'Sorry',
        cantor: 'Justin Bieber',
        anoLancamento: 2015
    },
];

const musicaSchema = z.string() // chamei o zod
    .min(3, "O nome da música deve ter pelo menos 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome da música deve conter apenas letras e espaços");

export function adicionaMusicas(array) {
    rl.question("Digite o nome da música que deseja adicionar: ", (nome) => {

        // Valida usando Zod
        const resultado = musicaSchema.safeParse(nome);

        if (!resultado.success) {
            //const erros = resultado.error?.errors.map(e => e.message).join(', ') || "Erro desconhecido";
            console.log("Nome inválido:", /*erros*/);
        } else {
            array.push(nome);
            console.log("Música adicionada:");
            listaMusicas(array);
        }

        rl.close();
    });
}
adicionaMusicas(testeMusicas);

export function listaMusicas(array) {
    array.forEach(musica => {

        console.log(musica.nome);

    });

}
//listaMusicas(testeMusicas)

export function deletaMusicas(array) {
    const musicaSchema = z.string()
        .min(3, "O nome da música deve ter pelo menos 3 caracteres")
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome da música deve conter apenas letras e espaços");

    rl.question("Digite o nome da música que deseja deletar: ", (musica) => {

        // Valida usando Zod
        const resultado = musicaSchema.safeParse(musica);

        const index = testeMusicas.findIndex(nomes => nomes.nome.toLowerCase() === musica.toLowerCase());

        if (index === -1) {
            console.log("Música não encontrada! Nenhuma música foi deletada.");
            deletaMusicas();
        } else {
            testeMusicas.splice(index, 1);
            console.log("Música deletada com sucesso!");
            listaMusicas(array);
            //voltaMenu(); // ainda não criei o menu
        }

    })


}

//deletaMusicas(testeMusicas)

export function atualizaMusicas(array) {
    const musicaSchema = z.string()
        .min(3, "O nome da música deve ter pelo menos 3 caracteres")
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome da música deve conter apenas letras e espaços");

    rl.question("Digite o nome da música que deseja atualizar ", musica => {

        const musicaEncontrada = testeMusicas.find(n => n.nome.toLowerCase().includes(musica.toLowerCase()));
        const resultado = musicaSchema.safeParse(musica);

        if (!musicaEncontrada || !resultado.success) {
            console.log("Música não encontrada!");
            return atualizaMusicas();
        }

        rl.question("Digite o novo nome: ", (novoNome) => {

            // Valida usando Zod   
            const resultado = musicaSchema.safeParse(musica);

            if (!resultado.success) {
                console.log("Nome inválido!");
                return atualizaMusicas();
            }
            musicaEncontrada.nome = novoNome;
            listaMusicas(array);

        })
    })



}

//atualizaMusicas(testeMusicas)

// oq falta??

// 1- revisar o zod
// 2- criar a classe
// 3- fazer modularização