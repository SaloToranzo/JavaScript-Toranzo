let bienvenida = alert('Te damos la bienvenida a la web de Estacion')

let nombre = prompt('Ingresá tu nombre')
     while( nombre ===  '' || !isNaN(nombre)){
     nombre = prompt('Por favor ingresá tu nombre')
}

let saludo = alert('Hola '+nombre+'. Para ingresar necesitas una contraseña, podés conocerla respondiendo correctamente la siguiente pregunta')

let goles = prompt('¿Cuántos goles convirtio Instituto frente a Brown(PM)? \nPista: fueron menos de 5')

while (goles != "ERB"){
    switch (goles){
        case "0":
            alert('Correcto, '+nombre+'! La Gloria cayó ante Brown (PM) por 2-0. La contraseña es ERB');
            break;
        case "1":
            alert('Aunque tuvo chances, Instituto no pudo convertirlas.');
            break;
        case "2":
            alert('Dos fueron los goles convertidos por Brown(PM).');
            break;
        case "3":
            alert('Tres goles le convirtió a Tristan Suarez por la fecha suspendida, pero no en este partido.');
            break;
        case "4":
            alert('Instituto aún no ha logrado esta cantidad de goles en el campeonato.');
            break;
        case "5":
            alert('Hubiera sido una linda goleada, pero no fue el caso.');
            break;
        default:
            alert('No ingresaste un número del 0 al 5.')
            break;
            
    }
    goles = prompt('Ingresá la contraseña o volvé a intentarlo')
}