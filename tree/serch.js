class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
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
    search(value) {
        console.log( this.searchNode(this.root, value))
    }
    searchNode(root, value) {

        if (!root) {
            return false
        } else {
            if (root.value === value) {
                console.log(root)
                return true
            }
            if (root.value > value) {
               return this.searchNode(root.left,value)
            } else {
                return this.searchNode(root.right,value)
            }
        }
    }

}



let tr1 = new tree()


tr1.insert(20)
tr1.insert(2)
tr1.insert(1)
tr1.insert(21)
tr1.insert(2100)
tr1.insert(2101)
tr1.insert(2199)

tr1.search(2)


console.log(tr1.root)