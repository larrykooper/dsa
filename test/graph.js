var Graph = require('../src/graph');

var chai = require('chai');
var expect = chai.expect;
var sinonChai = require('sinon-chai');
var sinon = require('sinon');

chai.use(sinonChai);

var graph = new Graph(6);

graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(0,3);
graph.addEdge(2,4);
graph.addEdge(3,5);
//graph.showGraph();
//graph.dfs(0);

describe('graph dfs', function () {

    beforeEach(function() {
        sinon.spy(console, 'log');
    });

    afterEach(function() {
        console.log.restore();
    });

    describe('dfs', function() {
        it('visits all vertices', function () {
            graph.dfs(0);
            expect(console.log).to.have.callCount(6);
        });
    });
});
