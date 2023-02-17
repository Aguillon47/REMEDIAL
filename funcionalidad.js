/*Crear la funcionalidad del juego*/
let iconos
//Funcion
function cargarIconos(params) {
    
}
//generar Tablero
function generarTablero(){
    //mandar a llamar la funcion
    cargarIconos()
    //representativo para el html(id)
    let Tablero = document.getElementById("tablero")
    //Arreglos FOR
    let tarjetas = []
    for(let i =0; i < array.length; i++){
        //Constante
        const elements = array[i]
        tarjetas.push(
            `<div class="area-tarjetas">
            <div class="tarjeta" id="tarjeta ${i}>
                <div class="cara trasera">
                    <i class="fa-solid fa-baby"></i>
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-baby"></i>
                </div>
            </div>
        </div>`
        )
    }
    Tablero.innerHTML = tarjetas.join(" ")
}