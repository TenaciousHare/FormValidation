import { createValidator, removeValidator } from './validatorMsg.js';
import { DataFromInputs } from '../data/DataFromInputs.js';

export const nameValidation = ({target, target: {value}}) => {
    const minLength = 2;
    const specialCharOrDigitsReg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/;
    const hasSpecialCharsOrDigits = specialCharOrDigitsReg.test(value);

    if (value.length <= minLength || hasSpecialCharsOrDigits ) {
        const validator = createValidator(target, `Your name should:
        - have at least three characters
        - not include any special characters or digits`);
        if(validator){target.parentNode.appendChild(validator);
        }}
        
    else {
        DataFromInputs.setProp('name', value);
        removeValidator(target)
    }
}