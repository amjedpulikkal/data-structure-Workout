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
  
    dfsRecursive(startingNode) {
      const visited = new Set();
  
      const dfs = (vertex) => {
        visited.add(vertex);
        console.log(vertex);
  
        const neighbors = this.adjacencyList.get(vertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      };
  
      dfs(startingNode);
    }
  
    dfsIterative(startingNode) {
      const visited = new Set();
      const stack = [];
  
      visited.add(startingNode);
      stack.push(startingNode);
  
      while (stack.length > 0) {
        const currentVertex = stack.pop();
        console.log(currentVertex);
  
        const neighbors = this.adjacencyList.get(currentVertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
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
  
  console.log("DFS Recursive starting from vertex 'A':");
  graph.dfsRecursive('A');
  
  console.log("\nDFS Iterative starting from vertex 'A':");
  graph.dfsIterative('A');
  