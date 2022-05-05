import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';

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
        console.log(target);
        if(validator){
           target.parentNode.appendChild(validator)};
        
    }
    else {
        dataFromInputs.setProp('password', value);
        removeValidator(target);
    }
}

export const passConfValidation = ({target, target:{value}}) => {
    const isTheSameAsPassword = value === dataFromInputs.password;
    if (!isTheSameAsPassword) {
        const validator = createValidator(target, "Your password should be the same in both fields!")
        if(validator){target.parentNode.appendChild(validator)};
    }
    else {
        dataFromInputs.setProp('confirmation', value);
        removeValidator(target);
    }
}