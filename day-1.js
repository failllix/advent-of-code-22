const { readFileSync } = require("fs");

let input = readFileSync("./day-1.txt", { encoding: "utf8", flag: "r" });

input = input.replaceAll("\n", ",");
input = input.replaceAll(",,", ":");
input = input.split(":");

let max = [0, 0, 0];
let startIndex = 0;
input.forEach((block) => {
  let arr = block.split(",");
  arr = arr.map((x) => parseInt(x));

  let sum = arr.reduce((s, c) => {
    return s + c;
  });
  while (sum >= max[startIndex]) {
    if (sum <= max[startIndex + 1] || startIndex == 2) {
      max.splice(startIndex + 1, 0, sum);
      max.shift();
      break;
    }
    startIndex++;
  }
  console.log(max);
  startIndex = 0;
});

console.log(`Top three: ${max}`);
console.log(`Top calories: ${max[2]}`);
console.log(
  `Sum of top three: ${max.reduce((s, c) => {
    return s + c;
  })}`
);
