"use strict";

//Strings methods
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[2]);

console.log(airline.length);
console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));

console.log(airline.slice(2, 8));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//end letter
console.log(airline.slice(-1));
console.log(airline.slice(0, -1));

//example with slice method
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got middle seats");
  } else {
    console.log("you got edge seats");
  }
};
checkMiddleSeat("A67E");
checkMiddleSeat("35DR");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalisation
const passenger = "jonAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalisedEmail);

//replace
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

//includes(boolean)
console.log(plane.includes("0"));
console.log(plane.includes("A2"));

const plane1 = "Airbus A320neo";
if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

//Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//split and join
const pname = "Kaduru bhargavi";
const words = pname.split(" ");
console.log(words);
const letters = words[0].split("");
console.log(letters);
console.log(...letters);

const [firstName, lastName] = words;
console.log(firstName, lastName);
const fullName = ["Ms.", firstName, lastName[0].toUpperCase()].join(" ");
console.log(fullName);

const capitaliseName = function (name) {
  const names = name.split(" ");
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitaliseName("kaduru bhargavi");
capitaliseName("kotra krishna veni");

const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Bhargavi".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";

  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(54675467567));
console.log(maskCreditCard(47579843431656879));

//sets => removes duplicate values
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Bhargavi"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set("kadurubhargavi").size);

//Maps
const restaurant = new Map();
//set proprties
restaurant.set("name", "Classic Italiano");
restaurant.set(1, "Firenze, Italy");
restaurant.set(2, "Lisbon, Portugal");

restaurant
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(restaurant);

//get properties
console.log(restaurant.get("name"));
console.log(restaurant.get(1));


