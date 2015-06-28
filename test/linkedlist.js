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
});
