const botonEmpezar = document.getElementById('botonEmpezar')
const botonSiguiente = document.getElementById('botonSiguiente')
const preguntasContainer = document.getElementById('divQuiz')
const preguntasDiv = document.getElementById('divPreguntas')
const opcionesDiv = document.getElementById('divOpciones')
// let preguntasAleatorias, preguntaIndex

const formulario = document.getElementById('formulario')

let userAnswers = []
let correct = []
let incorrect = []

// //EMPEZAR QUIZ
// botonEmpezar.addEventListener('click', startQuiz)
// function startQuiz(e) {
//     botonEmpezar.classList.add('hide')
//     preguntasContainer.classList.remove('hide')
//     for (let i = 0; i < questions.length; i++){
//         preguntasDiv.innerHTML = `${questions[i].text}`
//         let op1 = document.createElement('button')
//         op1.classList.add('btn')
//         let op2 = document.createElement('button')
//         op2.classList.add('btn')
//         let op3 = document.createElement('button')
//         op3.classList.add('btn')
//         opcionesDiv.append(op1, op2, op3)
//         op1.innerText = questions.options[0]
//         op2.innerText = questions.options[1]
//         op3.innerText = questions.options[2]
        
//     }
// }












botonEmpezar.addEventListener('click', empezarQuiz)
botonSiguiente.addEventListener('click', () =>{
    preguntaIndex++
    siguientePregunta()
})


function empezarQuiz(){
    botonEmpezar.classList.add('hide')
    preguntasContainer.classList.remove('hide')
    for (let i = 0; i < questions.length; i++) {
        preguntasAleatorias = questions.sort(() => Math.random() - .5)
    }
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
    opcionesDiv.append(op1, op2, op3)
    op1.innerText = questions.options[0]
    op2.innerText = questions.options[1]
    op3.innerText = questions.options[2]
    
    }

function resetQuiz(){
    botonSiguiente.classList.add('hide')
    while (opcionesDiv.firstChild){
        opcionesDiv.removeChild(opcionesDiv.firstChild)
    }
}


function opcionElegida(e){
    const opcionBoton = e.target
    if(preguntasAleatorias.length > preguntaIndex +1){
    botonSiguiente.classList.remove('hide')
    } else{
        quiz.classList.add('hide')
        formulario.classList.remove('hide')
        Swal.fire('Completá el formulario para finalizar.')

    }
}









