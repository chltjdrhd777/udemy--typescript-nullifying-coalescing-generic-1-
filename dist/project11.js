"use strict";
//Index properties = which allows me to put very very flexible structure of properties
const call1 = {
    1: "automatically interpreted as string / even index key type is declared number, it become immeidately a number",
    //'2': 'it cannot be acceptable because key type is number'
    a: "no problem",
    b: "there is no limitation of the number of properties"
};
//////////////////////////////////////////
//Null, undefined coalescing
const userInput = null; // I want to make userInput as null value
const storeData = userInput || "DEFAULT"; // In this case, the result is always 'DEFAULT' first because typescript would consier null as faulsy value
console.log(storeData);
//However, if I want to utilize only null or undefined, then you can use "??"
const userInput2 = undefined;
const storeData2 = (userInput2 !== null && userInput2 !== void 0 ? userInput2 : "DEFAULT"); // "??" means that if const userInput2 is undefined or null, then I want to print "DEFAULt"
const userInput3 = ""; // set the empty string
const storeData3 = (userInput3 !== null && userInput3 !== void 0 ? userInput3 : "DEFAULT");
console.log(storeData2, storeData3); //storeData3 tells nothing.
////////////////////////////////////////////////////////////////////////////////////////////////////]
//# sourceMappingURL=project11.js.map