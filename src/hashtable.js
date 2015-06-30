var LinkedList = require('./linkedlist');

var tableLength = 137;

/**
 * Constructor for HashTable
 *
 *
**/
HashTable = function () {
    var i;
    this.table = new Array(tableLength);
    for (i = 0; i < tableLength; i++) {
        this.table[i] = new LinkedList();
    }
}

/**
 * Hash function
 *
 * from Michael McMillan
 * Data Structures & Algorithms with Javascript
 * O'Reilly Media, Sebastopol, CA, 2014
 * p. 101
 * the number 37 comes from Horner's method
 *
 * @private
 * @method hashFunc
 * @param {String} key
 * @return {Integer} bucket number
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

/**
 * Empty out the hash table
 *
 * @method clear
 *
**/
HashTable.prototype.clear = function () {
    var i, bucket;
    for (i = 0; i < tableLength; i++) {
        bucket = this.table[i];
        bucket.clear();
    }
};

/**
 * Delete the item with given key
 *
 * @method delete
 * @param {string} key
 * @return {Boolean} True if item deleted, false if key not found
**/
HashTable.prototype.delete = function(key) {
    var pos = hashFunc(key);
    var bucket = this.table[pos];
    var result = bucket.remove(key);
    return result;
}

/**
 * Inserts an item with given key and data
 *
 * @method insert
 * @param {string} key
 * @param {object} data
**/
HashTable.prototype.insert = function(key, data) {
    var pos = hashFunc(key);
    var bucket = this.table[pos];
    bucket.insertAtBeginning(key, data);
};

/**
 * Delete the item with given key
 *
 * @method get
 * @param {string} key
 * @return {object} Data for this key, or null if not found
**/
HashTable.prototype.get = function(key) {
    var pos = hashFunc(key);
    var bucket = this.table[pos];
    var node = bucket.find(key);
    if (node) {
        return node.refToData;
    } else {
        return null;
    }
};

/**
 * Displays all buckets in the hashtable and their keys
 *
 * @method showDistro
**/
HashTable.prototype.showDistro = function () {
    var i, bucket;
    for (i = 0; i < tableLength; i++) {
        bucket = this.table[i];
        process.stdout.write(i.toString()+' ');
        bucket.display();
        process.stdout.write("\n");
    }
};

/**
 *
 * @method size
 *
 * @return {integer} Number of keys in the hash table
**/
HashTable.prototype.size = function () {
    var i, bucket;
    var total = 0;
    for (i = 0; i < tableLength; i++) {
        bucket = this.table[i];
        total += bucket.size();
    }
    return total;
};

module.exports = HashTable;
