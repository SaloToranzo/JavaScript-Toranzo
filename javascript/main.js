let nombre
let correctas = 0
let incorrectas = 0
let categoria
let categoriaFutbol
let categoriaBasquet

const preguntasFutbolActualidad = [
    {
        futbolActualidad: "¿Cuántos puntos tiene Instituto en el campeonato?\n\n1: 30\n2: 31\n3: 32",
        respuesta: 2
    },
    {
        futbolActualidad: "¿Cuál fue el resultado del último partido?\n\n1: 0 - 0\n2: 1 - 1\n3: 2 - 2",
        respuesta: 1
    },
    {
        futbolActualidad: "¿Quién es el pateador de penales designado?\n\n1: Nicolás Mazzola\n2: Joaquín Molina\n3: Gabriel Graciani",
        respuesta: 3
    }
]

function quizFutbolActualidad(){
    for (let i=0; i < preguntasFutbolActualidad.length; i++){
    let solucion = window.prompt(preguntasFutbolActualidad[i].futbolActualidad)
        while (isNaN(solucion) || solucion >3){
            alert('Por favor, ingresá el número de la opción para responder.')
            solucion = parseInt(prompt(preguntasFutbolActualidad[i].futbolActualidad))
        }
        if(solucion == preguntasFutbolActualidad[i].respuesta){
            correctas++
        alert("¡Respuesta correcta!")
        }else{
            incorrectas++
        alert("Incorrecto :(")
        }
    }
}

const preguntasFutbolHistoria = [
    {
        futbolHistoria: "¿En qué año se fundó el club?\n\n1: 1916\n2: 1917\n3: 1918",
        respuesta: 3
    },
    {
        futbolHistoria: "¿En qué fecha se festeja el día del hincha de Instituto?\n\n1: 18 de junio\n2: 19 de junio\n3: 20 de junio",
        respuesta: 2
    },
    {
        futbolHistoria: "¿Quién es el goleador histórico de Instituto en AFA?\n\n1: Oscar Dertycia\n2: Mario Alberto Kempes\n3: Daniel Ángel Jiménez",
        respuesta: 1
    }
]

function quizFutbolHistoria(){
    for (let i=0; i < preguntasFutbolHistoria.length; i++){
    let solucion = window.prompt(preguntasFutbolHistoria[i].futbolHistoria)
        while (isNaN(solucion) || solucion >3){
            alert('Por favor, ingresá el número de la opción para responder.')
            solucion = parseInt(prompt(preguntasFutbolHistoria[i].futbolHistoria))
        }
        if(solucion == preguntasFutbolHistoria[i].respuesta){
            correctas++
        alert("¡Respuesta correcta!")
        }else{
            incorrectas++
        alert("Incorrecto :(")
        }
    }
}

const preguntasBasquetActualidad = [
    {
        basquetActualidad: "¿Contra qué equipo definió Instituto el título de la LNB?\n\n1: Quimsa\n2: Boca Juniors\n3: San Martín",
        respuesta: 1
    },
    {
        basquetActualidad: "¿Cuál fue el resultado del quinto juego con el que Instituto se consagró campeón?\n\n1: 82 - 83\n2: 83 - 84\n3: 84 - 85",
        respuesta: 3
    },
    {
        basquetActualidad: "¿Qué jugador se encargó del tiro libre final del partido?\n\n1: Nicolás Romano\n2: Martín Cuello\n3: Luciano González",
        respuesta: 2
    }
]

function quizBasquetActualidad(){
    for (let i=0; i < preguntasBasquetActualidad.length; i++){
    let solucion = window.prompt(preguntasBasquetActualidad[i].basquetActualidad)
        while (isNaN(solucion) || solucion >3){
            alert('Por favor, ingresá el número de la opción para responder.')
            solucion = parseInt(prompt(preguntasBasquetActualidad[i].basquetActualidad))
        }
        if(solucion == preguntasBasquetActualidad[i].respuesta){
            correctas++
        alert("¡Respuesta correcta!")
        }else{
            incorrectas++
        alert("Incorrecto :(")
        }
    }
}

