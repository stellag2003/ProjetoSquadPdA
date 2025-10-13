import { z } from "zod";

export const schemas = {
    nome: z.string().min(3, "O nome da música deve ter pelo menos 3 caracteres."),
    artista: z.string().min(2, "O nome do artista deve ter pelo menos 2 caracteres."),
    genero: z.string().min(3, "O gênero deve ter pelo menos 3 caracteres."),
    duracao: z.string()
    .regex(/^(\d{1,3}):(\d{2})$|^(\d{1,4})$/, 
           "Use mm:ss ou apenas números (ex: '3:45' ou '345' para 3:45)")
    .transform((val) => {
        if (val.includes(':')) return val;
        
            const num = parseInt(val);
        
        if (num < 100) {
            
            return `${num}:00`;
        } else {
            
            const numeros = val.padStart(4, '0');
            const minutos = parseInt(numeros.slice(0, -2));
            const segundos = numeros.slice(-2);
            return `${minutos}:${segundos}`;
        }
    })
    .refine((val) => {
        const [minutos, segundos] = val.split(':').map(Number);
        return minutos >= 0 && segundos >= 0 && segundos < 60;
    }, "Formato inválido. Segundos devem ser 00-59")
};
