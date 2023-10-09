//simulador para sacar un turno en MCDcardetail.
/*function obtenerInputDelUsuario() {
    let diaSeleccionado = "";

    alert("Bienvenido a MCDcardetail");
    let trabajo = prompt("Elegi si a tu auto lo queres pulir o lavar:");
    
    if (trabajo === "pulir" || trabajo === "lavar") {
        let diaDeLaSemana = "";
        dias = 1;
        while(dias <= 7)
        {
            switch (dias) {
                case 1: 
                    diaDeLaSemana = diaDeLaSemana + "\n1-lunes";
                    break;
                case 2: 
                    diaDeLaSemana = diaDeLaSemana + "\n2-martes";
                    break;
                case 3: 
                    diaDeLaSemana = diaDeLaSemana+ "\n3-miercoles";
                    break;
                case 4: 
                    diaDeLaSemana = diaDeLaSemana+ "\n4-jueves";
                    break;
                case 5: 
                    diaDeLaSemana =diaDeLaSemana+ "\n5-viernes";
                    break;
                case 6: 
                    diaDeLaSemana =diaDeLaSemana+ "\n6-sabado";
                    break;
                default:
                    diaDeLaSemana =diaDeLaSemana+ "\n7-domingo";
                    break;
            }
            dias++;
        }
        let diaIngresado = prompt ("Elegi un dia de la semana, colocando solo el numero:" + diaDeLaSemana);
        switch (diaIngresado) {
            case "1": 
                diaSeleccionado = "lunes";
                break;
            case "2":
                diaSeleccionado = "martes";
                break;
            case "3": 
                diaSeleccionado = "miercoles";
                break;
            case "4": 
                diaSeleccionado = "jueves";
                break;
            case "5": 
                diaSeleccionado = "viernes";
                break;
            case "6": 
                diaSeleccionado = "sabado";
                break;
            case "7":
                diaSeleccionado = "Domingo";
                break;
            default:
                diaSeleccionado = "No valido";
                break;
        }
        if (diaSeleccionado == "No valido"){
            alert ("Dia seleccionado no valido")
        }
        else{
            alert ("Su turno de: " + trabajo + " su auto, se genero para el dia: " + diaSeleccionado +", gracias por contactarse con nosotros");
        }
    } else {
      alert("Elegiste un trabajo que no realizamos, coloca la palabra pulir o lavar solamente.");
    }
  }
   
obtenerInputDelUsuario();*/
//SEGUNDA PRE ENTREGA

function obtenerInputDelUsuario() {
    let diaSeleccionado = "";
    let horarioSeleccionado = "";
    
    alert("Bienvenido a MCDcardetail");
    let trabajo = prompt("Elija si desea pulir o lavar su auto:");
  
    if (trabajo === "pulir" || trabajo === "lavar") {
      // Definimos un array con los días de la semana
      let diasSemana = [
        {nombre: "lunes", hora: ["9am", "11am", "3pm"]},
        {nombre: "martes", hora: ["8am", "10am", "2pm"]},
        {nombre: "miércoles", hora: ["9am", "11am", "5pm"]},
        {nombre: "jueves", hora: ["9am", "10am", "3pm"]},
        {nombre: "viernes", hora: ["7am", "9am", "2pm"]},
        {nombre: "sábado", hora: ["9am", "11am"]},
        {nombre: "domingo", hora: ["no se trabaja"]}
      ];
  
      // Mostramos los días de la semana al usuario
      let diaDeLaSemana = "";
      for (let i = 0; i < diasSemana.length; i++) {
        diaDeLaSemana += (i + 1) + "-" + diasSemana[i].nombre + "\n";
      }
  
      let diaIngresado = prompt("Elija un día de la semana, ingresando solo el número:\n" + diaDeLaSemana);
  
      // Convertimos el número ingresado en el nombre del día
      let diaIndex = parseInt(diaIngresado) - 1;
      if (diaIndex >= 0 && diaIndex < diasSemana.length) {
        let dia = diasSemana[diaIndex];
        let horariosDisponibles = dia.hora.join(", ");
        let horarioIngresado = prompt(`Elija un horario para ${dia.nombre}, ingresando uno de los siguientes horarios: ${horariosDisponibles}`);
  
        if (dia.hora.includes(horarioIngresado)) {
          diaSeleccionado = dia.nombre;
          horarioSeleccionado = horarioIngresado;
          alert(`Su turno para ${trabajo} su auto se generó para el día: ${diaSeleccionado}, a las ${horarioSeleccionado}. Gracias por contactarse con nosotros.`);
        } else {
          alert("Horario seleccionado no válido");
        }
      } else {
        alert("Día seleccionado no válido");
      }
    } else {
      alert("Ha elegido un trabajo que no realizamos. Por favor, ingrese 'pulir' o 'lavar' solamente.");
    }
  }
  
  obtenerInputDelUsuario();

