/**
 * graph.js
 *
 * Compare Michael McMillan,
 * _Data Structures & Algorithms with Javascript_
 * O'Reilly Media, Sebastopol, CA, 2014
 *  pp 141ff
 *
 * We use the adjacency-list representation
 * for graphs
 *
 * It is an array of adjacency lists
 *
 * We will represent each adjacency list
 * as an array
**/

/**
 *
 * Constructor for Graph
 *
 *
**/
Graph = function (numberOfVertices) {
    var i;
    // vertices is number of vertices
    this.vertices = numberOfVertices;
    // edges is number of edges
    this.edges = 0;

    // adj is the adjacency list
    this.adj = [];

    // the marked array [its indices match the adj array]
    // contains which vertices have been visited
    this.marked = [];

    for (i = 0; i < this.vertices; i++) {
        this.adj[i] = []; // set the adjacency list for this vertex to empty array
        this.marked[i] = false; // all vertices are unvisited
    }

};

/**
 * Adds an edge between vertex v and vertex w
 * This is an undirected graph
 *
 * @method addEdge
 * @params {integer} v, w: vertex numbers that this edge connects
 **/
Graph.prototype.addEdge = function(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
};


Graph.prototype.showGraph = function() {
    var i;
    for (i = 0; i < this.vertices; i++) {
        process.stdout.write(i + " -> ");  // vertex nbr
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                process.stdout.write(this.adj[i][j] + ' ');
            }
        }
        process.stdout.write("\n");
    }
};

/**
 * Marks all vertices as unvisited
 *
 * @method unmark
 *
 **/
Graph.prototype.unmark = function () {
for (i = 0; i < this.vertices; i++) {
        this.marked[i] = false; // all vertices are unvisited
    }
}

/**
 * Traverse the graph using depth-first search
 *   Uses recursion
 * From Aho, Hopcroft, and Ullman, Data Structures and Algorithms, p. 216
 *
 *  Time is O(number of edges)
 *
 * @method dfs
 * @params {integer} v: vertex to start depth-first-search at
 **/
Graph.prototype.dfs = function(v) {
    var w;
    var adjList = this.adj[v];
    // we visit v
    this.marked[v] = true;
    if (adjList != undefined) {
        console.log("Visited vertex: " + v);
    }
    // Now for every unvisited vertex in v's adjacency list
    // We recursively call dfs on it
    for (w = 0; w < adjList.length; w++) {
        if (!this.marked[adjList[w]]) {
            this.dfs(adjList[w]);
        }
    }
}

/**
 * Traverse the graph using breadth-first search
 *   Uses a queue
 *
 *  Time is O(number of edges)
 *
 * @method bfs
 * @params {integer} s: vertex to start breadth-first-search at
 **/
Graph.prototype.bfs = function(s) {
    var v;
    var w;
    var size;
    var i;
    // The queue tells us where we are at
    // in the 'depth', and where we have to go next
    var queue = [];
    // we visit s
    this.marked[s] = true;
    console.log("Visited vertex: " + s);
    queue.push(s); // add s to end of queue
    while (queue.length > 0) {
        v = queue.shift(); // removes from front of queue
        size = this.adj[v].length
        for (i = 0; i < size; i++) {
            w = this.adj[v][i];
            if (!this.marked[w]) {
                this.marked[w] = true;
                console.log("Visited vertex: " + w);
                queue.push(w);
            }
        }

    }
}

module.exports = Graph;
