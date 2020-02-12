//1. Array generic
let names: Array<string> = []; // Array<string> is completely the same as string[]. Array means the type is array and <> means what type of properties would be put in.
names = ["abcd", "efgh", "ijkl", "opqr", "stuv"];
const a = names[3].split("");
console.log(names[3]);
console.log(a);
//2. promise generic
const promise: Promise<string> = new Promise((resolve, reject) => {
  // In this case, promise generic determines what result type should be followed in terms of values.
  setTimeout(() => {
    resolve("string"); // therefore, if I put number inside parantheses, than it makes an error because number cannot be used for making string result.
  }, 2000);
});

promise.then(data => {
  data.split("");
});
