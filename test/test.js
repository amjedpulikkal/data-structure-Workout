class TreNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null

    }
}


class Tree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(val) {
        let node = new TreNode(val)

        if (this.isEmpty()) {
            this.root = node
        } else {

            this.inserNode(this.root, node)
        }

    }

    inserNode(root, node) {
        if (root.val > node.val) {
            if (root.left === null) {
                root.left = node
            } else {
                this.inserNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.inserNode(root.right, node)
            }
        }
    }

    delete(val) {
        this.deleteNode(this.root, val)
    }

    deleteNode(root, value) {

        if (!root) {
            return
        }

        let left = this.deleteNode(root.left, value)
        let right = this.deleteNode(root.left, value)

        if (!left) {
            return right
        }


    }

    search(val) {
        console.log(this.serchNode(this.root, val))
    }

    serchNode(root, val) {

        if (root.left > val) {
            this.serchNode(root.left)
        } else if (root.right < val) {
            this.serchNode(root.right)
        } else {
            return root.val
        }


    }

    preOrder(root){

        if(!root){
            return
        }
        console.log(root.val)
        this.preOrder(root.left)
        this.preOrder(root.right)

    }

}


let Bst = new Tree()

Bst.insert(10)
Bst.insert(5)
Bst.insert(15)
Bst.insert(20)
Bst.insert(1)
Bst.preOrder(Bst.root)



