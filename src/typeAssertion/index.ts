let variable: unknown;

// TypeAssertion, you use it when you know exactly the typeof of a variable, and the typescript compiler dont!
(variable as string).trim();

// The best is to do compile-time checking! The best to do is this:

if (typeof variable === "string") {
    variable.trim();
}
