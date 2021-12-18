const data = {};

const nameInput = document.getElementById('name');

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