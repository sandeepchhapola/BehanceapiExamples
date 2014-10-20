var Behance = require('../behance');


/*Comment any one Example before run so that you can easily differentiate results. its your choice.*/
//Example 1: without params argument
Behance.behance.getBehanceUserWips('449117',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});

//Example 2: with params argument
var params={
    page:2
};
Behance.behance.getBehanceUserWips('449117',params,function(err,result){
    if(err){
        console.log("Error: ",err);
    }
    if(result){
        console.log("With Params argument Result: ",JSON.parse(result));
    }
});