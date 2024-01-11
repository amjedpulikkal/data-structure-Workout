class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(value) {

        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = new Set()
        }

    }

    addEdge(vertex1, vertex2) {
        {
            if (!this.adjacencyList[vertex1]) {
                this.addVertex(vertex1)
            }
            if (!this.adjacencyList[vertex2]) {
                this.addVertex(vertex2)
            }
            this.adjacencyList[vertex1].add(vertex2)
            this.adjacencyList[vertex2].add(vertex1)
        }

    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex1){
        
        for(let value of this.adjacencyList[vertex1]){

            this.removeEdge(vertex1,value)
        }

        delete this.adjacencyList[vertex1]
    }


    display() {
        for (let key in this.adjacencyList) {

            console.log(key + "=>" + [...this.adjacencyList[key]]);
        }
    }
}




let graph1 = new Graph()

graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("c")


graph1.addEdge("A", "B")
graph1.addEdge("B", "c")


// graph1.removeVertex("B")

graph1.display()
