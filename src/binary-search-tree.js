const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootN = null
  }
  root() {
    return this.rootN
  }

  add(data) {
    this.rootN = addWithIn(this.rootN, data)
    function addWithIn(node,data) {
      if (!node) {
        let node = new Node(data)
        return node
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addWithIn(node.left, data)
      } else {
        node.right = addWithIn (node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchWithin(this.rootN, data)
    function searchWithin(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
  }

  find(data) {
    return findWithin(this.rootN, data);
    function findWithin(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      if (node.data < data) {
        return findWithin(node.right, data);
      } else {
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootN = removeNode(this.rootN, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data) 
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.rootN) {
      return
    }
     let node = this.rootN
     while (node.left) {
      node = node.left
     }
     return node.data
  }

  max() {
    if (!this.rootN) {
      return
    }
     let node = this.rootN
     while (node.right) {
      node = node.right
     }
     return node.data
  }
}

module.exports = {
  BinarySearchTree
};