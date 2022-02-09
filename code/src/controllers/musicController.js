//no controller vai ter a lógica
//chamando o json de music
const musicJson = require("../models/music.json");

//função getAll retorna todos os music
const getAll = (request, response) => {
  response.status(200).json([
    {
      music: musicJson,
    },
  ]);
};

//função getAll reetorna todos os music
const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = musicJson.find((music) => music.id == idRequest);
  response.status(200).send(idEncontrado);
};

const createMusic = (request, response) => {
  let body = request.body;

  let newMusic = {
    id: musicJson.length + 1,
    Title: body.Title,
    Artist: body.Artist,
  };

  musicJson.push(newMusic);

  response.status(201).json([
    {
      mensagem: "Música cadastrada com sucesso!",
      newMusic,
    },
  ]);
};

//atualiza musicas
const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let novoTitulo = request.body.Title;

  MusicFiltrado = musicJson.find((music) => music.id == idRequest);

  MusicFiltrado.Title = novoTitulo;

  response.status(200).json({
    mensagem: "Musica atualizada com sucesso",
    MusicFiltrado,
  });
};

//PUT
const updateMusic = (request, response) => {
  const idRequest = request.params.id;
  let musicRequest = request.body;

  let IndexEncontrado = musicJson.findIndex((music) => music.id == idRequest);

  musicJson.splice(IndexEncontrado, 1, musicRequest);

  response.status(200).json([
    {
      mensagem: "musica atualizada com sucesso",
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
