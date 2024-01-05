class Heap {
    constructor() {
        this.Heap = []
    }
    leftChildIndex(i) {
        return 2 * i + 1
    }
    rightChildIndex(i) {
        return 2 * i + 2
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    hasLeftChildIndex(i) {
        return this.leftChildIndex(i) < this.Heap.length
    }
    hasRightIndex(i) {
        return this.rightChildIndex(i) < this.Heap.length
    }
    hasParentIndex(i) {
        return this.getParentIndex(i) >= 0
    }

    leftChild(i) {
        return this.Heap[this.leftChildIndex(i)]
    }
    rightChild(i) {
        return this.Heap[this.rightChildIndex(i)]
    }
    parent(i) {
        return this.Heap[this.getParentIndex(i)]
    }


    swap(indexOne, indexTwo) {
        let tamp = this.Heap[indexOne]
        this.Heap[indexOne] = this.Heap[indexTwo]
        this.Heap[indexTwo] = tamp
    }

    heapifyUp() {
        let index = this.Heap.length - 1
        while (this.hasParentIndex(index) && this.parent(index) > this.Heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    heapifydown() {
        let index = 0   
        while (this.hasLeftChildIndex(index)) {
            let small = this.leftChildIndex(index)

            if (this.hasRightIndex(index) && this.rightChild(index) < this.Heap[small]) {
                small = this.rightChild(index)
            }

            if (this.Heap[index] < this.Heap[small]) {
                break
            } else {
                this.swap(index, small)
            }

            index = small
        }
    }

    add(value) {
        this.Heap.push(value)
        this.heapifyUp()
    }

    printHeap() {
        console.log(this.Heap);
    }
}







let heap = new Heap()

heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);

heap.printHeap()