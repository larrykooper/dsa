// Queue implemented using pointers

function Cell(element) {
    this.element = element;
    this.next = null;
};

// Compare Aho, Hopcroft, and Ullman, Data Structures and Algorithms, p. 57

/**
 * Constructor for Queue
 *
 * NB: 'front' pointer points to an empty cell
 *
**/
function Queue() {
    this.front = new Cell('');
    this.rear = this.front;
};

Queue.prototype.makeNull = function() {
    this.rear = this.front;
};

/**
 * Return the item from the front of the queue
 *
 * @method frontElement
 * @return {Element} First element, or null if queue was empty
**/
Queue.prototype.frontElement = function() {
    if (this.isEmpty()) {
        return null;
    } else {
        return this.front.next.element;
    }
};

Queue.prototype.back = function() {
    return this.rear.element;
}

Queue.prototype.enqueue = function(elem) {
    var c = new Cell(elem);
    this.rear.next = c;
    this.rear = c;
};

/**
 * Remove and return the item from the front of the queue
 *
 * @method dequeue
 *
 * @return {Element} First element, or null if queue was empty
**/
Queue.prototype.dequeue = function() {
    if (this.isEmpty()) {
        return null;
    } else {
        this.front = this.front.next;
        elem = this.front.element;
        this.front.element = '';
        return elem;
    }
};

Queue.prototype.isEmpty = function() {
    return (this.front == this.rear);
};

Queue.prototype.toString = function() {
    var retStr = '';
    var x = this.front;
    while (x.next) {
        x = x.next;
        retStr += x.element + "\n";
    }
    return retStr;
};

Queue.prototype.length = function() {
    var p = this.front;
    var count = 0;
    while (p.next) {
        p = p.next;
        count += 1;
    }
    return count;
};

module.exports = Queue;
