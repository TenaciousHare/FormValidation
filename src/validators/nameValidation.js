import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';
import { nameInput } from '../data/inputs.js'

export const nameValidation = () => {
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
}