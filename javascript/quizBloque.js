const formulario = document.getElementById("formulario")

formulario.setAttribute("hidden", "true")

const quiz = document.getElementById("quiz")
const intro = document.createElement("p")

intro.innerText = "Las preguntas son sobre la actualidad y la historia de Instituto. Respondelas sin hacer trampa, es para conocerte un poco más."
quiz.append(intro)
intro.style.textAlign = "center"
intro.style.fontFamily = "'Montserrat', sans-serif"

const empezar = document.createElement("button")
empezar.className = "boton"
empezar.innerHTML = "Empezar"
quiz.append(empezar)
empezar.style.backgroundColor = "#e0040b"
empezar.style.color = "whitesmoke"
empezar.style.borderRadius = "5px"
empezar.style.border = "none"
empezar.style.marginLeft = "45%"

empezar.onclick = function(){
    alert('Estamos trabajando en esta sección.')
}