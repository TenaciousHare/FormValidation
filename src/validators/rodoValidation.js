import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';

export const checkbox = document.getElementById('checkbox');

export const rodoValidation = () => {
    dataFromInputs.setProp('rodo', checkbox.checked);
}