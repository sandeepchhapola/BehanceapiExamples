var Behance = require('../behance');

//Comment any one Example before run so that you can easily differentiate results. its your choice.
//Example 1: without params argument
Behance.behance.getCommentsOnRevisionWips('809623','1470565',function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("Result: ", JSON.parse(result));
    }
});

//Example 2:
Behance.behance.getCommentsOnRevisionWips('809623','1470565',2,function (err, result) {
    if (err) {
        console.log("Error: ", err);
    }
    if (result) {
        console.log("After passing page number,Result: ", JSON.parse(result));
    }
});
