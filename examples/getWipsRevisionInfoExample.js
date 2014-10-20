var Behance = require('../behance');

//Get information and contents of a revision of a work in progress.
Behance.behance.getWipsRevisionInfo('809623','1470565',function (err, user) {
    if (err) {
        console.log("Error: ", err);
    }
    if (user) {
        console.log("Result: ", JSON.parse(user));
    }
});
