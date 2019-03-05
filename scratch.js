'use strict';


const BinarySearchTree = require('./BST');

let BST = new BinarySearchTree;
const values = [3, 1, 4, 6, 2, 5, 7];
values.forEach(value => BST.insert(value));


function check(tree) {
  let left = checkLeft(tree);
  let right = checkRight(tree);
  if (left === false || right === false) {
    console.log(left, right);
    return false;
  }
  else {
    console.log(left, right);
    return true;
  }
}

function checkLeft(tree, currentNode) {
  if (!tree) {
    return 'Tree is empty';
  }
  currentNode = tree;
  console.log("left", currentNode.key)
  if (currentNode == null) {
    return true;
  }
  if (currentNode.left > currentNode || currentNode.right < currentNode) {
    console.log('left completed')
    return false;
  }
  while (currentNode.left) {
    currentNode = currentNode.left;
    checkLeft(currentNode);
  }
}

function checkRight(tree, currentNode) {
  if (!tree) {
    return 'Tree is empty';
  }
  currentNode = tree;
  console.log("right", currentNode.key)
  if (currentNode == null) {
    console.log('right completed')
    return true;
  }
  if (currentNode.left > currentNode || currentNode.right < currentNode) {
    console.log('right returned false')
    return false;
  }
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
}

console.log(check(BST));