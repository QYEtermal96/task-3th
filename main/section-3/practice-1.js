'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for (var value of collectionA){
    if(objectB.value.includes(value.key)){
      value.count--;
    }
  }
  return collectionA;
}
