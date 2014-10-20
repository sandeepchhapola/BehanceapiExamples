var Behance = require('../behance');

//A list of the user's professional experience
Behance.behance.getBehanceUserWorkExperienceList('449117', function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});
