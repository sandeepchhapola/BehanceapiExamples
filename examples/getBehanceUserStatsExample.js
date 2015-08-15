var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
behance.getBehanceUserStats('449117', function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});
