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
                        <a href="./ver-persona.html"><button class="btn-ver">Ver</button></a>
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

// async function cargarPersonas() {
//   let personas = await fetch("http://localhost:3000/personas")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       return data;
//     });
//   return personas;
// }

// const tbodyPersonas = document.querySelector("#tbody-personas");
// function renderizarTabla() {
//   tbodyPersonas.innerHTML = "";
//   cargarPersonas().then(function (personas) {
//     for (let i = 0; i < personas.length; i++) {
//       tbodyPersonas.innerHTML += `
//             <tr>
//                 <td>
//                 ${personas[i].nombre}
//                 </td>
//                 <td>
//                 ${personas[i].apellido}
//                 </td>
//                 <td>
//                 ${personas[i].edad}
//                 </td>
//             </tr>
//         `;
//     }
//   });
// }
