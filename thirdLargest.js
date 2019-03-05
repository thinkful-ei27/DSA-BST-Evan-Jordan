'use strict';

const BinarySearchTree = require('./BST');

let BST = new BinarySearchTree;
const values = [1, 2, 3, 4, 5, 6, 7];
values.forEach(value => BST.insert(value));

const keys = [];
function thirdLargest(tree) {
  while (tree.key !== null) {
    keys.push(tree.key);
    tree.remove(tree.key);
  }
  const sortedKeys = keys.sort((a, b) => a - b);
  if (sortedKeys.length < 3) {
    return `there are not three values in this tree. The smallest value is ${sortedKeys[0]}`;
  }
  return sortedKeys[sortedKeys.length - 3];
}

console.log(thirdLargest(BST));

// write a display helper function that get the value of all keys into and array
// sort array in ascending order
// return index array.length - 3;