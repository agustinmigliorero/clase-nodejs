const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputEdad = document.querySelector("#input-edad");
const btnEnviar = document.querySelector(".btn-enviar");

btnEnviar.addEventListener("click", async (e) => {
  e.preventDefault();
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const edad = inputEdad.value;

  let cuerpoPeticion = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };

  await fetch("http://localhost:3000/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpoPeticion),
  });
  window.location.replace("./index.html");
});

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const cuerpoPersona = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    edad: inputEdad.value,
  };

  fetch("http://localhost:3000/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpoPersona),
  });
});
