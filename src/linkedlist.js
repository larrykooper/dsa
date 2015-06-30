// NOTE

// If 'refToData' is an object, then this is a linked list with external storage
// Because objects are passed by reference in JS,
// so 'refToData' would be a pointer to the object.

function Node (key, refToData) {
    this.key = key;
    this.refToData = refToData;
    this.next = null;
}

LinkedList = function () {
     this.head = null;
}

// clear
// removes all nodes
LinkedList.prototype.clear = function() {
    this.head = null;
}

// isEmpty
// returns boolean
LinkedList.prototype.isEmpty = function () {
    return (this.head == null);
}

// find
// finds the first node that contains a specified key
//
LinkedList.prototype.find = function(key) {
    var currNode = this.head;
    if (this.isEmpty()) {
        return null;
    }
    while ((currNode.key != key) && !(currNode.next == null)) {
        currNode = currNode.next;
    }
    if (currNode.key === key) {
        return currNode;
    } else {
        return null;
    }
};

// findPos
// finds the position of a specified key
// 1-based
// returns -1 if not found
LinkedList.prototype.findPos = function(key) {
    var currNode = this.head;
    var currPos = 1;
    if (this.isEmpty()) {
        return -1;
    }
    while ((currNode.key != key) && !(currNode.next == null)) {
        currPos += 1;
        currNode = currNode.next;
    }
    if (currNode.key === key) {
        return currPos;
    } else {
        return -1;
    }
};

// findPrevious
// returns the node just before the first one containing key 'key'
// returns null if key not present
LinkedList.prototype.findPrevious = function(key) {
    var currNode = this.head;
    while (!(currNode == null) && (currNode.key != key)) {
        currNode = currNode.next;
    }
    return currNode;
};

// Inspired by Skiena page 69
// Recursive implementation of find
doFindRecurs = function(node, key) {
    if (node == null) {
        return null;
    }
    if (node.key == key) {
        return node;
    } else {
        return (doFindRecurs(node.next, key));
    }
};

// findRecurs
// recursive implementation of find
// Inspired by Skiena page 69
findRecurs = function(list, key) {
    var firstNode = list.head;
    return (doFindRecurs(firstNode, key));
};

// insertAfter
// inserts a node with key newKey and data newData after the
// node with key 'key'
// return true if inserted, false if not
LinkedList.prototype.insertAfter = function(newKey, newData, key) {
    var newNode = new Node(newKey, newData);
    var current = this.find(key);
    if (current) {
        newNode.next = current.next;
        current.next = newNode;
        return true;
    } else {
        return false;
    }
};

//insertAtBeginning
// inserts a node with key newKey and data newData at the beginning of the list
LinkedList.prototype.insertAtBeginning = function(newKey, newData) {
    var newNode = new Node(newKey, newData);
    var firstNode = this.head;
    this.head = newNode;
    if (firstNode !== null) {
        newNode.next = firstNode;
    }
};

// display
// displays the entire list
//
LinkedList.prototype.display = function() {
    var currNode = this.head;
    while (!(currNode === null)) {
        console.log(currNode.key);
        currNode = currNode.next;
    }
};

// remove
// removes the first node with key 'key'
// returns true if removed, false if not
LinkedList.prototype.remove = function(key) {
    var prevNode = this.findPrevious(key);
    if (prevNode) {
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
        return true;
    } else {
        return false;
    }
}

// size
// returns the size of the list
LinkedList.prototype.size = function () {
    var theSize = 1; // to count the first node
    var currNode = this.head;
    if (this.head === null) {
        return 0;
    } else {
        while (!(currNode.next == null)) {
            theSize += 1;
            currNode = currNode.next;
        }
        return theSize;
    }
}

module.exports = LinkedList;
