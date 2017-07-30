'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var index=[]
    var result = [];
    for (var value of collectionA) {
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
