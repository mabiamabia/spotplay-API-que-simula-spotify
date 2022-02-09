const express = require("express"); //chamando express
const cors = require("cors"); //chamando o cors

const musicRoutes = require("./routes/musicRoutes"); //acesso o "banco de musicas"
const podcastRoutes = require("./routes/podcastRoutes");

const app = express(); //executa o express

app.use(cors()); //uso o cors
app.use(express.json()); //uso o express

app.use("/music", musicRoutes); //crio rota raiz de musicas
app.use("/podcast", podcastRoutes); //crio rota raiz de podcasts

module.exports = app; //exportando modulo para usar
