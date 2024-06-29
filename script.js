let diccionario = ["APPLE", "ANGEL", "MOUSE", "HOUSE", "PLATE", "PLACE", "HOME", "SLATE", "SLEET", "SWEET", "MEATY","BEAST","BEERS","HEAVY"]

let random = Math.random()*diccionario.length //numero aleatorio entre 0 y 5
random = Math.floor(random)

let palabraSecreta = diccionario[random]
let oportunidades = 6;
attemptTicker("Intentos: "+oportunidades)

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click", enter)

function enter(){
    let intento = input.value.toUpperCase()
    const GRID = document.getElementById("grid");
    let row = document.createElement("div")
    row.className = "row"
    
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        row.appendChild(letra)
        if (palabraSecreta[i] == intento [i]){
            letra.style.backgroundColor = "lightgreen";
        } else if(palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = "yellow";
        } else{
            letra.style.backgroundColor = "lightgray";
        }
    }
    GRID.appendChild(row)
    oportunidades--
    attemptTicker("Intentos: "+oportunidades)
    if(oportunidades == 0){
        gameOver("Perdiste");
    }
    if (intento == palabraSecreta){
        gameOver("Ganaste")
    }
}

function gameOver(mensaje){
    button.disabled = true;
    input.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = "<h3>" + mensaje + "</h3>"
}

function attemptTicker(mensaje){
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = "<h3>" + mensaje + "</h3>"
}
