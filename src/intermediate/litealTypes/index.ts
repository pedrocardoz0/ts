type Directions = "North" | "South" | "East" | "West";

function moveDirection(distance: number, direction: Directions): void {
    console.log(`Have moved ${distance}m to the ${direction}`);
}

moveDirection(10, "South");
// moveDirection(20, false); -> Error

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): number {
    return Math.floor(Math.random() * 6 + 1) as Dice;
}

console.log(rollDice());
