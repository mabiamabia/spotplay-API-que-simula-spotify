const app = require("./src/app"); //chamando o arquivo app.js

const PORT = 7070;

//escutando a porta 7070
app.listen(PORT, () => {
  console.log(`Spotplay é 100% você! Estamos rodando na estação: ${PORT}`);
  
});