'use strict'

// let form = document.querySelector(".form");

// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

const modalWindow = document.querySelector('.post_form'),
      btnSubmit = document.querySelector('.submit');

// Модальное окно отправки формы------------------   
btnSubmit.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');

    setTimeout(() => {
        modalWindow.classList.add('hidden');
    }, 2000);
});







