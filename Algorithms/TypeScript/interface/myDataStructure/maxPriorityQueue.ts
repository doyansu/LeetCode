export class MaxPriorityQueue<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)) {
        this.comparator = comparator;
    }

    // O(log(n))
    push(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }
    
    // O(log(n))
    pop(): T | undefined {
        if (this.size() === 0) 
            return undefined;
        this.swap(0, this.heap.length - 1);
        const item = this.heap.pop();
        this.bubbleDown();
        return item;
    }

    front(): T | undefined {
        return this.heap[0];
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    size(): number {
        return this.heap.length;
    }

    clear(): void {
        this.heap = [];
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex]) > 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < length && this.comparator(this.heap[left], this.heap[largest]) > 0) {
                largest = left;
            }

            if (right < length && this.comparator(this.heap[right], this.heap[largest]) > 0) {
                largest = right;
            }

            if (largest !== index) {
                this.swap(index, largest);
                index = largest;
            } else break;
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}