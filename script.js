const userName = prompt(`Please enter Your Name`);
const userAge = parseInt(prompt(`Please enter Your Age`));

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if (userAge >= 1 && userAge <= 5) {
  console.log(`${userName} is a child`);
  console.log(`${userAge} is user age and hi is playing`);
}
if (userAge >= 6 && userAge <= 18) {
  console.log(`${userName} is in school`);
  console.log(`${userAge} is user age and hi studying math`);
}
if (userAge >= 19 && userAge <= 25) {
  console.log(`${userName} is in college`);
  console.log(`${userAge} is user age and hi doing study computer science`);
}
if (userAge >= 26 && userAge <= 75) {
  console.log(`${userName} is in Working professional`);
  console.log(`${userAge} is user age and hi is doing job`);
}
if (userAge >= 76) {
  console.log(`${userName} is retard person`);
  console.log(`${userAge} is user age and hi is read newspaper and take a tea`);
}
console.log("Program Ended!!");
