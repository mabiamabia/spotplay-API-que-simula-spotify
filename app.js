const express = require("express"); //chamando
const cors = require("cors"); //chamando

const musicRoutes = require("./routes/musicRoutes"); //chamando
const podcastRoutes = require("./routes/podcastRoutes");

const app = express(); //executo express

app.use(cors()); //uso
app.use(express.json()); //uso

app.use("/music", musicRoutes); //crio rota raiz de filmes
app.use("/podcast", podcastRoutes);

module.exports = app; //exportando para usar o server.js