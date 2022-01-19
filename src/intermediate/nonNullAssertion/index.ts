let object2D: { x: number; y: number };

function initializeGeometry(shape: { x: number; y: number }) {
    object2D = shape;
}

initializeGeometry({ x: 30, y: 40 });

// Don't use it in code
console.log(`Shape: x - ${object2D!.x} <=> y - ${object2D!.y}`);
