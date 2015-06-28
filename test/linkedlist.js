var LinkedList = require('../src/linkedlist');

var assert = require("assert");

var cities = new LinkedList();

describe('LinkedList', function () {
    beforeEach(function() {
        cities.clear();
        cities.insert("New York", "head");
        cities.insert("Chicago", "New York");
        cities.insert("Los Angeles", "Chicago");
    });

    describe("#insert()", function () {
        it("should insert stuff", function () {
            assert.equal(cities.size(), 3);
        });
    });

    describe("#remove()", function () {
        it("should remove stuff", function () {
            cities.remove('New York');
            assert.equal(cities.size(), 2);
        });
    });
    describe("#findRecurs()", function () {
        it("should find an item that is there", function () {
            var result = findRecurs(cities, "Chicago");
            assert.ok(result);
        });
        it("should fail with empty list", function () {
            var dumb = new LinkedList();
            var result = findRecurs(dumb, "Houston");
            assert(!result);
        });

    });

});
