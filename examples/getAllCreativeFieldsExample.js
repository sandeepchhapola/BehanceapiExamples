var Behance=require('../behance');

//Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')
Behance.behance.getAllCreativeFields(function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});