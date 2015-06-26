function Node (element) {
    this.element = element;
    this.next = null;
}

LinkedList = function () {
     this.head = new Node("head");
}

// find
// finds the first node that contains a specified key
//
LinkedList.prototype.find = function(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
};

LinkedList.prototype.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
};

// display
// displays the entire list
//
LinkedList.prototype.display = function() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
};

// size
// returns the size of the list
LinkedList.prototype.size = function () {
    var theSize = 0;
    var currNode = this.head;
    while (!(currNode.next == null)) {
        theSize += 1;
        currNode = currNode.next;
    }
    return theSize;
}
