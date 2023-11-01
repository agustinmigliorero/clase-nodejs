const Persona = require("../models/persona");

const verPersonas = async (req, res, next) => {
  const personas = await Persona.find();
  res.json(personas);
};

async function verPersona(req, res) {
  const { id } = req.params;
  const persona = await Persona.findById(id);
  res.json(persona);
}

async function crearPersona(req, res) {
  const { nombre, apellido, edad } = req.body;
  const persona = new Persona({
    nombre,
    apellido,
    edad,
  });
  await persona.save();
  res.json("Persona creada");
}

async function eliminarPersona(req, res) {
  const { id } = req.params;
  await Persona.findByIdAndDelete(id);
  res.json("HOLA");
}

async function editarPersona(req, res) {
  const { id } = req.params;
  const { nombre, apellido, edad } = req.body;
  let persona = await Persona.findByIdAndUpdate(id, {
    nombre,
    apellido,
    edad,
  });

  await persona.save();
  res.json("Persona editada");
}

module.exports = {
  verPersonas,
  crearPersona,
  verPersona,
  eliminarPersona,
  editarPersona,
};
