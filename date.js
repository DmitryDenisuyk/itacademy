const moment = require('moment'); 

function bar(format) {
    return moment().format(format);  
}

const obj = {
    bar: function bar(format) {
        return moment().format(format);  
    },
    b: 5
};

module.exports = obj;