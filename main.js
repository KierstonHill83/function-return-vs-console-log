function greet(who) {
  console.log("Good morning, " + who + "!");
};

greet("Heather");

function greetTwo(personName) {
  return "Hello, " + personName + "!";
}

var result = greetTwo("Matt");
console.log(result);

function hairColor(color) {
  if(color === "brown"){
  return "The hair color is" + color;
} else {
  return "The hair color is not brown";
}
}

var total = hairColor("blonde");
console.log(total);
