export function dataObj() {
};
dataObj.prototype.getProp = function (propName) {
    return this[propName];
};
dataObj.prototype.setProp = function (propName, value) {
    this[propName] = value;
};