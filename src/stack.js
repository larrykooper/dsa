// stack

function Stack() {
// creates an empty stack in this
// top of stack is END of array
    this.dataStore = [];
    this.top = 0;
};

Stack.prototype.push = function(element) {
    this.dataStore[this.top] = element;
    this.top += 1;
};

// returns null if stack empty
Stack.prototype.pop = function() {
    if (this.isEmpty) {
        return null;
    }
    var elem = this.dataStore[this.top-1];
    this.top -= 1;
    return elem;
};

// returns null if stack is empty
Stack.prototype.peek = function() {
    if (this.isEmpty) {
        return null;
    }
    // We subtract one since arrays are zero based
    return this.dataStore[this.top-1];
}

Stack.prototype.length = function() {
    return this.top;
}

Stack.prototype.clear = function() {
    this.top = 0;
}

Stack.prototype.isEmpty = function() {
    return (this.top == 0);
}

module.exports = Stack;
