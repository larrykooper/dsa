var LinkedList = require('./linkedlist');

var tableLength = 137;

HashTable = function () {
    var i;
    this.table = new Array(tableLength);
    for (i = 0; i < tableLength; i++) {
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
hashFunc = function(string) {
    var i;
    const H = 37;
    var total = 0;
    for (i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % tableLength;
    return parseInt(total);
}

HashTable.prototype.insert = function(key, data) {
    var pos = hashFunc(key);
    var bucket = this.table[pos];
    bucket.insertAtBeginning(key, data);
}
// get
// returns data for this key, or null if not found
//
HashTable.prototype.get = function(key) {
    var pos = hashFunc(key);
    var bucket = this.table[pos];
    var node = bucket.find(key);
    if (node) {
        return node.refToData;
    } else {
        return null;
    }
}

HashTable.prototype.showDistro = function () {
    var i, bucket;
    for (i = 0; i < tableLength; i++) {
        bucket = this.table[i];
        process.stdout.write(i.toString()+' ');
        bucket.display();
        process.stdout.write("\n");
    }
}

module.exports = HashTable;
