import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';

export const nameValidation = ({target, target: {value}}) => {
    const minLength = 2;
    const specialCharOrDigitsReg = /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuVvWwYyZzŹźŻż\s]/gim;
    const hasSpecialCharsOrDigits = specialCharOrDigitsReg.test(value);

    if (value.length <= minLength || hasSpecialCharsOrDigits ) {
        const validator = createValidator(target, `Your name should:
        - have at least three characters
        - not include any special characters or digits`);
        if(validator){target.parentNode.appendChild(validator);
        }}
        
    else {
        dataFromInputs.setProp('name', value);
        removeValidator(target)
    }
}