var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

/*Comment any one Example before run so that you can easily differentiate results. its your choice.*/
//Example 1:
behance.getBehanceUserAppreciations('449117',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});

//Example 2:
behance.getBehanceUserWips('449117',2,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("After passing page number, Result: ",JSON.parse(result));
    }
});
