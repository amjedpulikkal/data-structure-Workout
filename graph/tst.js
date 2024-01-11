class graph1{
    constructor(){
        this.adj={}
    }


    addVertex(value){

        if(!this.adj[value]){
            this.adj[value] = new Set()
        }


    }

    addEdge(vertex1,vertex2){

        if(!this.adj[vertex1]){

            this.adj[vertex2]=new Set()
        }
        
    }
}