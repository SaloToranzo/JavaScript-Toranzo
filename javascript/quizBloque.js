let preguntaTexto = document.getElementById("preguntaTexto")
const opcionesDiv = document.getElementById("opcionesDiv")
let opcion1 = document.getElementById("opcion1")
let opcion2 = document.getElementById("opcion2")
let opcion3 = document.getElementById("opcion3")
const resultadoDiv = document.getElementById("resultadoDiv")
const resultadoRespuestas = document.getElementById("resultadoRespuestas")

let correctas = 0
let incorrectas = 0

let preguntasRandom, preguntaActualIndex

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

empezar.addEventListener("click", function(){
    empezarQuiz()
})

function empezarQuiz(){
    empezar.remove()
    for (let i=0; i < preguntas.length; i++){
        preguntaTexto.innerText = `${preguntas[i].pregunta}`
        opcion1.innerText = `${preguntasFutbolActualidad[i].opciones[0]}`
        opcion2.innerText = `${preguntasFutbolActualidad[i].opciones[1]}`
        opcion3.innerText = `${preguntasFutbolActualidad[i].opciones[2]}`
    }
    opcion1.addEventListener("click", function (e) {
            e.preventDefault()
            solucion(0)
        })
    opcion2.addEventListener("click", function (e) {
            e.preventDefault()
            solucion(1)
        })
    opcion3.addEventListener("click", function (e) {
            e.preventDefault()
            solucion(2)
        }) 
}













// function empezarQuiz(){
//     empezar.remove()
//     pasarPregunta()

// }

// function pasarPregunta(){
//     mostrarPregunta(preguntasRandom[preguntaActualIndex])

// }


// function mostrarPregunta(preguntas){
//     preguntaTexto.innerHTML = preguntas.pregunta
//     preguntas.opciones.forEach(respuestaUsuario => {
//         const boton = document.createElement(`button`)
//         boton.innerText = preguntas.opciones
//         if(boton == preguntas[i].respuesta){
//             alert("correcto")
//         }
//         else{
//             alert('incorrecto')
//         }
//         boton.addEventListener("click", solucion)
//         opcionesDiv.appendChild(boton)


//     })

// }



// function solucion(e){



// }














// function resultado(){
//     let solucion = () => {opcion1[i] == preguntasFutbolActualidad[i].respuesta
//     if(solucion){
//         alert ('correcto')
//         correctas++
//     } else{
//         incorrectas++
//     }
// }
// }





















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

// function solucion(){
//     if (opcion1.innerHTML === preguntasFutbolActualidad[i].respuesta){
//         opcion1.style.backgroundColor = "green"
//         correctas++
//     }
//     else{
//         opcion1.style.backgroundColor = "darkred"
//         incorrectas++
//     }
// }


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