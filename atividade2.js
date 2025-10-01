const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];


const [primeiroUsuario] = usuarios;
const { nome, cidade } = primeiroUsuario;
console.log(`Nome: ${nome}, Cidade: ${cidade}`);


const novoUsuario = {
  nome: "Ana",
  idade: 25,
  email: "ana@exemplo.com",
  cidade: "Manaus",
  interesses: ["Natureza", "Cultura", "Tecnologia"]
};

const usuariosDoNorte = [...usuarios, novoUsuario];
console.log(usuariosDoNorte);


const beatriz = usuarios[1];
const beatrizAtualizada = {
  ...beatriz,
  email: "bia.dev@exemplo.com"
};
console.log(beatrizAtualizada);


function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}`);
}


mostrarInteresses(usuarios[0]); // Carlos
mostrarInteresses(usuarios[1]); // Beatriz
mostrarInteresses(novoUsuario); // Ana