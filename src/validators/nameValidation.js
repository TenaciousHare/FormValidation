import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';

export const nameInput = document.getElementById('name');

export const nameValidation = () => {
    const minLength = 2;
    const specialCharOrDigitsReg = /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż\s]/gim;
    const hasSpecialCharsOrDigits = specialCharOrDigitsReg.test(nameInput.value);

    if (nameInput.value.length <= minLength || hasSpecialCharsOrDigits ) {
        nameInput.parentNode.appendChild(createValidator(`Your name should:
        - have at least three characters
        - not include any special characters or digits`));
    }
    else {
        dataFromInputs.setProp('name', nameInput.value);
        removeValidator(nameInput)
    }
}