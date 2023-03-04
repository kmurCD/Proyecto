// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const nameID = urlParams.get('nameID');
const lastName = urlParams.get('lastName');
       

// Agregar nombre y apellido del usuario al HTML calendario.html
document.getElementById("nameID").textContent = nameID;
document.getElementById("lastName").textContent = lastName;




function agregarEvento() {
  const eventos = [];

  var nombre = document.getElementById("nombre").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
  const evento = {nombre, fecha, hora};
  eventos.push(evento);

  const eventoRow = document.createElement("tr");

  const nombreCell = document.createElement("td");
  nombreCell.textContent = nombre;
  eventoRow.appendChild(nombreCell);

  const fechaCell = document.createElement("td");
  fechaCell.textContent = fecha;
  eventoRow.appendChild(fechaCell);

  const horaCell = document.createElement("td");
  horaCell.textContent = hora;
  eventoRow.appendChild(horaCell);

  const accionesCell = document.createElement("td");
  const eliminarBtn = document.createElement("button");
  eliminarBtn.innerHTML = "Eliminar";
  eliminarBtn.onclick = function() {
    eventoRow.remove();
    actualizarCalendario();
  };
  accionesCell.appendChild(eliminarBtn);
  eventoRow.appendChild(accionesCell);

  document.getElementById("lista-eventos").appendChild(eventoRow);
  
  document.getElementById("nombre").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";

  actualizarCalendario();
  agregareventoencalendario();
}


actualizarCalendario();

//Obtenetr nombre del mes


function obtenerDiasMesActual() {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const primerDia = new Date(year, month, 1);
  const ultimoDia = new Date(year, month + 1, 0);

  const dias = [];

  for (let i = 1; i <= ultimoDia.getDate(); i++) {
    const dia = new Date(year, month, i);
    dias.push(dia);
  }

  return dias;
}



function filtroPorFecha(dia) {
  return dia.fecha === fecha.toISOString().substring(0, 10);
}

function actualizarCalendario() {
  const dias = obtenerDiasMesActual();
  const calendario = document.getElementById("calendario");
  const fechaActual = new Date();

  calendario.innerHTML = "";

  for (let i = 0; i < dias.length; i++) {
    const dia = dias[i];
    const diaElemento = document.createElement("div");
    diaElemento.classList.add("dia");

    if (dia.toDateString() === fechaActual.toDateString()) {
      diaElemento.classList.add("hoy");
    }

    const diaNumero = document.createElement("span");
    diaNumero.textContent = dia.getDate();
    diaElemento.appendChild(diaNumero);

    

    calendario.appendChild(diaElemento);
  }
}

actualizarCalendario();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const fechaActual = new Date();
const mesActual = meses[fechaActual.getMonth()];
document.getElementById("nombreMes").textContent = mesActual;

for (let i = 0; i < dias.length; i++) {
  const dia = dias[i];
  const diaElemento = document.createElement("div");
  diaElemento.classList.add("dia");

  // Marcar el día de hoy
  if (dia.toDateString() === fechaActual.toDateString()) {
    diaElemento.classList.add("hoy");
  }
}

function agregareventoencalendario(); {
// Obtener el elemento correspondiente al día 4
const dia = document.querySelector('.dia:nth-child(+)');

// Modificar el contenido del elemento
dia4.innerHTML = '<span>Nuevo contenido</span>';

}
