"use strict";

// const country = "USA";
// const continent = "North America";
// let population;
// let isIsland;
// let language;
// const finlandPopulation = 6000000;
// const avgPop = 33000000;

// population = 350000000;

// let description = `Portugal is in Europe, and its 11 million people speak Portuguese`;

// population++;

// console.log(population > finlandPopulation, population > avgPop, description);

// let birthYear;
// birthYear = 2022;

// let birthYear;

// birthYear = Number(prompt("What is your year of birth?"));

// if (birthYear >= 1901 && birthYear <= 1924) {
//     console.log(`You are a member of the Greatest Generation!`);
// } else if (birthYear >= 1925 && birthYear <= 1945) {
//     console.log(`You are a member of the Silent Generation!`);
// } else if (birthYear >= 1946 && birthYear <= 1964) {
//     console.log(`You are a member of the Baby Boomer Generation!`);
// } else if (birthYear >= 1965 && birthYear <= 1979) {
//     console.log(`You are a member of Generation X!`);
// } else if (birthYear >= 1980 && birthYear <= 1994) {
//     console.log(`You are a member of the Millennial Generation!`);
// } else if (birthYear >= 1995 && birthYear <= 2012) {
//     console.log(`You are a member of Generation Z!`);
// } else if (birthYear >= 2013 && birthYear <= 2025) {
//     console.log(`You are a member of Gen Alpha!`);
// }

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// let belowAvg = avgPop - population;

// if (population > avgPop) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${belowAvg} below average.`);
// }

// let a = '9' - '5';
// let b = '19' - '13' + '17';
// let c = '19' - '13' + 17;
// let d = '123' < 57;
// let e = 5 + 6 + '4' + 9 - 4 - 2;

// console.log(a, b, c, d, e);

// let numNeighbors;

// numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

// if (numNeighbors === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//     console.log("More than 1 border!");
// } else console.log("No Borders!");

// let newHome;
// population = 350000000;
// language = 'English';
// isIsland = false;

// newHome = population < 50000000 && language === 'English' && isIsland === false;

// if (newHome) {
//     console.log("You should live in the USA!");
// } else {
//     console.log("The USA does not meet your criteria");
// }

// CODING CHALLENGE #3 //

// let dolphinAvg;
// dolphinAvg = (96 + 108 + 89) / 3;
// let koalaAvg;
// koalaAvg = (88 + 91 + 110) / 3;
// const minScore = 100;

// if (dolphinAvg > koalaAvg) {
//     console.log(`The Dolphins have a higher average ${dolphinAvg} than the Koalas ${koalaAvg}. The Dolphins win!`);
// } else if (koalaAvg > dolphinAvg) {
//     console.log(`The Koalas have a higher average ${koalaAvg} than the Dolphins ${dolphinAvg}. The Koalas win!`);
// } else if (koalaAvg === dolphinAvg) {
//     console.log("It's a Draw!");
// }

// CODING CHALLENGE #3 BONUS #1 //

// let dolphinAvg;
// dolphinAvg = (102 + 103 + 89) / 3;
// let koalaAvg;
// koalaAvg = (112 + 125 + 86) / 3;
// const minScore = 100;
// const dolphinMin = dolphinAvg >= minScore;
// const koalaMin = koalaAvg >= minScore;

// if (dolphinAvg > koalaAvg && dolphinMin) {
//     console.log(`The Dolphins have a higher average, ${dolphinAvg}, than the Koalas ${koalaAvg}. The Dolphins win!`);
// } else if (dolphinAvg > koalaAvg && !dolphinMin) {
//     console.log(`The Dolphins have a higher average, ${dolphinAvg}, than the Koalas ${koalaAvg}. But failed to reach the minimum required score. The Koalas win!`);
// } else if (koalaAvg > dolphinAvg && koalaMin) {
//     console.log(`The Koalas have a higher average, ${koalaAvg}, than the Dolphins ${dolphinAvg}. The Koalas win!`);
// } else if (koalaAvg > dolphinAvg && !koalaMin) {
//     console.log(`The Koalas have a higher average, ${koalaAvg}, than the Dolphins ${dolphinAvg}. But failed to reach the minimum required score. The Dolphins win!`);
// }

