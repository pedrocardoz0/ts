type GetOldType = () => void;

class Person {
    private _age: number;

    constructor(_age: number) {
        this._age = _age;
    }

    /**
     * That's were the (this) loses the scope!
     * getOld(): void {
          this._age++;
      }
     */

    getOld: GetOldType = () => {
        this._age++;
    };

    getAge(): number {
        return this._age;
    }
}

const someone = new Person(20);

// Here we store the method in a variable;
const getOld: GetOldType = someone.getOld;

getOld();

console.log(someone.getAge());
