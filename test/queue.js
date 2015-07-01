var Queue = require('../src/queue');
var chai = require('chai');
var assert = chai.assert;

var q = new Queue();

describe('Queue', function () {

    beforeEach(function() {
        q.makeNull();
        q.enqueue('Meredith');
        q.enqueue('Cynthia');
        q.enqueue('Jennifer');
    });

    describe("enqueue", function () {
        it('should add items to the queue', function () {
            assert.equal(q.length(), 3);
        });
    });

    describe('dequeue', function () {
        it('should take the first item out of the queue', function () {
            var name = q.dequeue();
            assert.strictEqual(name, 'Meredith', 'name is incorrect');
            assert.strictEqual(q.length(), 2, 'length is incorrect');
        });
    });

    describe('frontElement', function () {
        it('should return the first element of the queue', function () {
            var name = q.frontElement();
            assert.strictEqual(name, 'Meredith', 'name is incorrect');
            assert.strictEqual(q.length(), 3, 'length is incorrect');
        });
    });

    describe('back', function () {
        it('should return the last element of the queue', function () {
            var name = q.back();
            assert.strictEqual(name, 'Jennifer');
        });
    });

});