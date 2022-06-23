const preguntasFutbolActualidad = [
    {
        futbolActualidad: "¿Cuántos puntos tiene Instituto en el campeonato?",
        opciones: [30, 31, 32],
        respuesta: 2
    },
    {
        futbolActualidad: "¿Cuál fue el resultado del último partido?",
        opciones: ["0 - 0", "1 - 1", "2 - 2"],
        respuesta: 1
    },
    {
        futbolActualidad: "¿Quién es el pateador de penales designado?",
        opciones: ["Nicolás Mazzola", "Joaquín Molina", "Gabriel Graciani"],
        respuesta: 3
    }
]

// function quizFutbolActualidad(){
//     for (let i=0; i < preguntasFutbolActualidad.length; i++){
//     let solucion = window.prompt(preguntasFutbolActualidad[i].futbolActualidad)
//         while (isNaN(solucion) || solucion >3){
//             alert('Por favor, ingresá el número de la opción para responder.')
//             solucion = parseInt(prompt(preguntasFutbolActualidad[i].futbolActualidad))
//         }
//         if(solucion == preguntasFutbolActualidad[i].respuesta){
//             correctas++
//         alert("¡Respuesta correcta!")
//         }else{
//             incorrectas++
//         alert("Incorrecto :(")
//         }
//     }
// }

const preguntasFutbolHistoria = [
    {
        futbolHistoria: "¿En qué año se fundó el club?",
        opciones: [1916, 1917, 1918],
        respuesta: 3
    },
    {
        futbolHistoria: "¿En qué fecha se festeja el día del hincha de Instituto?",
        opciones: ["18 de junio", "19 de junio", "20 de junio"],
        respuesta: 2
    },
    {
        futbolHistoria: "¿Quién es el goleador histórico de Instituto en AFA?",
        opciones: ["Oscar Dertycia", "Mario Alberto Kempes", "Daniel Ángel Jiménez"],
        respuesta: 1
    }
]

// function quizFutbolHistoria(){
//     for (let i=0; i < preguntasFutbolHistoria.length; i++){
//     let solucion = window.prompt(preguntasFutbolHistoria[i].futbolHistoria)
//         while (isNaN(solucion) || solucion >3){
//             alert('Por favor, ingresá el número de la opción para responder.')
//             solucion = parseInt(prompt(preguntasFutbolHistoria[i].futbolHistoria))
//         }
//         if(solucion == preguntasFutbolHistoria[i].respuesta){
//             correctas++
//         alert("¡Respuesta correcta!")
//         }else{
//             incorrectas++
//         alert("Incorrecto :(")
//         }
//     }
// }

const preguntasBasquetActualidad = [
    {
        basquetActualidad: "¿Contra qué equipo definió Instituto el título de la LNB?",
        opciones: ["Quimsa", "Boca Juniors", "San Martín"],
        respuesta: 1
    },
    {
        basquetActualidad: "¿Cuál fue el resultado del quinto juego con el que Instituto se consagró campeón?",
        opciones: ["82 - 83", "83 - 84", "84 - 85"],
        respuesta: 3
    },
    {
        basquetActualidad: "¿Qué jugador se encargó del tiro libre final del partido?",
        opciones: ["Nicolás Romano", "Martín Cuello", "Luciano González"],
        respuesta: 2
    }
]

// function quizBasquetActualidad(){
//     for (let i=0; i < preguntasBasquetActualidad.length; i++){
//     let solucion = window.prompt(preguntasBasquetActualidad[i].basquetActualidad)
//         while (isNaN(solucion) || solucion >3){
//             alert('Por favor, ingresá el número de la opción para responder.')
//             solucion = parseInt(prompt(preguntasBasquetActualidad[i].basquetActualidad))
//         }
//         if(solucion == preguntasBasquetActualidad[i].respuesta){
//             correctas++
//         alert("¡Respuesta correcta!")
//         }else{
//             incorrectas++
//         alert("Incorrecto :(")
//         }
//     }
// }

const preguntasBasquetHistoria = [
    {
        basquetHistoria: "¿Cuál fue la máxima instancia que Instituto disputó en la BCL Americas?",
        opciones: ["Final", "Semifinal", "Fase de grupos"],
        respuesta: 2
    },
    {
        basquetHistoria: "¿En qué año logró Instituto volver a la máxima categoría del básquet nacional?",
        opciones: [2013, 2014, 2015],
        respuesta: 3
    },
    {
        basquetHistoria: "¿Quién fue el técnico que logró coronar a Instituto como campeón del TNA?",
        opciones: ["Osvaldo Arduh", "Sebastián Ginóbili", "Facundo Müller"],
        respuesta: 1
    }
]

// function quizBasquetHistoria(){
//     for (let i=0; i < preguntasBasquetHistoria.length; i++){
//     let solucion = window.prompt(preguntasBasquetHistoria[i].basquetHistoria)
//         while (isNaN(solucion) || solucion >3){
//             alert('Por favor, ingresá el número de la opción para responder.')
//             solucion = parseInt(prompt(preguntasBasquetHistoria[i].basquetHistoria))
//         }
//         if(solucion == preguntasBasquetHistoria[i].respuesta){
//             correctas++
//         alert("¡Respuesta correcta!")
//         }else{
//             incorrectas++
//         alert("Incorrecto :(")
//         }
//     }
// }