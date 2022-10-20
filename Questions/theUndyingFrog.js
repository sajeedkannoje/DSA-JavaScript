//                  The Undying Frog
// Three frogs Jim. Jack and John decide to race. They come together hopping and get ready on the
// start line and wait for buzzer to start the race. Each frog takes 2 seconds to complete a jump. But
// each frog has a variable jump length. Jim jumps 22 centimeters in 2 seconds. Jack jumps 17
// centimeters in 2 seconds and John jumps 14 centimeters in 2 seconds.

// As these frogs jump with a lot of energy, they need some time to rest between jumps. Jim takes 2
// seconds of rest after I jump, Jack takes 2 seconds of rest after 2 jumps and John takes 2 seconds of
// rest after 4 jumps.

// You are the judge in this race, and you will have to write a program which will decide who is the
// winner if given time t in seconds. For example. the program will take an input of the number of
// seconds and you will have to give output of who is the winner and the distance of that winner from
// the start line.

// Frog |   Jump Distance   |  No. of jumps before taking rest
// Jim  |   22 cms          |   1 jump
// Jack |   17 cms          |   2 jumps
// John |   14 cms          |   4 jumps

// Examples:
// Input : 10 seconds
// Output : Winner - Jack, Distance from start line - 68 centimeters

// Input : 30 seconds
// Output : W'inner - Jim,  Distance from start line - 176 centimeters

// Input : 36 seconds
// Output : Winner - John, Distance from start line - 210 centimeters

let givenSeconds = parseInt(prompt("Enter the second"));
let frogs = [
  {
    name: "Jim",
    jump: 22, // in cm
    taking_jump_before_taking_rest: 1, // in second
    rest: 2, // rest duration
  },
  {
    name: "Jack",
    jump: 17, // in cm
    taking_jump_before_taking_rest: 2, // in jump
    rest: 2, // rest duration
  },
  {
    name: "John",
    jump: 14, // in cm
    taking_jump_before_taking_rest: 4, // in second
    rest: 2, // rest duration
  },
];
let winner = {
  name: "",
  distance: 0,
};
const calculateDistance = (frog, seconds) => {
  let distance = 0;
  seconds = seconds / 2;
  seconds -= Math.floor(seconds / (frog.taking_jump_before_taking_rest + 1));
  distance = seconds * frog.jump;
  return distance;
};
frogs.map((frog) => {
  let tempScore = calculateDistance(frog, givenSeconds);
  if (winner.distance < tempScore) {
    winner.name = frog.name;
    winner.distance = tempScore;
  }
});
document.write(
  ` Winner - ${winner.name} Distance from start line - ${winner.distance} centimeters`
);
console.log(
  ` Winner - ${winner.name} Distance from start line - ${winner.distance} centimeters`
);
