// show/hide password
const hidePassIcon = document.querySelector('.input-box__icon--password');
const showPassIcon = document.querySelector('.input-box__icon--password:last-child');
const passInputField = document.querySelector('.input-box__text-box--password');

hidePassIcon.addEventListener('click', function(){
    passInputField.type = 'password';
    hidePassIcon.classList.add('hide');
    showPassIcon.classList.remove('hide');
});

showPassIcon.addEventListener('click', function(){
    passInputField.type = 'text';
    hidePassIcon.classList.remove('hide');
    showPassIcon.classList.add('hide');
});


