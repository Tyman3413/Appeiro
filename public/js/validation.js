// Валидация email'а
function emailValidationLogin() {
    var form = document.getElementById('login-form');
    var email = document.getElementById('login-email').value;
    var emailError = document.getElementById('email-error');
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        emailError.innerHTML = '';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');

        emailError.innerHTML = 'Пожалуйста, введите правильный email';
        emailError.style.color = '#ff0000';
    }
    if (email == '') {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        emailError.innerHTML = '';
        emailError.style.color = '00ff00';
    }
}
