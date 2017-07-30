'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var index = []
  var result = []
    for ( var i = 0; i <collectionA.length;i++){
        if (collectionA[i].length !== 1){
            if (collectionA[i].includes("-"))
            {
                var a = collectionA[i].split("-")
                collectionA.splice(i,1);
                for (var j = 0; j < a[1]; j++) {
                    collectionA.splice(i,0,a[0]);
                }
            }
        }
    }
    for (var value of collectionA){
        if(!index.includes(value)) {
            index.push(value);
        }
    }

    for (var value of index) {
        var sum = [];
        sum = collectionA.filter((e)=>{ return e === value});
        var object = {key: value,count: sum.length};
        result.push(object);
    }

    for (var value of result){
        if(objectB.value.includes(value.key)){
            value.count-=Math.floor(value.count/3);
        }
    }
  return result;
}
