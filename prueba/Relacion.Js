// Función para guardar los datos en sessionStorage
function guardarDatos() {
    // Obtener los valores de la mascota
    var nombreMascota = document.getElementById('nombreMascota').value;
    var raza = document.getElementById('raza').value;
    var edad = document.getElementById('edad').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var color = document.getElementById('color').value;
    var peso = document.getElementById('peso').value;
    var sexo = document.getElementById('sexo').value;

    // Obtener los valores del dueño
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var sexoDueno = document.getElementById('sexoDueno').value;
    var edadDueno = document.getElementById('edadDueno').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;

    // Crear un objeto con los datos recolectados
    var mascotaData = {
        nombre: nombreMascota,
        raza: raza,
        edad: edad,
        fechaNacimiento: fechaNacimiento,
        color: color,
        peso: peso,
        sexo: sexo
    };

    var duenoData = {
        nombres: nombres,
        apellidos: apellidos,
        sexo: sexoDueno,
        edad: edadDueno,
        direccion: direccion,
        telefono: telefono
    };

    // Convertir el objeto a JSON
    var mascotaJson = JSON.stringify(mascotaData);
    var duenoJson = JSON.stringify(duenoData);

    // Guardar los datos en sessionStorage
    sessionStorage.setItem('mascotaData', mascotaJson);
    sessionStorage.setItem('duenoData', duenoJson);

    // Opcional: Mostrar un mensaje de confirmación
    alert('Datos guardados en sessionStorage.');
}
