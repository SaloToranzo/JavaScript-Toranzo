const container = document.getElementById('container')
const form =document.getElementById('formulario')
const sendBtn = document.getElementById('send')
const resetBtn = document.getElementById('reset')
const texto = document.getElementById('participaTexto')

let userName = document.getElementById('userName')
let age = document.getElementById('age')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let message = document.getElementById('message')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
})

resetBtn.addEventListener('click', (e) =>{
    userName.value = ''
    age.value = ''
    phone.value = ''
    email.value = ''
    message.value = ''
})

sendBtn.addEventListener('click', (e) =>{
    userName = userName.value
    localStorage.setItem('nombre', userName)
    age = age.value
    localStorage.setItem('edad', age)
    phone = phone.value
    localStorage.setItem('telefono', phone)
    email = email.value
    localStorage.setItem('email', email)
    message = message.value
    localStorage.setItem('parrafo', message)

    form.classList.add('hide')
    texto.classList.add('hide')
    Swal.fire({
        icon: 'success',
        title: '¡Todo listo!',
        text: 'Gracias por responder las preguntas. Pronto nos comunicaremos con vos.',
      })
    const final = document.createElement('div')
    final.innerHTML = "<p>¡Gracias por sumarte a Estación!</p>"
    final.classList.add('bloqueParrafo')
    container.appendChild(final)
})