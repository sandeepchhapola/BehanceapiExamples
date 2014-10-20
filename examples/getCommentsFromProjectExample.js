var Behance=require('../behance');

/*Comment any one Example before run so that you can easily differentiate results. its your choice.*/
//Example 1: without page argument
Behance.behance.getCommentsFromProject('20100549',function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("Without Page argument Result: ",JSON.parse(result));
    }
});

//Example 2: passing a page number
Behance.behance.getCommentsFromProject('20100549',5,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("After passing page number, Result: ",JSON.parse(result));
    }
});

