function formatCommandLine(input: string | string[]) {
    let line: string = "";
    if (typeof input === "string") {
        line = input.trim();
    } else {
        line = input.map((item) => item.trim()).join(" ");
    }

    return line;
}

const returnedFormat: string = formatCommandLine(" Hello ");
const returnedFormatSecond: string = formatCommandLine([" HI", " Hello"]);

console.log(`returnedFormat >> ${returnedFormat}`);
console.log(`returnedFormatSecond >> ${returnedFormatSecond}`);

// Union Type
type Padding = number | string;
