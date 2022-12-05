const { readFileSync } = require("fs");

let input = readFileSync("./day-2.txt", { encoding: "utf8", flag: "r" });

input = input.substring(0, input.lastIndexOf("\n"));

const points = {
  X: 1,
  Y: 2,
  Z: 3,
};

const win = {
  X: {
    A: 3,
    B: 0,
    C: 6,
  },
  Y: {
    A: 6,
    B: 3,
    C: 0,
  },
  Z: {
    A: 0,
    B: 6,
    C: 3,
  },
};

input = input.replaceAll("\n", ":");
input = input.replaceAll(" ", ",");

input = input.split(":");

let score = 0;
input.forEach((block) => {
  let arr = block.split(",");
  opponent = arr[0];
  me = arr[1];

  score += points[me];
  score += win[me][opponent];
});

console.log(`Score Part 1: ${score}`);

const points_2 = {
  X: 0,
  Y: 3,
  Z: 6,
};

const win_2 = {
  A: {
    0: "Z",
    3: "X",
    6: "Y",
  },
  B: {
    0: "X",
    3: "Y",
    6: "Z",
  },
  C: {
    0: "Y",
    3: "Z",
    6: "X",
  },
};

score = 0;
input.forEach((block) => {
  let arr = block.split(",");
  opponent = arr[0];
  outcome = arr[1];

  let pointsForOutcome = points_2[outcome];
  let pointsForItem = points[win_2[opponent][pointsForOutcome]];

  score += pointsForOutcome + pointsForItem;
});

console.log(`Score Part 2: ${score}`);
