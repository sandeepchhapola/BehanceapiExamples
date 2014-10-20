var Behance = require('../behance');

//Get basic information about a user. The user argument can be an ID or username.
Behance.behance.getBehanceUser('449117',function (err, user) {
    if (err) {
        console.log("Error: ", err);
    }
    if (user) {
        console.log("Result: ", JSON.parse(user));
    }
});
