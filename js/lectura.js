
//funcion para leer el archivo de entrada
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}
//funcion para escribir en pantalla el archivo seleccionado
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
}
//accion para que se muestre el archivo seleccionado en pantalla
document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);