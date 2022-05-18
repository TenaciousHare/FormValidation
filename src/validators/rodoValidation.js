import { createValidator, removeValidator } from './validatorMsg.js';
import { DataFromInputs } from '../data/DataFromInputs.js';

export const checkbox = document.getElementById('checkbox');

export const rodoValidation = ({target, target: {checked}}) => {
    if(!checked) {
        const validator = createValidator(target,`You should agree to our Terms and Conditions`);
        if(validator){
           target.parentNode.parentNode.appendChild(validator)};
    }
    else {
        DataFromInputs.setProp('rodo', checkbox.checked);
        removeValidator(target.parentNode);
    } 
    
}