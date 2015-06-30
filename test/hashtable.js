var HashTable = require('../src/hashtable');
var assert = require("assert");

var hashtable = new HashTable();

var nyt = {
    name: "New York Times",
    address: {
        street: "620 8th Avenue",
        zipcode: "10018"
    },
    employees: 2000
};

var marybethNyc = {
    name: "marybeth.nyc",
    address: {
        street: "300 East 71st St",
        zipcode: "10021"
    },
    employees: 2
};

var profireEnergy = {
    name: "Profire Energy",
    address: {
        street: "321 S 1250 W",
        zipcode: "84042"
    },
    employees: 150
};

describe('HashTable', function () {
    beforeEach(function() {
        hashtable.clear();
        hashtable.insert('New York Times', nyt);
        hashtable.insert('marybeth.nyc', marybethNyc);
        hashtable.insert('Profire Energy', profireEnergy);
    });

    describe("#insert()", function() {
        it("should insert objects correctly", function () {
            var d;
            d = hashtable.get('New York Times');
            assert.deepEqual(d, nyt);
        });
        it("should insert the right number of objects", function () {
            assert.strictEqual(hashtable.size(), 3);
        });
    });
});
