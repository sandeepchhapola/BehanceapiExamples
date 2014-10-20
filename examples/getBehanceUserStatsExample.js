var Behance = require('../behance');


//Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
Behance.behance.getBehanceUserStats('449117', function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});
