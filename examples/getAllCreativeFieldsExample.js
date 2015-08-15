var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')
behance.getAllCreativeFields(function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});