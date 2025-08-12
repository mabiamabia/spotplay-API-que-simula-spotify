const fs = require("fs");
const path = require("path");
const musicJsonPath = path.join(__dirname, "../models/music.json");
let musicJson = require(musicJsonPath);

// Função getAll retorna todos os music
const getAll = (request, response) => {
  response.status(200).json([
    {
      music: musicJson,
    },
  ]);
};

// Função getById retorna um music específico
const getById = (request, response) => {
  // Recarrega o musicJson a partir do arquivo
  const musicJson = JSON.parse(fs.readFileSync(musicJsonPath));

  let idRequest = parseInt(request.params.id); // Converter ID em número
  let idEncontrado = musicJson.find((music) => music.id === idRequest);

  if (idEncontrado) {
    response.status(200).json(idEncontrado);
  } else {
    response.status(404).json({ mensagem: "Música não encontrada" });
  }
};
// Função createMusic adiciona uma nova música
const createMusic = (request, response) => {
  let body = request.body;

  let newMusic = {
    id: musicJson.length + 1,
    Title: body.Title || "Título Padrão",
    Artist: body.Artist || "Artista Padrão",
    Year: body.Year || "Ano Padrão",
    Duration: body.Duration || "Duração Padrão",
    Genre: body.Genre || "Gênero Padrão",
    Writer: body.Writer || "Escritor Padrão",
    Language: body.Language || "Idioma Padrão",
    Country: body.Country || "País Padrão",
  };

  musicJson.push(newMusic);

  // Persistência no arquivo
  fs.writeFileSync(musicJsonPath, JSON.stringify(musicJson, null, 2));

  response.status(201).json([
    {
      mensagem: "Música cadastrada com sucesso!",
      newMusic,
    },
  ]);
};

// Atualiza o título da música
const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let novoTitulo = request.body.Title;

  let MusicFiltrado = musicJson.find((music) => music.id == idRequest);

  MusicFiltrado.Title = novoTitulo;

  // Persistência no arquivo
  fs.writeFileSync(musicJsonPath, JSON.stringify(musicJson, null, 2));

  response.status(200).json({
    mensagem: "Musica atualizada com sucesso!",
    MusicFiltrado,
  });
};

// PUT para atualizar toda a música
const updateMusic = (request, response) => {
  const idRequest = request.params.id;
  let musicRequest = request.body;

  let IndexEncontrado = musicJson.findIndex((music) => music.id == idRequest);

  musicJson.splice(IndexEncontrado, 1, musicRequest);

  // Persistência no arquivo
  fs.writeFileSync(musicJsonPath, JSON.stringify(musicJson, null, 2));

  response.status(200).json([
    {
      mensagem: "Musica atualizada com sucesso!",
      musicJson,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  createMusic,
  updateTitle,
  updateMusic,
};
