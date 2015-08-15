var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Comment any one Example before run so that you can easily differentiate results. its your choice.
//Example 1: without params argument
behance.getCollections(function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("without passing params,Result: ",JSON.parse(result));
    }
});

//Example 2: with params argument
var params={
    q:'menu',
    page:2,
    sort:'last_item_added_date'
};

behance.getCollections(params,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("After passing params, Result: ",JSON.parse(result));
    }
});
