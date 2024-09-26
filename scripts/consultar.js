/*const urlConsultorio = "https://s0ymiranda.github.io/GestionarConsultorios/infotest.json";

document.addEventListener("DOMContentLoaded", function() {

    // Obtener los campos del formulario
    const nombreInput = document.getElementById('nombre');
    const pisoInput = document.getElementById('piso');
    const alaInput = document.getElementById('ala');
    const estadoInput = document.getElementById('estado');
    const activoInput = document.getElementById('activo');
    const observacionesInput = document.getElementById('observaciones');

    // Realizar la petición para obtener el archivo JSON
    fetch(urlConsultorio)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Establecer los valores de los campos del formulario con los datos del consultorio
            nombreInput.value = data.nombre;
            pisoInput.value = data.piso;
            alaInput.value = data.ala;
            estadoInput.value = data.estado;
            activoInput.value = data.activo ? "Sí" : "No";
            observacionesInput.value = data.observaciones;
            
            // Habilitar el botón de vuelta
            document.getElementById('volver').disabled = false;
        })
        .catch(error => {
            console.error('Error al obtener y mostrar los datos del consultorio', error);
        });
});
*/