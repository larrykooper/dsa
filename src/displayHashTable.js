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

hashtable.insert('New York Times', nyt);
hashtable.insert('marybeth.nyc', marybethNyc);
hashtable.insert('Profire Energy', profireEnergy);
hashtable.showDistro();

var result = hashtable.delete('Profire Energy');
hashtable.showDistro();
