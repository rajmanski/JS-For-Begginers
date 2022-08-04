//Date object

const myDate = new Date();
console.log(myDate);

const myPastDate = new Date(1545, 11, 2);
const myFutureDate = new Date(2515, 12, 01);
console.log(myPastDate);
console.log(myFutureDate);

const birthday = new Date(1991, 6, 1);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getTime());