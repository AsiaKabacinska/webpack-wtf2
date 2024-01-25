import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
// console.log("Hello on my beautiful page ! Welcome ");

// const imie = "Asia";
// const wiek = 18;

// console.log(
//   "Wita Cię " +
//     imie +
//     "na swojej pieknej stronie ." +
//     imie +
//     "ma " +
//     18 +
//     " lat."
// );

// const heading = document.querySelector(".header__heading");
// const body = document.querySelector("body");
// console.log(heading);
// console.log(body);

// // heading.innerHTML = "Hello Ziomki witajcie w te piekne swieta ! ";
// const header_js = document.querySelector(".header--js");
// header_js.innerHTML = "Witajcie kombinacje z JS-em ";

// let humanOne = {
//   age: 12,
//   name: "Krystian",
//   adress: {
//     street: "Waltera",
//     city: "Poznan",
//   },
// };

// let humanTwo = {
//   age: 15,
//   name: "Antek",
//   adress: humanOne.adress,
// };
// humanTwo.adress.city = "Londyn";
// // humanTwo = humanOne;

// humanTwo.name = "Alicja";

// console.log(humanOne);
// console.log(humanTwo);

// let userName = "Asia";
// let userAge = 18;

// function witaj() {
//   return "Czesc, jestem " + userName + "  i mam " + userAge + " lat. A Ty?";
// }

// // alert(witaj());

// // const witamCieRazJeszcze = () => {
// //   console.log(" Hejka . Wita Cię " + userName + " Czuj sie jak u siebie :) ");
// // };

// const witamCieRazJeszcze = (userName, userAge) => {
//   console.log(
//     `Hejka . Wita Cię ${userName} mam  ${userAge} Czuj sie jak u siebie :`
//   );
// };

// // witamCieRazJeszcze();

// let guestAge;
// let guestName;

// // powitanieParametry("Natalia", "29");

// // guestName = prompt("Podaj swoje imie ");
// // guestAge = prompt("Podaj swój wiek ");

// // function powitanieParametry(guestName, guestAge) {
// //   alert("Witaj " + guestName + " .Twoj wiek to " + guestAge + " lat. ");
// // }
// // powitanieParametry(guestName, guestAge);

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
