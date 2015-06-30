var HashTable = require('./hashtable');

var hashtable = new HashTable();

var nyt = {
    name: "New York Times",
    address: {
        street: "620 8th Avenue",
        zipcode: "10018"
    },
    employees: 2000
};

hashtable.insert('New York Times', nyt);
hashtable.showDistro();
