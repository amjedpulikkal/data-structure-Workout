class Node{
    constructor(value){
        this.node = value
        this.left= null
        this.right= null
        
    }
}


class binaryTree{
    constructor(){
        this.root = null

    }

    isEmpty(){
        this.root === null
    }

    levalOrder(){
        let queue=[]
        queue.push( this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr)
            }
            if(curr.right){
                queue.push(curr)
            }

        }
    }
    
}



let tR = new TRee()


tR.insert(10)
tR.insert(15)
tR.insert(3)
tR.insert(7)

