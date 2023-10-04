const btnSubmit = document.querySelector('#btn-submit')
const form = document.querySelector('form')
const inputEmail = document.querySelector('#email')
const thanksPage = document.querySelector('.thanks-page')
const yourEmail = document.querySelector('.your-email')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputEmail.value == '') {
        form.classList.add('invalid')
    } else {
        form.classList.remove('invalid')
        form.style.display = 'none'
        thanksPage.style.display = 'flex'
        yourEmail.innerHTML = `<strong> ${inputEmail.value} </strong>`
    }
})

function validatorEmail(inputEmail) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(inputEmail);
}
inputEmail.addEventListener('keyup', () => {
    if (validatorEmail(inputEmail.value) !== true) {
        form.classList.add('invalid')
    } else {
        form.classList.remove('invalid')
        inputEmail.style.backgroundColor = '#DAFADD'
        inputEmail.style.borderColor = '#25792E'
        inputEmail.style.color = '#25792E'
    }
})