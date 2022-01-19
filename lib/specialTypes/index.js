"use strict";
let exampleAny;
let exampleUnknown;
/**
 * The similarity between these guys is only beacause you can assing any sort
 * of values into them.
 */
// Any Example;
exampleAny = 10;
exampleAny = "Hello World!";
// Unknow Example;
exampleUnknown = 10;
exampleUnknown = "Hey!";
exampleUnknown = true;
exampleUnknown = new QueueNew();
// Any
/**
 * Any allow you to use the variable in a not safe manner;
 */
exampleAny.inser.hahha.functionKAKAKA();
let booleanSetByAny = exampleAny; // Tricky!
// Unknown - Is a better version of any!
/**
 * To use unknown you need to do typechecking; To use unknow you need to make the they checking!
 */
if (typeof exampleUnknown === "string") {
    exampleUnknown.trim(); // Compile time safe!
}
if (typeof exampleUnknown === "boolean") {
    let booleanSetByUnknown = exampleUnknown;
}
