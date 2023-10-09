//Simulador para sacar turnos en MCDcardetail.

function obtenerInputDelUsuario() {
  let diaSeleccionado = "";
  let horarioSeleccionado = "";

  alert("Bienvenido a MCDcardetail");
  let trabajo = prompt("Elija si desea pulir o lavar su auto:");
  if (trabajo === "pulir" || trabajo === "lavar") {
    
    let diasSemana = [
      {nombre: "lunes", hora: ["9am", "11am", "3pm"]},
      {nombre: "martes", hora: ["8am", "10am", "2pm"]},
      {nombre: "miércoles", hora: ["9am", "11am", "5pm"]},
      {nombre: "jueves", hora: ["9am", "10am", "3pm"]},
      {nombre: "viernes", hora: ["7am", "9am", "2pm"]},
      {nombre: "sábado", hora: ["9am", "11am"]},
      {nombre: "domingo", hora: ["no se trabaja"]}
    ];
  }
}





/*function obtenerInputDelUsuario() {
  let diaSeleccionado = 
  let horarioSeleccionado = "";
  
  alert("Bienvenido a MCDcardetail");
  let trabajo = prompt("Elija si desea pulir o lavar su auto:");

  if (trabajo === "pulir" || trabajo === "lavar") {
    
    let diasSemana = [
      {nombre: "lunes", hora: ["9am", "11am", "3pm"]},
      {nombre: "martes", hora: ["8am", "10am", "2pm"]},
      {nombre: "miércoles", hora: ["9am", "11am", "5pm"]},
      {nombre: "jueves", hora: ["9am", "10am", "3pm"]},
      {nombre: "viernes", hora: ["7am", "9am", "2pm"]},
      {nombre: "sábado", hora: ["9am", "11am"]},
      {nombre: "domingo", hora: ["no se trabaja"]}
    ];

    
    let diaDeLaSemana = "";
    for (let i = 0; i < diasSemana.length; i++) {
      diaDeLaSemana += (i + 1) + "-" + diasSemana[i].nombre + "\n";
    }

    let diaIngresado = prompt("Elija un día de la semana, ingresando solo el número:\n" + diaDeLaSemana);

    
    let diaIndex = parseInt(diaIngresado) - 1;
    if (diaIndex >= 0 && diaIndex < diasSemana.length) {
      let dia = diasSemana[diaIndex];
      let horariosDisponibles = dia.hora.join(", ");
      let horarioIngresado = prompt(`Elija un horario para ${dia.nombre}, ingresando uno de los siguientes horarios: ${horariosDisponibles}`);

      if (dia.hora.includes(horarioIngresado)) {
        diaSeleccionado = dia.nombre;
        horarioSeleccionado = horarioIngresado;
        alert(`Su turno para ${trabajo} su auto se generó para el día: ${diaSeleccionado}, a las ${horarioSeleccionado}. Gracias por contactarse con nosotros.`);

        return { trabajo, diaSeleccionado, horarioSeleccionado };
      } else {
        alert("Horario seleccionado no válido");
      }
    } else {
      alert("Día seleccionado no válido");
    }
  } else {
    alert("Ha elegido un trabajo que no realizamos. Por favor, ingrese 'pulir' o 'lavar' solamente.");
  }
  return null;
}

// array para almacenar los turnos de los clientes
let turnosClientes = [];

// Simulo la recepción de múltiples turnos utilizando un bucle y metodo push.
for (let i = 0; i < 3; i++) {
  let turnoCliente = obtenerInputDelUsuario();
  if (turnoCliente) {
    turnosClientes.push(turnoCliente);
  }
}

// mediante consola muestro los turnos de los clientes
console.log("Turnos de los clientes:");
console.log(turnosClientes);*/
