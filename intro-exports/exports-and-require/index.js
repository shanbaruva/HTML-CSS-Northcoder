const somethingFromFile1 = require('./examples/file-1.js');
const somethingFromFile2 = require('./examples/file-2.js');
const somethingFromFile3 = require('./examples/file-3.js');
const somethingFromFile4 = require('./examples/file-4.js');
const somethingFromFile5 = require('./examples/file-5.js');
const somethingFromFile6 = require('./examples/file-6.js');

// Our guess is "Vel"
console.log(somethingFromFile1);
// Our guess is { tutor: "Vel" }
console.log(somethingFromFile2);
// Our guess is [Function: printHello]
console.log(somethingFromFile3);
// Our guess is {add: [Function: void]}
console.log(somethingFromFile4);
// Our guess is {[Function: printHello], [Function: add]}
console.log(somethingFromFile5);
// Our guess is nothing will be logged
console.log(somethingFromFile6);

console.log(somethingFromFile2.tutor)

somethingFromFile3()

somethingFromFile5.printHello()