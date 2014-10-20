var Behance=require('../behance');

//if you don't have projectId then first search for projects using getProjects(params, done) function to fetch projectId.
Behance.behance.getProjectById('20100549',function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});