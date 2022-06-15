let nombre
let correctas = 0
let incorrectas = 0

const preguntas = [
    {
        pregunta: "¿Cuántos puntos tiene Instituto en el campeonato?\n\n1: 30\n2: 31\n3: 32",
        respuesta: 2
    },
    {
        pregunta: "¿Cuál fue el resultado del último partido?\n\n1: 0 - 0\n2: 1 - 1\n3: 2 - 2",
        respuesta: 1
    },
    {
        pregunta: "¿Quién es el pateador de penales designado?\n\n1: Nicolás Mazzola\n2: Joaquín Molina\n3: Gabriel Graciani",
        respuesta: 3
    }
]

function bienvenida(){
    alert('Te damos la bienvenida a la web de Estacion')
    nombre = prompt('Ingresá tu nombre')
        while( nombre ===  '' || !isNaN(nombre)){
        nombre = prompt('Por favor ingresá tu nombre')
        }
    alert('Hola '+nombre+'. ¿Cómo estás con la actualidad de Instituto? Antes de ingresar, te hacemos unas preguntas.')

    return nombre
}

function quiz(){
    for (let i=0; i < preguntas.length; i++){
        let solucion = window.prompt(preguntas[i].pregunta)
        if(solucion == preguntas[i].respuesta){
            correctas++
            alert("¡Respuesta correcta!")
        }else{
            incorrectas++
            alert("Incorrecto :(")
        }
    }
}

function resultado(){
    switch (correctas){
        case 1:
            titulo="Sólo una correcta. Una lástima."
            break
        case 2:
            titulo="Casi, casi. Contestaste dos correctamente"
            break
        case 3:
            titulo="Genial. Contestaste todas correctamente."
            break
        default:
            titulo="No contestaste ninguna correcta."
            break
    }
    final = alert(`Completaste las preguntas, ${nombre}.\nRespuestas correctas: ${correctas}\nRespuestas incorrectas: ${incorrectas}\n${titulo}`)
}

function desafio(){
    bienvenida()
    quiz()
    resultado()
}

desafio()