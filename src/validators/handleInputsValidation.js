import { nameValidation } from "./nameValidation.js";
import { emailValidation } from "./emailValidation.js";
import {passwordValidation, passConfValidation} from "./passwordValidation.js";
import { rodoValidation } from "./rodoValidation.js";

export const handleInputValidation = (e) => {
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