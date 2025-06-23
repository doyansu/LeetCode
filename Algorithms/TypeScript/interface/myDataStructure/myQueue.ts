class ListNode<T> {
    constructor(
        public value: T,
        public next: ListNode<T> | null = null
    ) {}
}

// linked list queue
export class Queue<T> {
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
    private length: number = 0;

    enqueue(value: T): void {
        const newNode = new ListNode(value);

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        ++this.length;
    }

    dequeue(): T | undefined {
        if (!this.head) return undefined;

        const value = this.head.value;
        this.head = this.head.next;

        if (!this.head) this.tail = null; // 清空後 tail 也設為 null
        
        --this.length;

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    size(): number {
        return this.length;
    }

    clear(): void {
        this.head = this.tail = null;
        this.length = 0;
    }
}
