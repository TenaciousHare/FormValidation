import { createValidator, removeValidator } from './validatorMsg.js';
import { dataFromInputs } from '../data/dataFromInputs.js';
import { checkbox } from '../data/inputs.js'

export const rodoValidation = () => {
    dataFromInputs.setProp('rodo', checkbox.checked);
}