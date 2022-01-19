function reverse(argument: string): string;
function reverse(argument: string[]): string[];

function reverse(argument: string | string[]): string | string[] {
    if (typeof argument === "string") {
        return argument.split("").reverse();
    } else {
        return argument.slice().reverse();
    }
}

const simpleString = reverse("Hello");
const arrayString = reverse(["H", "E", "L", "L", "O"]);

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

function makeDate(timestampOfYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOfYear, month - 1, day);
    } else {
        return new Date(timestampOfYear);
    }
}

makeDate(200);
makeDate(2000, 10, 2);
