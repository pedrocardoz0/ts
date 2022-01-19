function doubleValueObject(this: { value: number }): void {
    this.value = this.value * 2;
}

const object = {
    value: 20,
    doubleValueObject,
};

object.doubleValueObject();

console.log(object.value);
