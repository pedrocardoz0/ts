class QueueNew<T> {
    data: T[] = [];

    push(x: T) {
        this.data.push(x);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

const queue = new QueueNew<number>();
queue.push(10);
queue.pop();
