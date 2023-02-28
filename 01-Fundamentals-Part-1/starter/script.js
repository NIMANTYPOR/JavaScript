// console.log("jonas");

// let Firstname = "BOB";
// console.log(Firstname);

// let Javascript = true;
// console.log(Javascript);
// console.log(typeof Javascript);

// const ageSamir = 2023 - 1994;
// const ageXalil = 2023 - 1990;
// console.log(ageSamir, ageXalil);

// let MarkBMI = 100 / 1.69 ** 2;
// let JohnBMI = 92 / 1.95 ** 2;
// let markHigherBMI = MarkBMI > JohnBMI;
// console.log(MarkBMI, JohnBMI, markHigherBMI);

// const Firstname = "Samir";
// const year = 2022;
// const birthyear = 1994;
// const job = "programmer";

// const samirmuellim = `I'm ${Firstname}, a ${year - birthyear} years ${job} `;
// console.log(samirmuellim);

const age = 15;

// if (age >= 18) {
//   console.log("Go get your car!");
// } else {
//   const yearstocar = 18 - age;
//   console.log(`You cant get your car. Wait a ${yearstocar} years please`);
// }

// let MarkBMI = 100 / 1.69 ** 2;
// let JohnBMI = 92 / 1.95 ** 2;
// let markHigherBMI = MarkBMI > JohnBMI;
// // console.log(MarkBMI, JohnBMI, markHigherBMI);

// if (MarkBMI > JohnBMI) {
//   console.log(`Mark BMI ${MarkBMI} is higher than John BMI ${JohnBMI}`);
// } else {
//   console.log(`Mark BMI ${MarkBMI} is lesser than John BMI ${JohnBMI}`);
// }

// const favouroite = Number(prompt("What is your lovely number"));
// console.log(favouroite);

// if (favouroite === 23) {
//   console.log("COOL is 23");
// } else if (favouroite === 9) {
//   console.log("COOL is 9");
// } else {
//   console.log("CHOOSE MY NUMBER");
// }

// if (favouroite !== 9) {
//   console.log("Why not 9");
// }

// const hasgoodvision = true;
// const hasdriverlivense = true;
// const isTired = false;

// console.log(hasgoodvision && hasdriverlivense);
// console.log(hasgoodvision || hasdriverlivense);
// console.log(!hasdriverlivense);

const DolphinsAVG = (97 + 112 + 101) / 3;
const KoalasAVG = (109 + 95 + 123) / 3;

if (DolphinsAVG > KoalasAVG && DolphinsAVG > 100) {
  console.log("Dolphins Wins");
} else if (KoalasAVG > DolphinsAVG && KoalasAVG > 100) {
  console.log("Koalas Wins");
} else if (
  KoalasAVG === DolphinsAVG &&
  DolphinsAVG >= 100 &&
  KoalasAVG >= 100
) {
  console.log("ITS DRAW");
} else {
  console.log("NO ONE WINS");
}
