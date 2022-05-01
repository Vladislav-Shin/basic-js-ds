const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.binary = null;
  }

  root() {
    return this.binary;
  }

  add(data) {
    const newNode = (data, node) => {
      if (!node) {
        return new Node(data);
      } else if (data < node.data) {
        node.l = newNode(data, node.l);
      } else if (data > node.data) {
        node.r = newNode(data, node.r);
      } 
      return node
    };
    this.binary = newNode(data, this.binary);
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let node = this.binary;
    while(node) {
      if (data < node.data) {
        node = node.l;
      } else if (data > node.data) {
        node = node.r;
      } else {
        return node;
      }
    }
    return null;
  }
  
  remove(data, node = this.binary) {
    if (!this.has(data)) {return}
    if (data < node.data) {
      node.l = this.remove(data, node.l);
    } else if (data > node.data) {
      node.r = this.remove(data, node.r);
    } else {
      if (!node.l) {
        return node.r;
      } else if (!node.r) {
        return node.l;
      } else {
        node.data = this.min(node.r);
        node.r = this.remove(node.data, node.r);
      }
    }
    return node;
  }
  min(node = this.binary) {
    let min = node;
    while (min.l) {
      min = min.l;
    }
    return min.data;
  }

  max() {
    let max = this.binary;
    while (max.r) {
      max = max.r;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};