var cities = new LinkedList();

QUnit.module("Testing the linked list", {
    setup: function(assert) {
        cities.clear();
        cities.insert("New York", "head");
        cities.insert("Chicago", "New York");
        cities.insert("Los Angeles", "Chicago");
    }
});

QUnit.test("inserting into linkedlist", function (assert) {
    assert.equal(cities.size(), 3);
});

QUnit.test("removing from linkedlist", function (assert) {
    cities.remove('New York');
    assert.equal(cities.size(), 2);
});

QUnit.test("findRecurs should find an item", function (assert) {
    var result = findRecurs(cities, "Chicago");
    assert.ok(result, "findRecurs finds item");
});




