var Graph = require('../src/graph');
var assert = require("assert");

var graph = new Graph(6);

graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(0,3);
graph.addEdge(2,4);
graph.addEdge(3,5);
graph.showGraph();

