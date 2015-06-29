var b = 137;

HashTable = function () {
    this.bucketTable = new Array(b); // buckets
}

HashTable.prototype.insert = function(key, data) {
}

module.exports = HashTable;