let preguntaTexto = document.getElementById("preguntaTexto")
const opcionesDiv = document.getElementById("opcionesDiv")
let opcion1 = document.getElementById("opcion1")
opcion1.setAttribute("class", "botonOpciones")
let opcion2 = document.getElementById("opcion2")
opcion2.setAttribute("class", "botonOpciones")
let opcion3 = document.getElementById("opcion3")
opcion3.setAttribute("class", "botonOpciones")
// const resultadoDiv = document.getElementById("resultadoDiv")
// const resultadoRespuestas = document.getElementById("resultadoRespuestas")

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
        opcion1.innerText = `${preguntas[i].opciones[0]}`
        opcion2.innerText = `${preguntas[i].opciones[1]}`
        opcion3.innerText = `${preguntas[i].opciones[2]}`
    
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

function resultado(){
    let resultadoDiv = document.createElement(`div`)
    resultadoDiv.setAttribute("id", "resultadoDiv")
    let resultadoTexto = document.createElement(`p`)
    resultadoTexto.setAttribute("id", "resultadoTexto")
    resultadoTexto.innerHTML = `Completaste las preguntas.<br>Respuestas correctas: ${correctas}<br>Respuestas incorrectas: ${incorrectas}`
    resultadoDiv.appendChild(resultadoTexto)
    quiz.append(resultadoDiv)
}

// function solucion(){
//     let respuestasUsuario = opcion[i] == preguntas.respuesta
//     if (respuestasUsuario){
//         correctas++
//     }else{
//         incorrectas++
//     }
// }