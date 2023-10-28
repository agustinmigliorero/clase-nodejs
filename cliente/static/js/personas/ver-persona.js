const spanNombre = document.querySelector("#span-nombre");
const spanApellido = document.querySelector("#span-apellido");
const spanEdad = document.querySelector("#span-edad");
const btnEditar = document.querySelector("#btn-editar");
const btnBorrar = document.querySelector("#btn-borrar");

const IDPERSONA = localStorage.getItem("idpersona");

async function cargarPersona() {
  let persona = await fetch(`http://localhost:3000/personas/${IDPERSONA}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return persona;
}

function mostrarPersona() {
  cargarPersona().then((persona) => {
    spanNombre.textContent = persona.nombre;
    spanApellido.textContent = persona.apellido;
    spanEdad.textContent = persona.edad;

    btnBorrar.addEventListener("click", () => {
      fetch(`http://localhost:3000/personas/${IDPERSONA}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    btnEditar.addEventListener("click", () => {
      localStorage.setItem("idpersona", IDPERSONA);
    });
  });
}

mostrarPersona();
