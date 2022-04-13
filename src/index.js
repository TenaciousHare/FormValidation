import '../sass/style.scss';
import { nameValidation, nameInput } from './validators/nameValidation.js';
import { emailValidation, emailInput } from './validators/emailValidation.js';
import { passwordValidation, passConfValidation, passInput, confInput } from './validators/passwordValidation.js';
import { rodoValidation, checkbox } from './validators/rodoValidation.js';
import { dataFromInputs } from './data/dataFromInputs.js';
import { submitData } from './data/submitData.js';

nameInput.addEventListener('change', nameValidation);

emailInput.addEventListener('change', emailValidation);

passInput.addEventListener('change', passwordValidation);

confInput.addEventListener('change', passConfValidation);

dataFromInputs.setProp('rodo', checkbox.checked);
checkbox.addEventListener('change', rodoValidation);


const form = document.forms[0];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key of Object.keys(dataFromInputs)) {
        data.append(key, dataFromInputs[key]);
    }
    submitData(data);
})


