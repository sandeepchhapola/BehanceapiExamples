var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Comment any one Example before run so that you can easily differentiate results. its your choice.
//Example 1: without page argument
behance.creativesToFollowList(function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Without Page argument, Result: ", JSON.parse(result));
    }
});

//Example 2: passing a page number
behance.creativesToFollowList(2, function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("after passing a page number, Result: ", JSON.parse(result));
    }
});

