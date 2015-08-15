var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Get information and contents of a revision of a work in progress.
behance.getWipsRevisionInfo('809623','1470565',function (err, user) {
    if (err) {
        console.log("Error: ", err);
    }
    if (user) {
        console.log("Result: ", JSON.parse(user));
    }
});
