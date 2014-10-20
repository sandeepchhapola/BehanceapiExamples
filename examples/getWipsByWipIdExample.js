var Behance = require('../behance');

//Get information about a work in progress.
Behance.behance.getWipsByWipId('809623',function (err, user) {
    if (err) {
        console.log("Error: ", err);
    }
    if (user) {
        console.log("Result: ", JSON.parse(user));
    }
});
