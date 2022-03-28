export const createValidator = (txt) => {
    const validator = document.createElement('p');
    validator.classList.add('validator');
    validator.innerText = txt;
    return validator;
}

export const removeValidator = (element) => {
    const validators = document.querySelectorAll('.validator');
    const parent = element.parentNode;
    validators.forEach(validator => parent.removeChild(validator));
};