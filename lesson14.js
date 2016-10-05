//Maps and WeakMaps with ES6
console.clear()
var myMap = new Map();

//API
/*
set()
get()
size
clear()
has()
*/

var myObj = {};
var myFunc = function(){};

// myMap.set(myObj, 'bar');
// myMap.set(myFunc, 'world');
// myMap.set('string', 2);
// console.log("map size first: "+myMap.size);
// console.log('get on myMap = ' + myMap.get(myObj));
// //myMap.clear();
// console.log('get on myMap = ' + myMap.get(myObj));
// console.log("map size second: "+myMap.size);

//console.log('has on non-existing key = ' + myMap.has('qwerty'));

//Iterators
//keys()
//entries()
//values
myMap.set('foo', 'bar');
myMap.set('foo2', 'bar2');
myMap.set('foo1', 'br');
 for(var key of myMap.keys()){
   console.log("Key: "+key);
 }
 for(var value of myMap.values()){
   console.log("value: "+ value);
 }
for(var [key, value] of myMap.entries()){
  console.log(key + ' = ' + value);
}

//WeakMap Restrictions
/*
Because no references to keys are stored we do not have access to methods that require the ability to iterate the map such as:
keys()
values()
entries()
AND
clear()
*/
var myWeakMap = new WeakMap();

var myObj2 = {};
var myFunc2 = function(){};

myWeakMap.set(myObj2, 'bar');
myWeakMap.set(myFunc2, 'world');

console.error(myWeakMap.get(myObj));