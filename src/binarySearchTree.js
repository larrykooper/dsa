/**
 * binarySearchTree.js
 *
 * This implements a binary search tree
 *  with only left and right pointers in each node;
 *  no parent pointer
**/

/**
 * Node constructor
 *
 * @params left, right - pointers to its child nodes
 */
function Node(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
}

/**
 * @method show
 * @returns The key of this node
 *
 */
Node.prototype.show = function() {
    return this.key;
};

/**
 * Constructor for binarySearchTree
 */
function binarySearchTree () {
    this.root = null;
};

/**
 * Insert a new key into the tree
 *
 * @method insert
 * @param key
 *
**/
binarySearchTree.prototype.insert = function(key) {
    var current, parent;

    // Create new node and pass it the key
    var n = new Node(key, null, null);

    // See if no root
    if (this.root == null) {
        this.root = n;
    } else {
        current = this.root;
        while (true) {
            parent = current;
            if (key < current.key) {
                // We move the 'current' pointer to the left child
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                // key is equal or greater than current key
                // We move the 'current' pointer to the right child
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

binarySearchTree.prototype.inOrder = function(node) {
    if (!(node == null)) {
        this.inOrder(node.left);
        process.stdout.write(node.show() + " ");
        this.inOrder(node.right);
    }
}


