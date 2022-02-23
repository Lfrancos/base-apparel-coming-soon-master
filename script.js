({
    plugins: ['jsdom-quokka-plugin']
})

// select the elements that you need.

const form = document.querySelector('.coming-soon__email-space');
const emailInput = document.querySelector('.coming-soon__email');
const content = document.querySelector('.coming-soon__content');


// emailInput.classList.add('coming-soon__email--error');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// This is listen for every time the form is submitted.
form.addEventListener('submit', e => {

    if (emailInput.value.length <= 0 ) {
        e.preventDefault();
        console.log('clicked');
        clearTextErrors();
        addError('Email field can not be empty');

    } else if (!emailInput.value.match(emailFormat)) {
        e.preventDefault();
        clearTextErrors();
        addError('Please provide a valid email');

    } else {
        e.preventDefault();
        emailInput.classList.remove('coming-soon__email--error');
        document.errorMessage = 'you did it';
    }
})

// this will create all the elements needed for the error.
function addError(errorMessage) {

    emailInput.classList.add('coming-soon__email--error');
    const text = document.createElement('p');
    const div = document.createElement('div');
    const img = document.createElement('img');
    // const errorMessage = 'Please provide a valid email'

    div.classList.add('coming-soon__error-img');
    img.src = "./images/icon-error.svg";
    div.appendChild(img);

    text.classList.add('coming-soon__text-error')
    text.innerText = errorMessage;

    form.appendChild(div);
    content.appendChild(text);
}

// this will make sure that the errors are not repeated
function clearTextErrors() {
    if (emailInput.classList.contains('coming-soon__email--error')) {
        const errorIn = document.querySelector('.coming-soon__text-error');
        const errorImg = document.querySelector('.coming-soon__error-img')
        errorImg.remove();
        errorIn.remove();
    }
}