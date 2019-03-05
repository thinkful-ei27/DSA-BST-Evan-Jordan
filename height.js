'use strict';

const BinarySearchTree = require('./BST');

let BST = new BinarySearchTree;
const values = [3, 1, 4, 6, 2, 5, 7];
values.forEach(value => BST.insert(value));


function height(tree) {
  const rightDepth = findRightDepth(tree);
  const leftDepth = findLeftDepth(tree);
  return Math.max(rightDepth, leftDepth);
}

function findRightDepth(tree, depth = 1) {
  if (!tree.right) {
    return depth;
  }
  while (tree.right) {
    depth++;
    tree = tree.right;
    return findRightDepth(tree, depth);
  }
}

function findLeftDepth(tree, depth = 1) {
  if (!tree.left) {
    return depth;
  }
  while (tree.left) {
    depth++;
    tree = tree.left;
    return findLeftDepth(tree, depth);
  }
}


console.log(height(BST));