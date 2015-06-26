QUnit.test("inserting into linkedlist", function (assert) {
    var cities = new LinkedList();
    cities.insert("New York", "head");
    assert.equal(cities.size(), 1, "It passed!");
});
