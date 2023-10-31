const tbodyPersonas = document.querySelector("#tbody-personas");

async function cargarPersonas() {
  let personas = await fetch("http://localhost:3000/personas")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return personas;
}

function renderizarTabla() {
  tbodyPersonas.innerHTML = "";
  cargarPersonas().then((personas) => {
    for (let i = 0; i < personas.length; i++) {
      tbodyPersonas.innerHTML += `
                <tr>
                    <td>${personas[i].nombre}</td>
                    <td>${personas[i].apellido}</td>
                    <td>${personas[i].edad}</td>
                    <td>
                        <a href="./ver-persona.html">
                          <button class="btn-ver">Ver</button>
                        </a>
                        <button class="btn-borrar">Eliminar</button>
                    </td>
                </tr>
            `;
    }

    btnsBorrar(personas);
    btnsVer(personas);
  });
}

function btnsBorrar(personas) {
  const btnsBorrar = document.querySelectorAll(".btn-borrar");

  for (let i = 0; i < btnsBorrar.length; i++) {
    btnsBorrar[i].addEventListener("click", () => {
      fetch(`http://localhost:3000/personas/${personas[i]._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      location.reload();
    });
  }
}

function btnsVer(personas) {
  const btnsVer = document.querySelectorAll(".btn-ver");

  for (let i = 0; i < btnsVer.length; i++) {
    btnsVer[i].addEventListener("click", () => {
      localStorage.setItem("idpersona", personas[i]._id);
    });
  }
}

renderizarTabla();

// const cuerpoTabla = document.querySelector("#tbody-personas");

// function cargarPersonas() {
//   let personas = fetch("http://localhost:3000/personas")
//     .then(function (respuesta) {
//       return respuesta.json();
//     })
//     .then(function (datosPersonas) {
//       return datosPersonas;
//     });
//   return personas;
// }

// async function renderizarTabla() {
//   cuerpoTabla.innerHTML = "";
//   let personas = await cargarPersonas();
//   for (let i = 0; i < personas.length; i++) {
//     cuerpoTabla.innerHTML += `
//     <tr>
//       <td>${personas[i].nombre}</td>
//       <td>${personas[i].apellido}</td>
//       <td>${personas[i].edad}</td>
//       <td><button>Ver mas</button></td>
//     </tr>
//     `;
//   }
// }

// function crearAJuanPerez() {
//   fetch("http://localhost:3000/personas/654036dc489bd7f482c32c6d", {
//     method: "DELETE",
//   });
// }
