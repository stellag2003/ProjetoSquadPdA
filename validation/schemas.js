import { z } from "zod";

export const schemas = {
    nome: z.string().min(3, "O nome da música deve ter pelo menos 3 caracteres."),
    artista: z.string().min(2, "O nome do artista deve ter pelo menos 2 caracteres."),
    genero: z.string().min(3, "O gênero deve ter pelo menos 3 caracteres."),
    duracao: z.string().regex(/^\d{1,2}:\d{2}$/, "A duração deve estar no formato mm:ss."),
    link: z.string().url("O link deve ser uma URL válida."),
};
