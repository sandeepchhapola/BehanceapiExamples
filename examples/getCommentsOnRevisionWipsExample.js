var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Comment any one Example before run so that you can easily differentiate results. its your choice.
//Example 1: without params argument
behance.getCommentsOnRevisionWips('809623','1470565',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});

//Example 2:
behance.getCommentsOnRevisionWips('809623','1470565',2,function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("After passing page number,Result: ", JSON.parse(result));
    }
});
