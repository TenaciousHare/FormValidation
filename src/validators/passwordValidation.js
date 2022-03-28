import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';
import { passInput, confInput } from '../data/inputs.js'


export const passwordValidation = () => {
    const minLength = 8;
    const oneBigLetterReg = /[A-Z]{1}/g;
    const hasOneBigLetter = oneBigLetterReg.test(passInput.value);
    const atLeastOneDigitReg = /\d+/g;
    const hasAtLeastOneDigit = atLeastOneDigitReg.test(passInput.value);
    const atLeastOneSpecialCharReg = /[^A-Za-z0-9]+/g;
    const hasAtLeastOneSpecialChar = atLeastOneSpecialCharReg.test(
        passInput.value
    );

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
}

export const passConfValidation = () => {
    const isTheSameAsPassword = confInput.value === dataFromInputs.password;
    if (!isTheSameAsPassword) {
        confInput.parentNode.appendChild(createValidator("Your password should be the same in both fields!"));
    }
    else {
        dataFromInputs.setProp('confirmation', confInput.value);
        removeValidator(confInput);
    }
}