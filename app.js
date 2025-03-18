const inputAmigo = document.getElementById ("amigo");

const listaAmigos = [];

const ulListaAmigos = document.getElementById ("listaAmigos");

const ulResultado = document.getElementById ("resultado");

//funcion para ingresar los nombres de los Amigos.
function agregarAmigo() {
    if (!inputAmigo.value) {
    alert("Debes ingresar un nombre")           
    }
    //creación de la lista de Amigos para sorteo.
    listaAmigos.push(inputAmigo.value);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

//fucion para sortear el Amigo secreto.
function sortearAmigo() {
const random = Math.floor(Math.random() * listaAmigos.length);
const amigoSecreto = listaAmigos[random];
ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


