const express = require("express");
const app = express();
const routerPersonas = require("./routes/personas");
const puerto = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/express-programacion", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a MongoDB"));

app.use("/personas", routerPersonas);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
