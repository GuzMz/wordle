let diccionario = ["APPLE", "ANGEL", "MOUSE", "HOUSE", "PLATE", "PLACE"]

let random = Math.random()*diccionario.length //numero aleatorio entre 0 y 5
random = Math.floor(random)

let palabraSecreta = diccionario[random]
let oportunidades = 6;

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click", enter)

function enter(){
    let intento = input.value.toUpperCase()
    if (intento == palabraSecreta){
        gameOver("Ganaste")
    }
    const GRID = document.getElementById("grid");
    let row = document.createElement("div")
    row.className = "row"
    
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if (palabraSecreta[i] == intento [i]){
            letra.style.backgroundColor = "lightgreen";
        } else if(palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = "yellow";
        } else{
            letra.style.backgroundColor = "lightgray";
        }
        row.appendChild(letra)
    }
    GRID.appendChild(row)
    oportunidades--
    if(oportunidades == 0){
        gameOver("Perdiste");
    }
}

function gameOver(mensaje){
    button.disabled = true;
    input.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
}

//[1,2,3].forEach(element =>){
//    console.log(element)
//}

/*
let A = ["padre","perro","torta", "coral"]

console.log( A[1] )

let c = 0
*/


/*
for (let i = 0; i < 4; i++) {
    console.log("i")
}
*/

/*
for (let index = 0; index < Array.length; index++) {
    console.log("hola")
} 
*/

/*
while (c < 4) {
    c++
    console.log(c)
}
    */


    //dos variaciones de ciclo for:
    //for ( let i = 0; i<palabraSecreta.length; i++)
    //    console.log(palabraSecreta[i], intento[i])
    //for (let i in palabraSecreta){
    //    console.log(palabraSecreta[i],i)
    //}