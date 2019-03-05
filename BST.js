'use strict';

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if tree is empty
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    // else compare and if new key is less than node's key, go left
    else if (key < this.key) {
      // if existing node has no left child, stop and insert left
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      // otherwise keep checking and going down branch to the left
      else {
        this.left.insert(key, value);
      }
    }
    // else if new key is greater, go right
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // if current node is search item stop and return value
    if (this.key == key) {
      return this.value;
    }
    // else if search item is less than current node go left recursively
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // else if search item is greater than current node go right recursively
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    // if we've found item to remove
    if (this.key == key) {
      // if the item to remove has two children
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      // if node only has left child
      else if (this.left) {
        this._replaceWith(this.left);
      }
      // if node only has right child
      else if (this.right) {
        this._replaceWith(this.right);
      }
      // if node has no children
      else {
        this._replaceWith(null);
      }
    }
    // continue look for item to remove to the left
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    // continue look for item to remove to the right
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    // didn't find it
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

function main() {
  let tree = new BinarySearchTree;
  const values = [3, 1, 4, 6, 2, 5, 7];
  values.forEach(value => tree.insert(value));
  console.log(tree, null, 2);
}

// main();

module.exports = BinarySearchTree;