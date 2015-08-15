var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

/*Comment any one Example before run so that you can easily differentiate results. its your choice.*/
//Example 1: without params argument
behance.getProjects(function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Without Params argument Result: ",JSON.parse(result));
    }
});

//Example 2: with params argument
var params={
    q:'Bikes',
    page:2,
    fieldLimits:'illustration'
};

behance.getProjects(params,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("With Params argument Result: ",JSON.parse(result));
    }
});