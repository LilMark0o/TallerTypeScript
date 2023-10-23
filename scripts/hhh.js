// Asegúrate de que el archivo 'hhh.js' se ha cargado antes de ejecutar este código.
// Función para agregar una fila a la tabla
import { series } from "./data.js";
var miBoton = document.getElementById("miBoton");
if (miBoton) {
    miBoton.addEventListener("click", miFuncion);
}
function miFuncion() {
    // Coloca aquí el código que deseas ejecutar cuando se hace clic en el botón
    var promedio = 0;
    var numPeliculas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        numPeliculas++;
        promedio += serie.seasons;
    }
    promedio = promedio / numPeliculas;
    document.getElementsByTagName("p")[0].innerHTML = "El promedio de temporadas es " + promedio;
}
// Función para agregar una fila a la tabla
function agregarFila(id, nombre, canal, temporadas) {
    var tbody = document.querySelector("tbody");
    if (tbody) {
        var fila = document.createElement("tr");
        var idColumna = document.createElement("td");
        idColumna.textContent = id.toString();
        var nombreColumna = document.createElement("td");
        nombreColumna.textContent = nombre;
        var canalColumna = document.createElement("td");
        canalColumna.textContent = canal;
        var temporadasColumna = document.createElement("td");
        temporadasColumna.textContent = temporadas.toString();
        fila.appendChild(idColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(canalColumna);
        fila.appendChild(temporadasColumna);
        tbody.appendChild(fila);
    }
    else {
        console.error("Elemento 'tbody' no encontrado en el documento.");
    }
}
// Itera sobre la lista de series y agrega filas a la tabla
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    agregarFila(serie.id, serie.name, serie.channel, serie.seasons);
}
