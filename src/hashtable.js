var LinkedList = require('./linkedlist');

var b = 137;

HashTable = function () {
    var i;
    this.table = new Array(b);
    for (i = 0; i < this.table.length; i++) {
        this.table[i] = new LinkedList();
    }
}

/**
 * Hash Function
 * @param {String} key
 * @returns {Integer} bucket number
 *
 * from Michael McMillan
 * Data Structures & Algorithms with Javascript
 * O'Reilly Media, Sebastopol, CA, 2014
 * p. 101
 * the number 37 comes from Horner's method
 */
betterHash = function(string, hashtable) {
    var i;
    const H = 37;
    var total = 0;
    for (i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % hashtable.table.length;
    return parseInt(total);
}

HashTable.prototype.insert = function(key, data) {
    var pos = betterHash(key, this);
    var bucket = this.table[pos];
    bucket.insertAtBeginning(key, data);
}

HashTable.prototype.get = function(key) {

}

module.exports = HashTable;
