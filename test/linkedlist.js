var LinkedList = require('../src/linkedlist');

var assert = require("assert");

var cities = new LinkedList();

var companies = new LinkedList();

describe('LinkedList', function () {
    beforeEach(function() {
        cities.clear();
        cities.insertAfter("New York", "head");
        cities.insertAfter("Chicago", "New York");
        cities.insertAfter("Los Angeles", "Chicago");
    });

    describe("#insertAfter()", function () {
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

describe('LinkedList with External Storage', function () {

    describe("#insertAfter", function () {
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

        companies.insertAfter(nyt, "head");
        companies.insertAfter(marybethNyc, nyt);
        companies.insertAfter(profireEnergy, marybethNyc);
        assert.equal(companies.size(), 3);
        });
    });

});

