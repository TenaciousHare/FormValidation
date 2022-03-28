import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';
import { emailInput } from '../data/inputs.js'

export const emailValidation = () => {
    const regex = /(?<=@)[\w\.-]+\.\w{2,4}\b/gi;
    const checkEmailString = regex.test(emailInput.value);

    if (!checkEmailString) {
        emailInput.parentNode.appendChild(
            createValidator(
                `Your email address domain is not valid, please try again!`
            )
        );
    }
    else {
        dataFromInputs.setProp('email', emailInput.value.toLowerCase());
        removeValidator(emailInput);
    }
}