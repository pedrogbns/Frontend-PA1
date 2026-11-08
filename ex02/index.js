const express = require("express");

const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("Meu ambiente frontend está funcionando!");
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
