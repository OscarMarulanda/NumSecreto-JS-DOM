let numeroSecreto;

let intentos;
let numerosUsados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('.texto__parrafo', `Acertaste el número en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`)
        activarNuevoJuego()
    } else {
        //el usurio no acertó
        limpiarCaja()
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es menor')
        } else {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es mayor')
        }
        intentos++
    }

}

function nuevoJuego() {
    limpiarCaja();
    activarNuevoJuego();
    condicionesIniciales()
}

function activarNuevoJuego() {
    document.getElementById('reiniciar').disabled == false ? document.getElementById('reiniciar').disabled = true : document.getElementById('reiniciar').disabled = false;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ""
}

function asignarTextoElemento(elem, innerText) {
    document.querySelector(elem).innerHTML = innerText;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Número secreto")
    asignarTextoElemento('.texto__parrafo', `Escoge un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

condicionesIniciales()

function generarNumeroSecreto() {
    let nuevoNumero = Math.floor(Math.random() * numeroMaximo) + 1;

    if (numerosUsados.length == numeroMaximo) {
        asignarTextoElemento("p", "Se han acabado los números. Presiona f5 para volver a jugar")
    } else {

        if (numerosUsados.includes(nuevoNumero)) {

            return generarNumeroSecreto();
        } else {

            numerosUsados.push(nuevoNumero);
            return nuevoNumero;
        }
    }
}

/*let numSecreto;

function nuevoNumeroSecreto(){
    numSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numSecreto)
}*/

