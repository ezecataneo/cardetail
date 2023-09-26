//simulador para sacar un turno en MCDcardetail.
function obtenerInputDelUsuario() {
    let diaSeleccionado = "";

    alert("Bienvenido a MCDcardetail");
    var trabajo = prompt("Elegi si a tu auto lo queres pulir o lavar:");
    
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
  
obtenerInputDelUsuario();