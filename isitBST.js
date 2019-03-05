const BinarySearchTree = require('./BST');
const BST = new BinarySearchTree();

const values = [3, 1, 4, 6, 2, 5, 7];
values.forEach(value => BST.insert(value));

const validate = (node, min = null, max = null) => {
  if (max !== null && node.key > max) {
    return false;
  }
  if (min !== null && node.key < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.key)) {
    // if node.left exists and calling validate with node.left, min, and the key of the current node returns false then something went wrong and we return false
    return false;
  }
  if (node.right && !validate(node.right, node.key, max)) {
    return false;
  }

  return true;
};

console.log(validate(BST));
