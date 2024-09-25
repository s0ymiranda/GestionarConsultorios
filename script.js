document.addEventListener("DOMContentLoaded", function() {
    const url = "consultorios.json";
    // Obtener el div donde se mostrarán los consultorios
    var resultadoDiv = document.getElementById('resultado');
  
    // Realizar la petición para obtener el archivo JSON
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Limpiar el resultado anterior
        resultadoDiv.innerHTML = '';
  
        // Iterar sobre los consultorios y mostrarlos en el div resultado
        if (Array.isArray(data)) {
          data.forEach(consultorio => {
            var consultorioDiv = document.createElement('div');
            consultorioDiv.classList.add('consultorio');
            consultorioDiv.innerHTML = '<p>ID: ' + consultorio.id + '</p><p>Nombre: ' + consultorio.nombre + '</p>';
            resultadoDiv.appendChild(consultorioDiv);
          });
        } else {
          console.error('Data retrieved is not in the expected format (an array)');
        }
      })
      .catch(error => {
        console.error('Error al obtener y mostrar los consultorios', error);
      });
});

//Date

const daynames = [
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
];

const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Deciembre"
];

function togglemenu() {
  document
    .getElementsByClassName('navigation')[0]
    .classList.toggle('responsive');
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const dayName = daynames[currentDate.getDay()]
const monthName = months[currentDate.getMonth()]

document.querySelector('.last-updated').textContent = `Ultima Actualización: ${document.lastModified}`

document.querySelector('.date-header').textContent = `${dayName}, ${currentDate.getDate()} ${monthName} ${currentYear}`