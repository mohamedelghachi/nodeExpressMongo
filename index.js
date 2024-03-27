const express = require("express")

const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const Equipe = require('./model/equipe.js')
mongoose.connect('mongodb://localhost/dbmonapi').
    catch(error => console.log(error));

app.get("/", (request, response) => {
    response.send("réponse à la requet get")
})
app.get("/equipes", async (request, response) => {
    const equipe = await Equipe.find();
    console.log(equipe);
    response.status(200).json(equipe);
})
app.get("/equipes/:id", async (request, response) => {
    const id = request.params.id;
    const equipe = await Equipe.find({"id":id});
    console.log(equipe);
    response.status(200).json(equipe);
})
app.get("/equipes/name/:name", async (request, response) => {
    const name = request.params.name;
    const equipe = await Equipe.find({"name":name});
    console.log(equipe);
    response.status(200).json(equipe);
})
app.get("/equipes/country/:country", async (request, response) => {
    const country = request.params.country;
    const equipe = await Equipe.find({"country":country});
    console.log(equipe);
    response.status(200).json(equipe);
})
app.post("/equipes", async (request, response) => {
    const newEquipes = request.body;
    await Equipe.create(newEquipes);
    const equipes = await Equipe.find();
    response.status(200).json(equipes);
})
app.delete("/equipes", async (request, response) => {
    const newEquipes = request.body;
    await Equipe.deleteMany(newEquipes);
    const equipes = await Equipe.find();
    response.status(200).json(equipes);
})
app.put("/equipes/:id", async (request, response) => {
    const id = request.params.id;
    const newInformations = request.body;
    await Equipe.updateOne({"id":id},newInformations);
    const equipes = await Equipe.find();
    response.status(200).json(equipes);
})
app.listen(82, function () {
    console.log("listening ...")
})