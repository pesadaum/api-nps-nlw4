import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello Node" })
});

app.post("/", (request, response) => {
  return response.json({ message: "os dados foram salvos com sucesso" })
});

app.listen(3333, () => console.log('Server is running'));