const BinarySearchTree = require('./BST');

let BST = new BinarySearchTree();
const values = [3, 2, 1, 6, 4, 5, 7, 8, 9];
values.forEach(value => BST.insert(value));

function height(tree) {
  if (!tree) {
    return 0;
  }

  let leftSide = height(tree.left) + 1;
  let rightSide = height(tree.right) + 1;
  return Math.max(leftSide, rightSide);
}

function isBalanced(tree) {
  if (!tree) {
    return true;
  }
  let diff = Math.abs(height(tree.left) - height(tree.right));
  return diff >= 2 ? false : true;
}

// function findRightDepth(tree) {
//   if (!tree) {
//     return 0;
//   }

//   let rightSide = findRightDepth(tree.right) + 1;
//   return rightSide;
// }

// function findLeftDepth(tree, depth = 1) {
//   if (!tree) {
//     return depth;
//   }
//   while (tree.left) {
//     depth++;
//     tree = tree.left;
//     return findLeftDepth(tree, depth);
//   }
// }

console.log(isBalanced(BST));
