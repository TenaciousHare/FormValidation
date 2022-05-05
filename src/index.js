import "../sass/style.scss";
import { nameValidation } from "./validators/nameValidation.js";
import { emailValidation } from "./validators/emailValidation.js";
import {passwordValidation, passConfValidation} from "./validators/passwordValidation.js";
import { rodoValidation } from "./validators/rodoValidation.js";
import { dataFromInputs } from "./data/dataFromInputs.js";
import { submitData } from "./data/submitData.js";

const inputs = document.querySelectorAll("input");

const handleInputValidation = (e) => {
  switch (e.target.id) {
    case "name":
      nameValidation(e);
      break;
    case "email":
      emailValidation(e);
      break;
    case "password":
      passwordValidation(e);
      break;
    case "confirm":
      passConfValidation(e);
      break;
    case "checkbox":
      rodoValidation(e);
      break;
    default:
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("change", (e) => handleInputValidation(e));
});

const form = document.forms[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData();
  for (let key of Object.keys(dataFromInputs)) {
    data.append(key, dataFromInputs[key]);
  }
   submitData(data);
});
