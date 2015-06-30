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

Stack.prototype.pop = function() {
    var elem = this.dataStore[this.top-1];
    this.top -= 1;
    return elem;
};

Stack.prototype.peek = function() {
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
