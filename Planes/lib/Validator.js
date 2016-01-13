var validator = {
    //common
    validateIfUndefined: function (val, name) {
        name = name || 'Value';
        this.validateIfUndefined(val, name);
        if (val === undefined) {
            throw new Error(name + ' cannot be undefined');
        }
    },
    validateIfObject: function (val, name) {
        name = name || 'Value';
        this.validateIfUndefined(val, name);
        if (typeof val !== 'object') {
            throw new Error(name + ' must be an object');
        }
    },
    validateIfNumber: function (val, name) {
        name = name || 'Value';
        this.validateIfUndefined(val, name);
        if (typeof val !== 'number') {
            throw new Error(name + ' must be a number');
        }
    },
    validateIfString: function (val, name) {
        name = name || 'Value';
        this.validateIfUndefined(val, name);
        if (typeof val !== 'string') {
            throw new Error(name + ' must be a string');
        }
    },
    validateString: function (val, name, min, max) {
        name = name || 'Value';
        this.validateIfUndefined(val, name);
        this.validateIfString(val, name);
        if (min > val.length || val.length > max) {
            throw new Error(name + ' must be between ' + min + ' and '
                + max + ' symbols.');
        }
    }
};