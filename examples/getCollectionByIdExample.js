var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Get basic information about a collection.
behance.getCollectionById('8466781',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});
