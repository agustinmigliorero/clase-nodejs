const IDPERSONA = localStorage.getItem("idpersona");
const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputEdad = document.querySelector("#input-edad");
const btnEnviar = document.querySelector(".btn-enviar");

async function cargarPersona() {
  let persona = await fetch(`http://localhost:3000/personas/${IDPERSONA}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return persona;
}

function cargarFormulario() {
  cargarPersona().then((persona) => {
    inputNombre.value = persona.nombre;
    inputApellido.value = persona.apellido;
    inputEdad.value = persona.edad;
  });
}

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const edad = inputEdad.value;

  let cuerpoPeticion = {
    nombre,
    apellido,
    edad,
  };

  fetch(`http://localhost:3000/personas/${IDPERSONA}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpoPeticion),
  }).then((res) => {
    window.location.replace("./ver-persona.html");
  });
});

cargarFormulario();
