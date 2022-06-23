let preguntaTexto = document.getElementById("preguntaTexto")
        let opcion1 = document.getElementById("opcion1")
        let opcion2 = document.getElementById("opcion2")
        let opcion3 = document.getElementById("opcion3")
const resultadoDiv = document.getElementById("resultadoDiv")
const resultadoRespuestas = document.getElementById("resultadoRespuestas")

let correctas = 0
let incorrectas = 0




const formulario = document.getElementById("formulario")

formulario.setAttribute("hidden", "true")

const quiz = document.getElementById("quiz")
const intro = document.createElement("p")

intro.innerText = "Las preguntas son sobre la actualidad y la historia de Instituto. Respondelas sin hacer trampa, es para conocerte un poco más."
quiz.append(intro)
intro.style.textAlign = "center"
intro.style.fontFamily = "'Montserrat', sans-serif"

const empezar = document.createElement("button")
empezar.className = "botonEmpezar"
empezar.innerHTML = "Empezar"
quiz.append(empezar)
empezar.style.backgroundColor = "#e0040b"
empezar.style.color = "whitesmoke"
empezar.style.borderRadius = "5px"
empezar.style.border = "none"
empezar.style.marginLeft = "45%"

// empezar.onclick = function(){
//     alert('Estamos trabajando en esta sección.')
// }



empezar.onclick = function(){
    empezar.remove()
    for (let i=0; i < preguntasFutbolActualidad.length; i++){
        preguntaTexto.innerHTML = `${preguntasFutbolActualidad[i].futbolActualidad}`
        opcion1.innerHTML = `${preguntasFutbolActualidad[i].opciones[0]}`
        opcion2.innerHTML = `${preguntasFutbolActualidad[i].opciones[1]}`
        opcion3.innerHTML = `${preguntasFutbolActualidad[i].opciones[2]}`
    }

    opcion1.addEventListener("click", function(e){
        e.preventDefault()
        respuestaUsuario(0)
    })
    opcion2.addEventListener("click", function(e){
        e.preventDefault()
        respuestaUsuario(1)
    })
    opcion3.addEventListener("click", function(e){
        e.preventDefault()
        respuestaUsuario(2)
    }) 
}

// function quizFutbolActualidad(){
//     for (let i=0; i < preguntasFutbolActualidad.length; i++){
//     let solucion = window.prompt(preguntasFutbolActualidad[i].futbolActualidad)
//         while (isNaN(solucion) || solucion >3){
//             alert('Por favor, ingresá el número de la opción para responder.')
//             solucion = parseInt(prompt(preguntasFutbolActualidad[i].futbolActualidad))
//         }
//         if(solucion == preguntasFutbolActualidad[i].respuesta){
//             correctas++
//         alert("¡Respuesta correcta!")
//         }else{
//             incorrectas++
//         alert("Incorrecto :(")
//         }
//     }
// }

function respuestaUsuario(){
    
}


        // let solucion = window.prompt(preguntasFutbolActualidad[i].futbolActualidad)
        //     while (isNaN(solucion) || solucion >3){
        //         alert('Por favor, ingresá el número de la opción para responder.')
        //         solucion = parseInt(prompt(preguntasFutbolActualidad[i].futbolActualidad))
        //     }
        //     if(solucion == preguntasFutbolActualidad[i].respuesta){
        //         correctas++
        //     alert("¡Respuesta correcta!")
        //     }else{
        //         incorrectas++
        //     alert("Incorrecto :(")
        //     }
        // }