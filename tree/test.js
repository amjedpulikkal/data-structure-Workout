class tNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class TRee {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

   
    InsertNode(root, node) {

        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node
            } else {

                this.InsertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {

                this.InsertNode(root.right, node)
            }

        }

    }
    insert(value) {
        let node = new tNode(value)
        if (this.isEmpty()) {

            this.root = node
        } else {
            this.InsertNode(this.root, node)
        }
    }

    min(root) {

        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }

    }

    delete(value) {
        this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return
        }

        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }


            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    levalOrder() {
        let queue = []

        queue.push(this.root)

        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }

            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    preOrder(root){
        if(!root){
            return null
        }else{
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(!root){
            return null
        }else{
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    inOrder(root){
        if(!root){
            return null
        }else{
            console.log(root.value)
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }


    



}




let t = new TRee()

t.insert(10)
t.insert(5)
t.insert(15)
t.insert(3)
t.insert(7)
// t.inOrder(t.root)
// t.postOrder(t.root)
t.preOrder(t.root)

// t.levalOrder()
// console.log("           ")
// t.delete(5)
// t.levalOrder()
// console.log("           ")
