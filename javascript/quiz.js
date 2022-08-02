//BOTON CONTACTO
const contacto = document.querySelector(`#contacto`)
    contacto.addEventListener('click', () =>{
    window.location="contacto.html"
})

//INCIO QUIZ
const botonEmpezar = document.getElementById('botonEmpezar');
const botonSiguiente = document.getElementById('botonSiguiente');
const divQuiz = document.getElementById('divQuiz');
const divPreguntas = document.getElementById('divPreguntas');
const divOpciones = document.getElementById('divOpciones');
const opciones = Array.from(document.querySelectorAll('.optBtn'));
const endQuiz = document.getElementById('endQuiz');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('scoreDiv');
const scoreText = document.getElementById('score');
const finalScore = document.getElementById('finalScore')
const goBack = document.getElementById('goBack')


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
    divQuiz.classList.remove('hide');
    divPreguntas.classList.remove('hide');
    divOpciones.classList.remove('hide');
    progress.classList.remove('hide');
    scoreDiv.classList.remove('hide');
    score = 0;
    questionCounter = 0
    availableQuestions = [...questions];
    nextQuestion();
}

nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        divPreguntas.classList.add('hide');
        divOpciones.classList.add('hide');
        progress.classList.add('hide');
        scoreDiv.classList.add('hide');
        endQuiz.classList.remove('hide');
        Swal.fire({
            icon: 'success',
            title: 'Completaste todas las preguntas',
            text: 'Escuchanos en vivo y contanos qué te pareció.',
          })
        finalScore.innerText = score;
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