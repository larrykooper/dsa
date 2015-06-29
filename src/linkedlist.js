// NOTE
// If element is a primitive, the list only stores one value
// But if 'element' is an object, then this is a linked list with external storage
// Because objects are passed by reference in JS, so 'element' would be a pointer to the object

// There will just be a pointer to the list, not a node containing the word 'head'

//
function Node (element) {
    this.element = element;
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

// find
// finds the first node that contains a specified key
//
LinkedList.prototype.find = function(item) {
    var currNode = this.head;
    while ((currNode.element != item) && !(currNode.next == null)) {
        currNode = currNode.next;
    }
    if (currNode.element === item) {
        return currNode;
    } else {
        return null;
    }
};

// findPrevious
// returns the node just before the first one containing key 'item'
LinkedList.prototype.findPrevious = function(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
};

// Inspired by Skiena page 69
// Recursive implementation of find
doFindRecurs = function(node, item) {
    if (node == null) {
        return null;
    }
    if (node.element == item) {
        return node;
    } else {
        return (doFindRecurs(node.next, item));
    }
};

// findRecurs
// recursive implementation of find
// Inspired by Skiena page 69
findRecurs = function(list, item) {
    var firstNode = list.head;
    return (doFindRecurs(firstNode, item));
};

// insertAfter
// inserts a node containing newElement after the
// node containing item
LinkedList.prototype.insertAfter = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
};

//insertAtBeginning
// inserts a node containing newElement at the beginning of the list
LinkedList.prototype.insertAtBeginning = function(newElement) {
    var newNode = new Node(newElement);
    var firstNode = this.head;
    if (firstNode === null) {
        this.head = newNode;
    } else {
        newNode.next = firstNode.next;
        firstNode.next = newNode;
    }
};

// display
// displays the entire list
//
LinkedList.prototype.display = function() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
};

// remove
// removes the first node containing key item
LinkedList.prototype.remove = function(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
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
