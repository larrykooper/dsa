var LinkedList = require('../src/linkedlist');

var assert = require("assert");

var cities = new LinkedList();
var empty = new LinkedList();
var companies = new LinkedList();

describe('LinkedList', function () {
    beforeEach(function() {
        cities.clear();
        cities.insertAtBeginning("Los Angeles");
        cities.insertAtBeginning("Chicago");
        cities.insertAtBeginning("New York");
    });

    describe("#insertAtBeginning()", function () {
        it("should insert primitives", function () {
            assert.equal(cities.size(), 3);
        });
    });

    describe("#insertAtBeginning", function () {
        it("should insert a node at beginning", function () {
            var retval;
            cities.insertAtBeginning("Brooklyn");
            retval = cities.find("Brooklyn");
            assert.strictEqual(retval.element, "Brooklyn");
        });
    });

    describe("#remove()", function () {
        it("should remove stuff", function () {
            cities.remove('New York');
            assert.equal(cities.size(), 2);
        });
    });

    describe("#find()", function () {
        it("should return null if key not found", function () {
            var retval = cities.find("Houston");
            assert.deepEqual(retval, null);
        });
        it("should return null if list empty", function () {
            assert.deepEqual(empty.find("foo"), null);
        });
    });

    describe("#findPos()", function () {
        it("should find position if key found", function () {
            assert.strictEqual(cities.findPos("Chicago"), 2);
        });
    });

    describe("#findRecurs()", function () {
        it("should find an item that is there", function () {
            var result = findRecurs(cities, "Chicago");
            assert.ok(result);
        });
        it("should fail with empty list", function () {
            var result = findRecurs(empty, "Houston");
            assert(!result);
        });
    });

    describe("#insertAfter()", function () {
        it("should insert a node at the right position", function () {
            cities.insertAfter("Paris", "Chicago");
            assert.strictEqual(cities.findPos("Paris"), 3);
        });
        it("should return false if searched item not found", function () {
            var retval = cities.insertAfter("London", "Rome");
            assert(!retval);
        });
    });

    describe("#findPrevious()", function () {
        it("should return null if the item not present", function () {
            var result = cities.findPrevious("Houston");
            assert.deepEqual(result, null);
        });
        it("should return null if list is empty", function () {
            var result = empty.findPrevious("Topeka");
            assert.deepEqual(result, null);
        });
    });

    describe("#size()", function () {
        it("should give a correct result for a list of size 1", function () {
            var bitty = new LinkedList();
            bitty.insertAtBeginning("dog");
            assert.strictEqual(bitty.size(), 1);
        });
    });

});

describe('LinkedList with External Storage', function () {

    describe("#insertAtBeginning", function () {
        it("should allow you to insert objects", function () {

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

        companies.insertAtBeginning(nyt);
        companies.insertAtBeginning(marybethNyc);
        companies.insertAtBeginning(profireEnergy);
        assert.equal(companies.size(), 3);
        });
    });

});

