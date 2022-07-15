const botonEmpezar = document.getElementById('botonEmpezar')
const botonSiguiente = document.getElementById('botonSiguiente')
const preguntasContainer = document.getElementById('divQuiz')
let preguntasAleatorias, preguntaIndex
const preguntasDiv = document.getElementById('divPreguntas')
const opcionesDiv = document.getElementById('divOpciones')

const formulario = document.getElementById('formulario')

let userAnswers = []
let correct = []
let incorrect = []

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

function mostrarPregunta(questions){
    preguntasDiv.innerText = questions.text
    let op1 = document.createElement('button')
    op1.classList.add('btn')
    let op2 = document.createElement('button')
    op2.classList.add('btn')
    let op3 = document.createElement('button')
    op3.classList.add('btn')
    op1.innerHTML = `${questions[i].options[0]}`
    op2.innerHTML = `${questions[i].options[1]}`
    op3.innerHTML = `${questions[i].options[2]}`
    opcionesDiv.appendChild(op1, op2, op3)
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
        Swal.fire('Completá el formulario para finalizar.')

    }
}









