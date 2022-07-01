const container = document.getElementById('container')
const form =document.getElementById('formulario')
const sendBtn = document.getElementById('send')
const resetBtn = document.getElementById('reset')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
})

resetBtn.addEventListener('click', (e) =>{
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let text = document.getElementById('text')

    name.value = ''
    age.value = ''
    phone.value = ''
    email.value = ''
    text.value = ''
})

sendBtn.addEventListener('click', (e) =>{
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let text = document.getElementById('text')

    name = name.value
    localStorage.setItem('nombre', name)
    age = age.value
    localStorage.setItem('edad', age)
    phone = phone.value
    localStorage.setItem('telefono', phone)
    email = email.value
    localStorage.setItem('email', email)
    text = text.value
    localStorage.setItem('parrafo', text)

    form.classList.add('hide')
    const final = document.createElement('div')
    final.innerHTML = "<p>Gracias por responder las preguntas. Pronto nos comunicaremos con vos.</p>"
    container.appendChild(final)
})