const preguntasBasquetHistoria = [
    {
        basquetHistoria: "¿Cuál fue la máxima instancia que Instituto disputó en la BCL Americas?\n\n1: Final\n2: Semifinal\n3: Fase de grupos",
        respuesta: 2
    },
    {
        basquetHistoria: "¿En qué año logró Instituto volver a la máxima categoría del básquet nacional?\n\n1: 2013\n2: 2014\n3: 2015",
        respuesta: 3
    },
    {
        basquetHistoria: "¿Quién fue el técnico que logró coronar a Instituto como campeón del TNA?\n\n1: Osvaldo Arduh\n2: Sebastián Ginóbili\n3: Facundo Müller",
        respuesta: 1
    }
]

function quizBasquetHistoria(){
    for (let i=0; i < preguntasBasquetHistoria.length; i++){
    let solucion = window.prompt(preguntasBasquetHistoria[i].basquetHistoria)
        while (isNaN(solucion) || solucion >3){
            alert('Por favor, ingresá el número de la opción para responder.')
            solucion = parseInt(prompt(preguntasBasquetHistoria[i].basquetHistoria))
        }
        if(solucion == preguntasBasquetHistoria[i].respuesta){
            correctas++
        alert("¡Respuesta correcta!")
        }else{
            incorrectas++
        alert("Incorrecto :(")
        }
    }
}


const bienvenida = () =>{
     nombre = prompt(`Te damos la bienvenida a la web de Estacion. Ingresá tu nombre`)
         while( nombre ===  '' || nombre === null){
         nombre = prompt("Por favor ingresá tu nombre")
         }
     alert(`Hola ${nombre}. ¿Cuánto sabés sobre Instituto? Antes de ingresar, te hacemos unas preguntas.`)

     return nombre
}

const categorias = () =>{
    categoria = (prompt(`Empecemos, ${nombre}. ¿Preferís contestar las preguntas sobre fútbol o básquet?\n1: Fútbol\n2: Básquet`))
    switch (categoria){
        case '1':
            preguntasFutbol();
            break;
        case '2':
            preguntasBasquet();
            break;
        default:
            alert('Por favor, seleccioná una categoría.');
            return categoria;
    }
}

const preguntasFutbol = () =>{
    categoriaFutbol = parseInt(prompt(`Elegiste la categoría del fútbol. Ahora elegí responder entre la actualidad o la historia de Instituto.\n1: Actualidad\n2: Historia`))
    while (isNaN(categoriaFutbol) || categoriaFutbol >2){
        alert("Por favor, elegí entre las opciones disponibles.")
        categoriaFutbol = parseInt(prompt(`Elegiste la categoría del fútbol. Ahora elegí responder entre la actualidad o la historia de Instituto.\n1: Actualidad\n2: Historia`))
    }
    return quizFutbol()    
}

const quizFutbol = () =>{
    if (categoriaFutbol == 1){
        alert(`Elegiste responder sobre actualidad. Recordá ingresar el número de la opción que creas correcta para responder.`)
        quizFutbolActualidad()
    }else if(categoriaFutbol == 2){
        alert('Elegiste responder sobre historia. Recordá ingresar el número de la opción que creas correcta para responder.')
        quizFutbolHistoria()
    }
    return resultado()
}

const preguntasBasquet = () =>{
    categoriaBasquet = parseInt(prompt(`Elegiste la categoría del básquet. Ahora elegí responder entre la actualidad o la historia de Instituto.\n1: Actualidad\n2: Historia.`))
    while (isNaN(categoriaBasquet) || categoriaBasquet >2){
        alert("Por favor, elegí entre las opciones disponibles.")
        categoriaBasquet = parseInt(prompt(`Elegiste la categoría del básquet. Ahora elegí responder entre la actualidad o la historia de Instituto.\n1: Actualidad\n2: Historia.`))
    }
    return quizBasquet()
}

const quizBasquet = () =>{
    if (categoriaBasquet == 1){
        alert(`Elegiste responder sobre actualidad. Recordá ingresar el número de la opción que creas correcta para responder.`)
        quizBasquetActualidad()
    }else if(categoriaBasquet == 2){
        alert('Elegiste responder sobre historia. Recordá ingresar el número de la opción que creas correcta para responder.')
        quizBasquetHistoria()
    }
    return resultado()
}


const resultado = () =>{
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

const desafio = () =>{
    bienvenida()
    categorias()
}

desafio()