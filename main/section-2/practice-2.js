'use strict';

module.exports = function countSameElements(collection) {
  var index = [];
  var result = [];
  for ( var i = 0; i <collection.length;i++){
    if (collection[i].length=== 3){
      var a = collection[i].split("-")
        collection.splice(i,1);
        for (var j = 0; j < a[1]; j++) {
            collection.splice(i,0,a[0]);
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
        var object = {key: value,count: sum.length};
        result.push(object);
    }


  return result;
}
