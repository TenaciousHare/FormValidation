const data = {};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

nameInput.addEventListener('change', () => {
    const minLength = 2;
    const hasSpecialCharsOrDigits = /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż\s]/gim;

    if (nameInput.value.length <= minLength) {
        nameInput.parentNode.appendChild(createValidator("Your name should have at least three characters!"));
    } else if (hasSpecialCharsOrDigits.test(nameInput.value)) {
        nameInput.parentNode.appendChild(createValidator("Your name should not include any special characters or digits!"));
    }
    else {
        data.name = nameInput.value;
        removeValidator(nameInput)
    }
})

emailInput.addEventListener('change', () => {
    const AtReg = /[@]/g;
    const hasExactOneAt = emailInput.value.match(AtReg).length === 1;
    const domainReg = /(?<=@)[\w\.-]+\.\w{2,4}\b/gi;


    if (!hasExactOneAt) {
        emailInput.parentNode.appendChild(createValidator(`Your email address should have only one "@" sign!`));
    }
    else if (!domainReg.test(emailInput.value)) {
        emailInput.parentNode.appendChild(createValidator(`Your email address domain is not valid, please try again!`));
    }
    else {
        data.email = emailInput.value.toLowerCase();
        removeValidator(emailInput);
    }

})


function createValidator(txt) {
    const validator = document.createElement('p');
    validator.classList.add('validator');
    validator.innerText = txt;
    return validator;
}

function removeValidator(element) {
    const validators = document.querySelectorAll('.validator');
    const parent = element.parentNode;
    validators.forEach(validator => parent.removeChild(validator));
}