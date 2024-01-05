class trieNode {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}


class trie {
    constructor() {
        this.root = new trieNode()
    }

    insert(value) {
        let node = this.root

        for (let char of value) {
            if (!node.children.has(char)) {
                node.children.set(char, new trieNode())
            }
            node = node.children.get(char)
        }
        node.isEnd = true;

    }

    search(value) {
        let node = this.root

        for (let char of value) {
            if (!node.children.has(char)) {
                return false
            }

            node = node.children.get(char)
        }

        return node.isEnd

    }

    startWith(value) {


        let node = this.root

        for (let char of value) {
            if (!node.children.has(char)) {
                return false
            }

            node = node.children.get(char)
        }
        return true

    }
}




let trie1 = new trie()


trie1.insert("apple")
trie1.insert("amjed")
trie1.insert("applePhone")
console.log(trie1.search("amjed"));  Workout