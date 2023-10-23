document.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento para manejar el envío del formulario
    // Obtener el formulario por su ID
    
    //const formulario = document.getElementById("miBoton");

    //console.log(formulario);

    const btnGuardar = document.getElementById("miBoton");
    btnGuardar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente
        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;
        const lugarTrabajo = document.getElementsByName("tipoTrabajo");

        let opcionSeleccionada = "";

        lugarTrabajo.forEach(function(opcion) {
            if (opcion.checked) {
                opcionSeleccionada = opcion.value;
            }
        });

        // Crear un objeto con los datos del usuario
        const datosUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            mensaje: mensaje,
            lugarTrabajo: opcionSeleccionada
        };

        let datosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Agregar los nuevos datos del formulario al array
        datosGuardados.push(datosUsuario);
        // Guardar el array actualizado en el localStorage
        localStorage.setItem("usuarios", JSON.stringify(datosGuardados));

        // Mostrar una alerta de confirmación
        if (datosUsuario){
            confirmation.textContent = "Los datos se han guardado correctamente.";
        }

        function modificarMensaje() {
            const confirmation = document.getElementById("confirmation");
            confirmation.textContent = "";
        }
        
        const tiempoEspera = 2000; // 2 segundos
        setTimeout(modificarMensaje, tiempoEspera);
    });
});
