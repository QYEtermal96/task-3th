'use strict';

module.exports = function countSameElements(collection) {
  var index=[]
  var result = [];
    for (var value of collection) {
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
