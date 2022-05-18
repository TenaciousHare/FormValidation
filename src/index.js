import "../sass/style.scss";
import { DataFromInputs } from "./data/DataFromInputs.js";
import { submitData } from "./data/submitData.js";
import { handleInputValidation } from "./validators/handleInputsValidation";
import { createValidator, removeValidator } from './validators/validatorMsg.js';

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => handleInputValidation(e));
});



const form = document.forms[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData();
  for (let key of Object.keys(DataFromInputs)) {
    if(DataFromInputs[key] === '' || DataFromInputs[key] === false ) {
      const validator = createValidator(e.target, `You should fill all the inputs!`);
        if(validator){e.target.appendChild(validator);
        }
    }
    else{ data.append(key, DataFromInputs[key]);
      removeValidator(e.target);}
   
  }
  const error = e.target.parentNode.querySelector('[data-errors]');
  if(!error){ 
  submitData(data)
  .then(res => res.json())
  .then(res => {
      console.log(`Sukces! Formularz z danymi ${res} został wysłany`);
  })
  .catch(() => {
      console.log('Problemy z połączeniem');
  })};
});
   
