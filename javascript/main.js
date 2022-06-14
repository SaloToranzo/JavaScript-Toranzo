let nombre
const pregunta1 = "¿Cuántos puntos tiene Instituto en el campeonato?"
const respuesta1= 2
const pregunta2 = "¿Cuál fue el resultado del último partido?"
const respuesta2= 1
const pregunta3 = "¿Quién es el pateador de penales designado?"
const respuesta3 = 3
let solucion1
let solucion2
let solucion3
let correctas = 0
let incorrectas = 0

function bienvenida(){
    alert('Te damos la bienvenida a la web de Estacion')
    nombre = prompt('Ingresá tu nombre')
        while( nombre ===  '' || !isNaN(nombre)){
        nombre = prompt('Por favor ingresá tu nombre')
        }
    alert('Hola '+nombre+'. ¿Cómo estás con la actualidad de Instituto? Antes de ingresar, te hacemos unas preguntas.')

    return nombre
}

function preguntas(){
    alert('En cada una, elegí la respuesta correcta. Vamos con la primera.')
    solucion1 = parseInt(prompt(pregunta1 + "\n\n1: 30\n2: 31\n3: 32 "))
        while (isNaN(solucion1) || solucion1 > 3){
            alert('Recordá responder con el número correspondiente a la opción seleccionada.')
            solucion1 = parseInt(prompt(pregunta1 + "\n\n1: 30\n2: 31\n3: 32 "))
        }
    solucion2 = parseInt(prompt(pregunta2 + "\n\n1: 0 - 0\n2: 1 - 1\n3: 2 - 2"))
        while (isNaN(solucion2) || solucion2 > 3){
            alert('Recordá responder con el número correspondiente a la opción seleccionada.')
            solucion2 = parseInt(prompt(pregunta2 + "\n\n1: 0 - 0\n2: 1 - 1\n3: 2 - 2"))
        }
    solucion3 = parseInt(prompt(pregunta3 + "\n\n1: Nicolás Mazzola\n2: Joaquín Molina\n3: Gabriel Graciani"))
        while (isNaN(solucion2) || solucion2 > 3){
            alert('Recordá responder con el número correspondiente a la opción seleccionada.')
            solucion3 = parseInt(prompt(pregunta3 + "\n\n1: Nicolás Mazzola\n2: Joaquín Molina\n3: Gabriel Graciani"))
        }

    return respuesta1, respuesta2, respuesta3
}

function suma (a,b){
    if (a == b){
        correctas ++
    }
    else {
        incorrectas ++
    }
}

function resultado(){
    switch (correctas){
        case 1:
            titulo="Sólo una correcta. Una lástima."
            break
        case 2:
            titulo="Casi, casi. Contestas dos correctamente"
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
    preguntas()
    suma(respuesta1, solucion1)
    suma(respuesta2, solucion2)
    suma(respuesta3, solucion3)
    resultado()
}

desafio()