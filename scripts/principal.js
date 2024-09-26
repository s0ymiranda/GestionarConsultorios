const url = "https://s0ymiranda.github.io/GestionarConsultorios/consultorios.json";

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el div donde se mostrarán los consultorios
    var resultadoDiv = document.getElementById('resultado');
    var consultarButton = document.getElementById('consultar');

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

                    var consultorioInfo = document.createElement('p');
                    consultorioInfo.textContent = 'ID: ' + consultorio.id + ', Nombre: ' + consultorio.nombre;

                    var deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Eliminar';
                    deleteButton.addEventListener('click', function() {
                        consultorioDiv.remove(); 
                    });
                 
                    consultorioDiv.appendChild(consultorioInfo);
                    consultorioDiv.appendChild(deleteButton);
                    
                    resultadoDiv.appendChild(consultorioDiv);

                    consultorioDiv.classList.add('consultorio');
                    consultorioInfo.classList.add('consultorioInfo');
                    deleteButton.classList.add('deleteButton');
                });
            } else {
                console.error('Data retrieved is not in the expected format (an array)');
            }
        })
        .catch(error => {
            console.error('Error al obtener y mostrar los consultorios', error);
        });


        resultadoDiv.addEventListener('click', function(event) {
            if (event.target.classList.contains('consultorio')) {
                consultarButton.disabled = false; // Habilitar el botón
                consultarButton.addEventListener('click', function() {
                    // Redirigir a la página de consulta de consultorio
                    window.location.href = 'index3.html';
                });
            }
        });
});
