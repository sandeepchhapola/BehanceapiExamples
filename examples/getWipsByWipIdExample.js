var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Get information about a work in progress.
behance.getWipsByWipId('809623',function (err, user) {
    if (err) {
        console.log("Error: ", err);
    }
    if (user) {
        console.log("Result: ", JSON.parse(user));
    }
});
