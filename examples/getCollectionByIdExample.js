var Behance = require('../behance');

//Get basic information about a collection.
Behance.behance.getCollectionById('8466781',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});
