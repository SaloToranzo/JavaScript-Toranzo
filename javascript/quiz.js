const botonEmpezar = document.getElementById('botonEmpezar');
const botonSiguiente = document.getElementById('botonSiguiente');
const divQuiz = document.getElementById('divQuiz');
const divPreguntas = document.getElementById('divPreguntas');
const divOpciones = document.getElementById('divOpciones');
const opciones = Array.from(document.querySelectorAll('.optBtn'));
const botonScores = document.getElementById('botonScores');

let acceptingAnswers = true;
let score = 0;
let currentQuestion = {};
let availableQuestions = []
let questionCounter = 0
const MAX_QUESTIONS = 3


botonEmpezar.addEventListener('click', startQuiz)

function startQuiz(){
    botonEmpezar.classList.add('hide')
    botonScores.classList.add('hide')
    divQuiz.classList.remove('hide')
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();

}

nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]
    divPreguntas.innerText = currentQuestion.text

    opciones.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number]
    })

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true
};

opciones.forEach(option => {
    option.addEventListener('click', e => {
        if (!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        setTimeout(() => {
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}














// let userAnswers = []
// let correct = []
// let incorrect = []
// let preguntasAleatorias, preguntaIndex


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












// botonEmpezar.addEventListener('click', empezarQuiz)
// botonSiguiente.addEventListener('click', () =>{
//     preguntaIndex++
//     siguientePregunta()
// })


// function empezarQuiz(){
//     botonEmpezar.classList.add('hide')
//     preguntasContainer.classList.remove('hide')
//     for (let i = 0; i < questions.length; i++) {
//         preguntasAleatorias = questions.sort(() => Math.random() - .5)
//     }
//     preguntaIndex = 0
//     siguientePregunta()
// }

// function siguientePregunta(){
//     resetQuiz()
//     mostrarPregunta(preguntasAleatorias[preguntaIndex])
// }

// function mostrarPregunta(questions){
//     preguntasDiv.innerText = questions.text
//     let op1 = document.createElement('button')
//     op1.classList.add('btn')
//     let op2 = document.createElement('button')
//     op2.classList.add('btn')
//     let op3 = document.createElement('button')
//     op3.classList.add('btn')
//     opcionesDiv.append(op1, op2, op3)
//     op1.innerText = questions.options[0]
//     op2.innerText = questions.options[1]
//     op3.innerText = questions.options[2]
    
//     }

// function resetQuiz(){
//     botonSiguiente.classList.add('hide')
//     while (opcionesDiv.firstChild){
//         opcionesDiv.removeChild(opcionesDiv.firstChild)
//     }
// }


// function opcionElegida(e){
//     const opcionBoton = e.target
//     if(preguntasAleatorias.length > preguntaIndex +1){
//     botonSiguiente.classList.remove('hide')
//     } else{
//         quiz.classList.add('hide')
//         formulario.classList.remove('hide')
//         Swal.fire('Completá el formulario para finalizar.')

//     }
// }









