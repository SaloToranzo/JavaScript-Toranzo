const coconduccion = document.querySelector(`#coconduccion`)
const columnista = document.querySelector(`#columnista`)
const produccion = document.querySelector(`#produccion`)
const redes = document.querySelector(`#redes`)
let url = "../puestos.json"

fetch(url)
    .then((res) => res.json())
    .then((puestos) =>{
        coconduccion.addEventListener('click', () =>{
            columnista.remove()
            produccion.remove()
            redes.remove()
            coconduccion.innerText=""
            coconduccion.style.transform = "none"
            coconduccion.style.transitionDuration="1s"
            coconduccion.style.width = "25rem"
            coconduccion.style.height = "30rem"
            coconduccion.innerHTML +=`
            <button class="btnSalir" id="salir">X</button>
            <p class="puestosTitulo">${puestos[0].puesto}</p>
            <p class="puestosParrafo">${puestos[0].tareas}</p>
            <p class="puestosParrafo">Modalidad: ${puestos[0].modalidad}</p>
            <button id="contacto" class="btn">Contacto</button>`
            const salir = document.querySelector(`#salir`)
            salir.addEventListener('click', () =>{
                window.location.reload()="equipo.html"
            })
            const contacto = document.querySelector(`#contacto`)
            contacto.addEventListener('click', () =>{
                window.location="contacto.html"
            })
        }, {
            once: true
        });
        columnista.addEventListener('click', () =>{
            coconduccion.remove()
            produccion.remove()
            redes.remove()
            columnista.innerText=""
            columnista.style.transform = "none"
            columnista.style.transitionDuration="1s"
            columnista.style.width = "25rem"
            columnista.style.height = "30rem"
            columnista.innerHTML +=`
            <button class="btnSalir" id="salir">X</button>
            <p class="puestosTitulo">${puestos[1].puesto}</p>
            <p class="puestosParrafo">${puestos[1].tareas}</p>
            <p class="puestosParrafo">Modalidad: ${puestos[1].modalidad}</p>
            <button id="contacto" class="btn">Contacto</button>`
            const salir = document.querySelector(`#salir`)
            salir.addEventListener('click', () =>{
                window.location.reload()="equipo.html"
            })
            const contacto = document.querySelector(`#contacto`)
            contacto.addEventListener('click', () =>{
                window.location="contacto.html"
            })
        },{
            once: true
        });
        produccion.addEventListener('click', () =>{
            coconduccion.remove()
            columnista.remove()
            redes.remove()
            produccion.innerText=""
            produccion.style.transform = "none"
            produccion.style.transitionDuration="1s"
            produccion.style.width = "25rem"
            produccion.style.height = "30rem"
            produccion.innerHTML +=`
            <button class="btnSalir" id="salir">X</button>
            <p class="puestosTitulo">${puestos[2].puesto}</p>
            <p class="puestosParrafo">${puestos[2].tareas}</p>
            <p class="puestosParrafo">Modalidad: ${puestos[2].modalidad}</p>
            <button id="contacto" class="btn">Contacto</button>`
            const salir = document.querySelector(`#salir`)
            salir.addEventListener('click', () =>{
                window.location.reload()="equipo.html"
            })
            const contacto = document.querySelector(`#contacto`)
            contacto.addEventListener('click', () =>{
                window.location="contacto.html"
            })
        },{
            once: true
        });
        redes.addEventListener('click', () =>{
            coconduccion.remove()
            columnista.remove()
            produccion.remove()
            redes.innerText=""
            redes.style.transform = "none"
            redes.style.transitionDuration="1s"
            redes.style.width = "25rem"
            redes.style.height = "30rem"
            redes.innerHTML +=`
            <button class="btnSalir" id="salir">X</button>
            <p class="puestosTitulo">${puestos[3].puesto}</p>
            <p class="puestosParrafo">${puestos[3].tareas}</p>
            <p class="puestosParrafo">Modalidad: ${puestos[3].modalidad}</p>
            <button id="contacto" class="btn">Contacto</button>`
            const salir = document.querySelector(`#salir`)
            salir.addEventListener('click', () =>{
                window.location.reload()="equipo.html"
            })
            const contacto = document.querySelector(`#contacto`)
            contacto.addEventListener('click', () =>{
                window.location="contacto.html"
            })
        },{
            once: true
        });
    })
    .catch(err => console.log(err));