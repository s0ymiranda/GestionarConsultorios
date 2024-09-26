document.getElementById("agregar-consultorio-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario
    
    const nombre = document.getElementById("nombre").value;
    const piso = document.getElementById("piso").value;
    const ala = document.getElementById("ala").value;
    const estado = document.getElementById("estado").value;
    const activo = document.getElementById("activo").value === "true"; // Convierte a booleano
    const observaciones = document.getElementById("observaciones").value;
    
    const consultorioData = {
        nombre,
        piso,
        ala,
        estado,
        activo,
        observaciones
    };
    
    // Convertir el objeto a JSON
    const jsonString = JSON.stringify(consultorioData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Crear un enlace para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'test.json'; // Nombre del archivo que se descarga
    document.body.appendChild(a);
    a.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(a); // Remueve el enlace del DOM
    
    this.reset();
    // Reiniciar el formulario
});