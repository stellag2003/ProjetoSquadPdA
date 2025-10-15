export function gerarPlaylistAleatoria(callback) {
    const copiaMusicas = [...bancoMusica];
    const playlistAleatoria = [];

    while (copiaMusicas.length > 0) {
        const indice = Math.floor(Math.random() * copiaMusicas.length);
        playlistAleatoria.push(copiaMusicas.splice(indice, 1)[0]);
    }

    console.log("Playlist aleatoria gerada:");
    
    const playlistFormatada = playlistAleatoria.map((musica, index) => ({
        '#': index + 1,
        'Musica': musica.nome,
        'Artista': musica.artista,
        'Genero': musica.genero,
        'Duracao': musica.duracao,
        'Favorita': musica.favorita ? 'SIM' : 'NAO'
    }));
    
    console.table(playlistFormatada);

    if (callback) callback();
    return playlistAleatoria;
}

const bancoDePlaylists = [];

export function criarPlaylist(callback) {
    return new Promise((resolve) => {
        rl.question('Digite o nome da playlist: ', (nome) => {
            rl.question('Digite o genero da playlist: ', (genero) => {
                try {
                    const musicasFiltradas = bancoMusica.filter(musica => {
                        const temGenero = musica.genero && typeof musica.genero === 'string';
                        
                        if (!temGenero) {
                            console.log('Musica sem genero valido:', musica);
                            return false;
                        }
                        
                        return musica.genero.toLowerCase() === genero.toLowerCase();
                    });

                    console.log(`Musicas filtradas para "${genero}": ${musicasFiltradas.length}`);

                    if (musicasFiltradas.length === 0) {
                        console.log(`\nNenhuma musica encontrada para o genero "${genero}"`);
                        
                        const generosDisponiveis = [...new Set(bancoMusica.map(m => m.genero).filter(g => g))];
                        const generosTable = generosDisponiveis.map((genero, index) => ({
                            '#': index + 1,
                            'Genero Disponivel': genero
                        }));
                        
                        console.log("Generos disponiveis:");
                        console.table(generosTable);
                        
                        rl.close();
                        resolve(null);
                        return;
                    }

                    const playlistAleatoria = [...musicasFiltradas].sort(() => Math.random() - 0.5);
                    const novaPlaylist = { 
                        nome, 
                        genero, 
                        musicas: playlistAleatoria 
                    };
                    
                    bancoDePlaylists.push(novaPlaylist);

                    console.log(`\nPlaylist "${nome}" criada com sucesso!`);
                    console.log(`Total de musicas: ${playlistAleatoria.length}`);
                    
                    const playlistTable = playlistAleatoria.map((musica, index) => ({
                        '#': index + 1,
                        'Musica': musica.nome,
                        'Artista': musica.artista,
                        'Genero': musica.genero,
                        'Duracao': musica.duracao,
                        'Favorita': musica.favorita ? 'SIM' : 'NAO'
                    }));
                    
                    console.log("\nConteudo da playlist:");
                    console.table(playlistTable);

                    resolve(novaPlaylist);
                    if (callback) callback();

                } catch (error) {
                    console.error('Erro ao criar playlist:', error);
                    rl.close();
                    resolve(null);
                }
            });
        });
    });
}

