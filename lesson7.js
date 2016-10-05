//spread operator

let first = [1, 2, 3];
let second = [4, 5, 6];

function addThreeThings(a, b, c){
  let result = a + b + c;
  console.log(result);
}
second.push(...first)
console.error(second);
addThreeThings(...first);
addThreeThings(...second);