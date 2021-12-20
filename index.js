const data = {};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confInput = document.getElementById('confirm');

nameInput.addEventListener('change', () => {
    const minLength = 2;
    const specialCharOrDigitsReg = /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż\s]/gim;
    const hasSpecialCharsOrDigits = specialCharOrDigitsReg.test(nameInput.value);

    if (nameInput.value.length <= minLength) {
        nameInput.parentNode.appendChild(createValidator("Your name should have at least three characters!"));
    } else if (hasSpecialCharsOrDigits) {
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

passInput.addEventListener('change', () => {
    const minLength = 8;

    const oneBigLetterReg = /[A-Z]{1}/g;
    const checkHowManyBigLetters = passInput.value.match(oneBigLetterReg);
    const hasOneBigLetter = checkHowManyBigLetters.length === 1;

    const atLeastOneDigitReg = /\d+/g;
    const hasAtLeastOneDigit = atLeastOneDigitReg.test(passInput.value);
    const atLeastOneSpecialCharReg = /[^A-Za-z0-9]+/g;
    const hasAtLeastOneSpecialChar = atLeastOneSpecialCharReg.test(passInput.value);
    console.log(`Password: ${passInput.value}`)
    console.log(`Min length: ${passInput.value.length >= minLength}`);
    console.log(`One Big Letter: ${hasOneBigLetter}`);
    console.log(`Check How Much Big Letter: ${checkHowManyBigLetters}`);
    console.log(`At least one digit: ${hasAtLeastOneDigit}`);
    console.log(`At least one special char: ${hasAtLeastOneSpecialChar}`);
    if (passInput.value.length <= minLength) {
        passInput.parentNode.appendChild(createValidator("Your password should have at least eight characters!"));
    }
    else if (!hasOneBigLetter) {
        passInput.parentNode.appendChild(createValidator("Your password should have one character in uppercase!"));

    }
    else if (!hasAtLeastOneDigit) {
        passInput.parentNode.appendChild(createValidator("Your password should have at least one digit!"));
    }
    else if (!hasAtLeastOneSpecialChar) {
        passInput.parentNode.appendChild(createValidator("Your password should have at least one special character!"));
    }
    else {
        data.password = passInput.value;
        removeValidator(passInput);
    }
})
confInput.addEventListener('change', () => {
    isTheSameAsPassword = confInput.value === data.password;
    if (!isTheSameAsPassword) {
        confInput.parentNode.appendChild(createValidator("Your password should be the same in both fields!"));
    }
    else {
        data.confirmation = confInput.value;
        removeValidator(confInput);
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

