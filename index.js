'use strict'

// let form = document.querySelector(".form");

// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

const modalWindow = document.querySelector('.post_form'),
      form = document.querySelector('.form'),
      btnSubmit = document.querySelector('.submit');

// Модальное окно отправки формы------------------   
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    modalWindow.classList.remove('hidden');

    setTimeout(() => {
        modalWindow.classList.add('hidden');
        form.reset();
    }, 2000);
});







