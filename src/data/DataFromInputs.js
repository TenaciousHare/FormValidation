class DataObject {
    constructor(){
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmation = '';
        this.rodo = false;
    }
    getProp(propName) {
        return this[propName];
    }
    setProp(propName, value){
        this[propName] = value;
    }
    resetValues(){
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmation = '';
        this.rodo = false;
    }
};

export const DataFromInputs = new DataObject();