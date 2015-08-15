var Behance = require('behanceapi')
    , config = require('../config')
    , behance = new Behance(config.keys.behance.client_id);

//if you don't have projectId then first search for projects using getProjects(params, done) function to fetch projectId.
behance.getProjectById('20100549',function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});