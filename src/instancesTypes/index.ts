let regularExp: RegExp = new RegExp("ab+c");

let arrayOfNumbers: Array<number> = [1, 2, 3];

let setOfNumbers: Set<number> = new Set(arrayOfNumbers);

class Queue<T> {
    private array: Array<T> = [];

    push(item: T) {
        this.array.push(item);
    }

    pop(): T | undefined {
        return this.array.pop();
    }
}

const queueType: Queue<number> = new Queue();

queueType.push(1);
console.log(queueType.pop());
