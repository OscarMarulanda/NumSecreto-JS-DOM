
function intentoDeUsuario(){
    alert("hi")
}

function asignarTextoElemento(elem, innerText){
    document.querySelector(elem).innerHTML = innerText;
}

asignarTextoElemento("h1", "Número secreto")
asignarTextoElemento('.texto__parrafo', 'Escoge un número del 1 al 10')