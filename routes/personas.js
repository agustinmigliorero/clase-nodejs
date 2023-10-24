const routerPersonas = require("express").Router();
const {
  verPersonas,
  crearPersona,
  verPersona,
  eliminarPersona,
  editarPersona,
} = require("../controllers/personas");

routerPersonas.get("/", verPersonas);
routerPersonas.post("/", crearPersona);
routerPersonas.get("/:id", verPersona);
routerPersonas.delete("/:id", eliminarPersona);
routerPersonas.put("/:id", editarPersona);

module.exports = routerPersonas;
