//var LinkedList = require('linkedlist');

var b = 137;

HashTable = function () {
    var i;
    this.table = new Array(b);
    for (i = 0; i < this.table.length; i++) {
//        this.table[i] = new LinkedList();
    }
}

HashTable.prototype.insert = function(key, data) {
}

HashTable.prototype.get = function(key) {

}

module.exports = HashTable;
