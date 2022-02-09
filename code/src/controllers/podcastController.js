//chamando o json de podcast
const podcastJson = require("../models/podcast.json");

//função getAll retorna todos os podcast
const getAll = (request, response) => {
  response.status(200).json([
    {
      podcast: podcastJson,
    },
  ]);
};

const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = podcastJson.find((podcast) => podcast.id == idRequest);
  response.status(200).send(idEncontrado);
};

const createPodcast = (request, response) => {
  let body = request.body;

  let novaPodcast = {
    id: podcastJson.length + 1,
    Title: body.Title,
    Host: body.Host,
  };

  podcastJson.push(novaPodcast);

  response.status(201).json([
    {
      mensagem: "Podcast cadastrado com sucesso!",
      novaPodcast,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let novoTitulo = request.body.Title;

  PodcastFiltrado = podcastJson.find((podcast) => podcast.id == idRequest);

  PodcastFiltrado.Title = novoTitulo;

  response.status(200).json({
    mensagem: "Podcast atualizado com sucesso!",
    PodcastFiltrado,
  });
};

//PUT
const updatePodcast = (request, response) => {
  const idRequest = request.params.id;
  let podcastRequest = request.body;

  let IndexEncontrado = podcastJson.findIndex(
    (podcast) => podcast.id == idRequest
  );

  podcastJson.splice(IndexEncontrado, 1, podcastRequest);

  response.status(200).json([
    {
      mensagem: "podcast atualizado com sucesso!",
      podcastJson,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  createPodcast,
  updateTitle,
  updatePodcast,
};
