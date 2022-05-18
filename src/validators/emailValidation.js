import { createValidator, removeValidator } from './validatorMsg.js';
import { DataFromInputs } from '../data/DataFromInputs.js';

export const emailValidation = ({target, target: {value}}) => {
    const regex = /(?<=@)[\w\.-]+\.\w{2,4}\b/gi;
    const checkEmailString = regex.test(value);

    if (!checkEmailString) {
        const validator = createValidator(target,
            `Your email address domain is not valid, please try again!`
        );
        if(validator){
            target.parentNode.appendChild(validator);
        }
       
    }
    else {
        DataFromInputs.setProp('email', value.toLowerCase());
        removeValidator(target);
    }
}