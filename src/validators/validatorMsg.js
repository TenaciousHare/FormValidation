export const createValidator = (target, txt) => {
    const visibleValidator = document.querySelector('.validator');
    if(visibleValidator){
        return null;
    }
    const validator = document.createElement('p');
    validator.classList.add('validator');
    validator.innerText = txt;
    return validator;
}

export const removeValidator = (element) => {
    const validator = document.querySelector('.validator');
    if(!validator){
        return null;
    }
    const parent = element.parentNode;
    parent.removeChild(validator);
    
};