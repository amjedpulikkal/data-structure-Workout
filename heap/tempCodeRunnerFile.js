class heap {
    constructor() {
        this.heap = []
    }


    getLeftChildIndex(i) {

        return 2 * i + 1
    }
    getRightChildIndex(i) {
        return 2 * i + 2
    }
    getParentIndex() {
        return Math.floor((i + 1) / 2)
    }

    getLeftChildIndex(i) {
        return this.heap[this.getLeftChild(i)]
    }
    hasParent(i) {
        return this.getParentIndex(i) >= 0
    }
    hasLeftChild(i) {

        return this.getLeftChildIndex(i) <= this.heap.length

    }
    getParent(i) {

        return this.heap[this.getParentIndex(i)]

    }
    getChild(i) {
        return this.heap[this.getLeftChildIndex(i)]
    }
    getRight(i) {

        return this.heap[this.getRightChildIndex(i)]

    }

    swap(indexOne, indexTwo) {

        let tamp = this.heap[indexOne]
        this.heap[indexOne] = this.heap[indexTwo]
        this.heap[indexTwo] = tamp

    }

    add(value) {
        this.heap.push(value)
        this.heapiflyUp()
    }

    remove() {
        const item = this.heap[0]

        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapiflydown()
        return item
    }



    heapiflyUp() {
        let index = this.heap.length - 1
        while (this.hasParent(index) && this.getParent(index) < this.getChild(index)) {
            swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    heapiflydown() {
        let index = 0
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index)

            if (this.getRightChildIndex(index) && this.getRight(index) < this.getChild(index)) {

                smallerChildIndex = this.getRightChildIndex(index)

            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex

        }
    }

    heapify(arr, n, i) {
        let length = i
        const left = 2 * i + 1
        const right = 2 * i + 2
        if (left < n && arr[left])
    }

}