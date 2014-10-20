var Behance=require('../behance');

//Comment any one Example before run so that you can easily differentiate results. its your choice.
//Example 1: without params argument
Behance.behance.getProjectsFromCollection('8466781',function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});

//Example 1: with params argument
var params={
    q:'menu',
    page:1,
    sort:'last_item_added_date'
};
Behance.behance.getProjectsFromCollection('8466781',params,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Result: ",JSON.parse(result));
    }
});
