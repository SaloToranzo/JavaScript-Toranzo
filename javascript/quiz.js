//INCIO QUIZ
const botonEmpezar = document.getElementById('botonEmpezar');
const botonSiguiente = document.getElementById('botonSiguiente');
const divQuiz = document.getElementById('divQuiz');
const divPreguntas = document.getElementById('divPreguntas');
const divOpciones = document.getElementById('divOpciones');
const opciones = Array.from(document.querySelectorAll('.optBtn'));
const botonScores = document.getElementById('botonScores');
const endQuiz = document.getElementById('endQuiz');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('scoreDiv');
const scoreText = document.getElementById('score');

let acceptingAnswers = true;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];
let questionCounter = 0;
const MAX_QUESTIONS = 3;
const POINTS = 1;


botonEmpezar.addEventListener('click', startQuiz);

function startQuiz(){
    botonEmpezar.classList.add('hide');
    botonScores.classList.add('hide');
    divQuiz.classList.remove('hide');
    divPreguntas.classList.remove('hide');
    divOpciones.classList.remove('hide');
    progress.classList.remove('hide');
    scoreDiv.classList.remove('hide');
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();

}

nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        divPreguntas.classList.add('hide');
        divOpciones.classList.add('hide');
        progress.classList.add('hide');
        scoreDiv.classList.add('hide');
        endQuiz.classList.remove('hide');
    }

    questionCounter++
    progress.innerText = `Pregunta N° ${questionCounter} de ${MAX_QUESTIONS}`;
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    divPreguntas.innerText = currentQuestion.text;

    opciones.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

opciones.forEach(option => {
    option.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        let answerColor = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if(answerColor === 'correct') {
            incrementScore(POINTS);
        }

        selectedChoice.parentElement.classList.add(answerColor);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerColor);
            nextQuestion();

        }, 1000);
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
};


//TABLA DE POSICIONES
const username = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = score;

saveHighScore = e => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')    
}

//VER PUNTAJES
const highScoresDiv = document.getElementById('highScoresDiv')
const highScoresList = document.getElementById('highScoresList')
const goBack = document.getElementById('goBack')

botonScores.addEventListener('click', () => {
    botonEmpezar.classList.add('hide')
    botonScores.classList.add('hide')
    highScoresDiv.classList.remove('hide')
    highScoresList.innerHTML = highScores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`}).join("")})

goBack.addEventListener('click', () =>{
    botonEmpezar.classList.remove('hide')
    botonScores.classList.remove('hide')
    highScoresDiv.classList.add('hide')
})













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









