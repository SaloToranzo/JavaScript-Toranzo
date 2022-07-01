const quiz = document.getElementById('quiz')
const botonEmpezar = document.getElementById('botonEmpezar')
const botonSiguiente = document.getElementById('botonSiguiente')
const preguntasContainer = document.getElementById('divQuiz')
let preguntasAleatorias, preguntaIndex
const preguntasDiv = document.getElementById('divPreguntas')
const opcionesDiv = document.getElementById('divOpciones')
const formulario = document.getElementById('formulario')

botonEmpezar.addEventListener('click', empezarQuiz)
botonSiguiente.addEventListener('click', () =>{
    preguntaIndex++
    siguientePregunta()
})



function empezarQuiz(){
    botonEmpezar.classList.add('hide')
    preguntasContainer.classList.remove('hide')
    preguntasAleatorias = questions.sort(() => Math.random() - .5)
    preguntaIndex = 0
    siguientePregunta()
}

function siguientePregunta(){
    resetQuiz()
    mostrarPregunta(preguntasAleatorias[preguntaIndex])
}

function mostrarPregunta(question){
    preguntasDiv.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', opcionElegida)
        preguntasDiv.appendChild(button)
    })
}

function resetQuiz(){
    botonSiguiente.classList.add('hide')
    while (opcionesDiv.firstChild){
        opcionesDiv.removeChild(opcionesDiv.firstChild)
    }
}


function opcionElegida(e){
    const opcionBoton = e.target
    const correct = opcionBoton.dataset.correct
    if(preguntasAleatorias.length > preguntaIndex +1){
    botonSiguiente.classList.remove('hide')
    } else{
        quiz.classList.add('hide')
        formulario.classList.remove('hide')
    }

}









