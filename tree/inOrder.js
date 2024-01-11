class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class TreeInOpre {
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
            this.insertNode(this.root, node)
        }

    }
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node

            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }

        }
    }
    preOrder(root) {

        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }

    }
    inOrder(root) {
        if (root) {
            this.preOrder(root.left)
            console.log(root.value)
            this.preOrder(root.right)
        }

    }
    deleteNode(root, key) {

        
    }
       
}

let tr = new TreeInOpre()
tr.insert(10)
tr.insert(5)
tr.insert(15)
tr.insert(3)
tr.insert(7)
tr.deleteNode(10)
tr.inOrder(tr.root)
console.log(tr.root)




