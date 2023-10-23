// Asegúrate de que el archivo 'hhh.js' se ha cargado antes de ejecutar este código.

// Función para agregar una fila a la tabla
import { series } from "./data.js";

const miBoton = document.getElementById("miBoton");
if (miBoton) {
    miBoton.addEventListener("click", miFuncion);
}
function miFuncion() {
    // Coloca aquí el código que deseas ejecutar cuando se hace clic en el botón
    let promedio = 0;
    let numPeliculas = 0;
    for (const serie of series) {
        numPeliculas++;
        promedio += serie.seasons;
    }
    promedio = promedio / numPeliculas;
    document.getElementsByTagName("p")[0].innerHTML = "El promedio de temporadas es " + promedio;
}
// Función para agregar una fila a la tabla
function agregarFila(id: number, nombre: string, canal: string, temporadas: number) {
    const tbody = document.querySelector("tbody");

    if (tbody) {
        const fila = document.createElement("tr");

        const idColumna = document.createElement("td");
        idColumna.textContent = id.toString();

        const nombreColumna = document.createElement("td");
        nombreColumna.textContent = nombre;

        const canalColumna = document.createElement("td");
        canalColumna.textContent = canal;

        const temporadasColumna = document.createElement("td");
        temporadasColumna.textContent = temporadas.toString();

        fila.appendChild(idColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(canalColumna);
        fila.appendChild(temporadasColumna);

        tbody.appendChild(fila);
    } else {
        console.error("Elemento 'tbody' no encontrado en el documento.");
    }
}

// Itera sobre la lista de series y agrega filas a la tabla
for (const serie of series) {
    agregarFila(serie.id, serie.name, serie.channel, serie.seasons);
}

