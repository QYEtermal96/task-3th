'use strict';

module.exports = function countSameElements(collection) {
    var index = [];
    var result = [];
    for ( var i = 0; i <collection.length;i++){
        if (collection[i].length !== 1){
          if (collection[i].includes("-"))
          {
              var a = collection[i].split("-")
              collection.splice(i,1);
              for (var j = 0; j < a[1]; j++) {
                  collection.splice(i,0,a[0]);
              }
          } else if (collection[i].includes("[")){
            var a = collection[i].split("[");
            a[1] = a[1].slice(0,-1);
            collection.splice(i,1);
            for (var j = 0; j < a[1]; j++) {
                collection.splice(i,0,a[0]);
            }
          } else if (collection[i].includes(":"))
          {
              var a = collection[i].split(":")
              collection.splice(i,1);
              for (var j = 0; j < a[1]; j++) {
                  collection.splice(i,0,a[0]);
              }
          }
        }
    }

    for (var value of collection){
        if(!index.includes(value)) {
            index.push(value);
        }
    }

    for (var value of index) {
        var sum = [];
        sum = collection.filter((e)=>{ return e === value});
        var object = {name: value,summary: sum.length};
        result.push(object);
    }

  return result;
}
