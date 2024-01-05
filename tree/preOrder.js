class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}


class tree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root,node)
        }
    }
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left===null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if (root.right===null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            } 
        }
    }

    preOrder(root){

        if(root){

            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }

    }

}


let tre= new tree()

tre.insert(10)
tre.insert(5)
tre.insert(15)
tre.insert(3)
tre.insert(7)

tre.preOrder(tre.root)


console.log(tre.root)