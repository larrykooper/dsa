var cities = new LinkedList();

QUnit.module("Testing the linked list", {
    setup: function(assert) {
        cities.clear();
        cities.insert("New York", "head");
        cities.insert("Chicago", "New York");
    }
});

QUnit.test("inserting into linkedlist", function (assert) {
    assert.equal(cities.size(), 2);
});

QUnit.test("removing from linkedlist", function (assert) {
    cities.remove('New York');
    assert.equal(cities.size(), 1);
});



