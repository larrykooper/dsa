var Stack = require('../src/stack');
var chai = require('chai');
var assert = chai.assert;

var s = new Stack();
var empty = new Stack();

describe('Stack', function () {

    beforeEach(function() {
        s.clear();
        s.push("David");
        s.push("Raymond");
        s.push("Bryan");
    });

    describe('push', function () {
        it('should add items to the stack', function () {
            assert.strictEqual(s.length(), 3);
        });
    });

    describe('peek', function () {
        it('should return the top item of the stack', function () {
            assert.strictEqual(s.peek(),'Bryan');
        });
        it('should return null if stack is empty', function () {
            assert.isNull(empty.peek());
        });
    });

    describe('pop', function () {
        it('should return null if the stack is empty', function () {
            assert.isNull(empty.pop());
        });
    });


});
