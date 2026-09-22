// Apuntan Alto — comportamiento compartido del sitio
document.addEventListener('DOMContentLoaded', function () {

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Año automático en el footer
  var yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Formularios (newsletter / contacto): no hay backend en un sitio estático,
  // así que mostramos confirmación local. Sustituye por Formspree, Getform
  // o un endpoint propio si quieres recibir los envíos de verdad (ver README).
  var forms = document.querySelectorAll('form[data-local-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.status-msg');
      var email = form.querySelector('input[type="email"]');
      if (email && !email.checkValidity()) {
        if (msg) {
          msg.textContent = 'Introduce un correo válido.';
          msg.classList.add('is-visible');
        }
        return;
      }
      if (msg) {
        msg.textContent = form.dataset.successMessage || 'Gracias, hemos recibido tu mensaje.';
        msg.classList.add('is-visible');
      }
      form.reset();
    });
  });
});