// let day;
// day = 'monday';

// if (day === 'monday') {
//     console.log(`Plan course structure.`);
//     console.log(`Go to coding meetup.`);
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos.`);
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code examples.`);
// } else if (day === 'friday') {
//     console.log(`Record videos.`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend.`);
// } else {
//     console.log(`Not a valid day!.`);
// }

// const age = 23;
// age >= 18 ? console.log(`I like to drink wine.`) :
// console.log(`I like to drink water.`);

// population = 350000000;

// population >= avgPop ? console.log(`${country}'s population is above average.`) :
// console.log(`${country}'s population is below average.`);

// function describeCountry(country, population, capitalCity) {
//   const myCountry01 = `${country} has ${population} people and its capital city is ${capitalCity}.`;
//   return myCountry01;
// }

// const myUSA = describeCountry("USA", 350000000, "Washington, D.C.");
// console.log(myUSA);

// const myGermany = describeCountry("Germany", 83200000, "Berlin");
// console.log(myGermany);

// const myScotland = describeCountry("Scotland", 5454000, "Edinburgh");
// console.log(myScotland);

function percentageOfWorld1(population) {
  const countryPercent = (population / 7900000000) * 100;
  return countryPercent;
}

// let chinaPop = percentageOfWorld1(1441);
// console.log(chinaPop);

// let usaPop = percentageOfWorld1(350);
// console.log(usaPop);

// let germanyPop = percentageOfWorld1(83);
// console.log(germanyPop);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const china02 = percentageOfWorld2(1441);
// const usa02 = percentageOfWorld2(350);
// const germ02 = percentageOfWorld2(83);

// console.log(china02, usa02, germ02);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const china03 = percentageOfWorld3(1441);
// console.log(china03);

// const usa03 = percentageOfWorld3(350);
// const germ03 = percentageOfWorld3(83);

// console.log(usa03, germ03);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} has ${retirement} more years until retirement!`;
// };

// console.log(yearsUntilRetirement(1986, "Joshua"));

// const describePopulation = (country, population) => {
//   const nationalPop = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${nationalPop}% of the world.`;
// };

// const chinaNationalPop = describePopulation("China", 1441);
// console.log(chinaNationalPop);

// const usNationalPop = describePopulation("USA", 350);
// const germNationalPop = describePopulation("Germany", 83);

// console.log(usNationalPop);
// console.log(germNationalPop);

// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   const teamAverage = (scoreOne + scoreTwo + scoreThree) / 3;
//   return teamAverage;
// };

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
//   } else {
//     console.log("No team wins!");
//   }
// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(77, 64, 87);

// checkWinner(avgDolphins, avgKoalas);

const populations = [100000000, 300000000, 225000000, 77000000];

console.log(populations.length === 4);

let percentagesOfWorld = [];

function percentages() {
  for (let i = 0; i < populations.length; i++) {
    percentagesOfWorld += percentageOfWorld1(populations[i]);
  }
}

percentages();
console.log(percentagesOfWorld);

const neighbors = ["Canada", "Mexico"];
neighbors.push("Utopia");
neighbors.pop();

if (neighbors.includes("Germany")) {
  console.log("Probably a central European country 😀");
} else {
  console.log("Probably not a central European country 😪");
}

console.log(neighbors.indexOf("Mexico"));

neighbors[1] = "Republic of Mexico";
console.log(neighbors);

let tip = 0.15;
let bill;
bill = 275;
const totalBill = bill + bill * tip;
const totalTip = bill - tip;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
}

const bills = [125, 555, 44];

const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[bills.length - 1] + calcTip(bills[bills.length - 1]),
];

const myCountry = {
  country: "USA",
  capital: "Washington D.C.",
  language: "English",
  population: 350000000,
  neighbors: ["Canada", "Mexico"],
};

console.log(
  `The ${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}. `
);
