export const createValidator = (target, txt) => {
    const visibleValidator = target.parentNode.querySelector('[data-errors]');
    if(visibleValidator) return;
    const validator = document.createElement('p');
    validator.dataset.errors = '';
    validator.innerText = txt;
    return validator;
    
}

export const removeValidator = (target) => {
    const validator = target.parentNode.querySelector('[data-errors]');
    if(!validator) return;
    const parent = validator.parentNode;
    parent.removeChild(validator);
};