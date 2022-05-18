import { createValidator, removeValidator } from './validatorMsg.js';
import { DataFromInputs } from '../data/DataFromInputs.js';

export const passwordValidation = ({target, target:{value}}) => {
    const minLength = 8;
    const oneBigLetterReg = /[A-Z]{1}/g;
    const hasOneBigLetter = oneBigLetterReg.test(value);
    const atLeastOneDigitReg = /\d+/g;
    const hasAtLeastOneDigit = atLeastOneDigitReg.test(value);
    const atLeastOneSpecialCharReg = /[^A-Za-z0-9]+/g;
    const hasAtLeastOneSpecialChar = atLeastOneSpecialCharReg.test(value);

    if (value.length < minLength || !hasOneBigLetter || !hasAtLeastOneDigit || !hasAtLeastOneSpecialChar) {
        const validator = createValidator(target,`Your password should have:
        - at least eight characters
        - one character in uppercase
        - at least one digit
        - at least one special character`);
        if(validator){
           target.parentNode.appendChild(validator)};
    }
    else {
        DataFromInputs.setProp('password', value);
        removeValidator(target);
    }
}

export const passConfValidation = ({target, target:{value}}) => {
    const isTheSameAsPassword = value === DataFromInputs.password;
    if (!isTheSameAsPassword) {
        const validator = createValidator(target, "Your password should be the same in both fields!")
        if(validator){target.parentNode.appendChild(validator)};
    }
    else {
        DataFromInputs.setProp('confirmation', value);
        removeValidator(target);
    }
}