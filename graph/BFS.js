class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  
    bfs(startingNode) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startingNode);
      queue.push(startingNode);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.get(currentVertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  console.log("BFS starting from vertex 'A':");
  graph.bfs('A');
  