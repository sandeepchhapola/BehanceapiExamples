var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);


/*Comment any one Example before run so that you can easily differentiate results. its your choice.*/
//Example 1: without params argument
behance.getBehanceUserCollections('449117', function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});

//Example 2: with params argument
var params = {
    page: 2,
    sort:'views'
};
behance.getBehanceUserCollections('449117', params, function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("After passing params, Result: ", JSON.parse(result));
    }
});
