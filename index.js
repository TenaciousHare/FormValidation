function dataObj() {
};
dataObj.prototype.getProp = function (propName) {
    return this[propName];
};
dataObj.prototype.setProp = function (propName, value) {
    this[propName] = value;
};

const dataFromInputs = new dataObj();

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confInput = document.getElementById('confirm');
const checkbox = document.getElementById('checkbox');

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
        dataFromInputs.setProp('name', nameInput.value);
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
        dataFromInputs.setProp('email', emailInput.value.toLowerCase());
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
        dataFromInputs.setProp('password', passInput.value);
        removeValidator(passInput);
    }
})
confInput.addEventListener('change', () => {
    isTheSameAsPassword = confInput.value === dataFromInputs.password;
    if (!isTheSameAsPassword) {
        confInput.parentNode.appendChild(createValidator("Your password should be the same in both fields!"));
    }
    else {
        dataFromInputs.setProp('confirmation', confInput.value);
        removeValidator(confInput);
    }
})

dataFromInputs.setProp('rodo', checkbox.checked);
checkbox.addEventListener('change', () => {
    dataFromInputs.setProp('rodo', checkbox.checked);
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
};

const form = document.forms[0];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key of Object.keys(dataFromInputs)) {
        data.append(key, dataFromInputs[key]);
    }
    submitData(data);
})

function submitData(data) {
    fetch("https://przeprogramowani.pl/projekt-walidacja", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw "Nie udało się wysłać zapytania!";
        })
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((err) => {
            alert("Spróbuj ponownie!");
        });
}
