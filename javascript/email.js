const btn = document.getElementById('send');

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_hs6a1km';
   const templateID = 'template_ujfcdud';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'success',
        title: '¡Todo listo!',
        text: 'Formulario enviado correctamente. Pronto nos pondremos en contacto.',
      })
    }, (err) => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'error',
        title: '¡Todo listo!',
        text: 'No pudimos registrar tus datos. Por favor, intentá nuevamente.',
      })
    });
});