"use strict";
let someLegacyVariable;
someLegacyVariable = loadString();
if (typeof someLegacyVariable === "string") {
    someLegacyVariable.trim();
}
someLegacyVariable = loadNumber();
if (typeof someLegacyVariable === "number") {
    someLegacyVariable.toFixed(2);
}
function Log(argument) {
    if (typeof argument === "number") {
        console.log(argument.toFixed(2));
    }
    else {
        console.log(argument);
    }
}
Log(10);
Log("Going to be a huge problem!");
