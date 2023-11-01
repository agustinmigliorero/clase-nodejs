const routerPersonas = require("express").Router();
const {
  verPersonas,
  crearPersona,
  verPersona,
  eliminarPersona,
  editarPersona,
} = require("../controllers/personas");

async function tirarError(req, res, next) {
  try {
    aaa.aaa()
    await errorsin.ola();
    res.json("LLEGASTE PA");
  } catch (e) {
    next(e);
  }
}

routerPersonas.get("/", verPersonas);

routerPersonas.post("/", crearPersona);
routerPersonas.get("/error", tirarError);

routerPersonas.get("/:id", verPersona);
routerPersonas.delete("/:id", eliminarPersona);
routerPersonas.put("/:id", editarPersona);

module.exports = routerPersonas;
