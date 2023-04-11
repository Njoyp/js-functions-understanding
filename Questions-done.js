// Q1
// function myFunction(num1, num2) {
//   return num1 + num2;
// }

// const result = myFunction(5, 5); // expexted 10 result 10

// console.log(result);

// Q2
// function myFunction(num1, num2) {
//   num1 + num2;
// }

// const result = myFunction(5, 5); // expected: nothing it doesn't has a return result: undefined

// console.log(result);

// Q3
// function myFunction(num) {
//   return num - 1;
// }
// let num = 10;
// num = myFunction(num); // 9
// num = myFunction(num); // 8

// console.log(num); // expected 8

// Q4
// function myFunction(num) {
//   return num - 1;
// }

// let num = 10;
// let add = 3;
// add = myFunction(add);
// add = myFunction(add);

// console.log(add); // expected 1
// console.log(num); // expected 10

// Q5
// function myFunction(num, num1) {
//   console.log(num1);
// }

// let num = 10;
// let num1 = 2;

// myFunction(num);
// expected both undefined because there is only one parameter

// Q6
// function myFunction(num, num1) {
//   console.log(num1);
// }

// let num = 10;
// let num1 = 2;

// myFunction(num1, num); // expected 10

// Q7
// let counter = 1;

// function myFunction() {
//   counter++;
//   return counter;
// }

// myFunction();
// const num = myFunction();
// console.log(num); // expected 3

// Q8
// function myFunction(num1, num2) {
//   return num1 + num2;
// }
// const num1 = 10;
// const num2 = 1;
// const num3 = 4;
// const result = myFunction(num3, num1); // expected 4 + 10 = 14
// console.log(result);

// Q9
// function myFunction(num1, num2) {
//   console.log(num3); // expected undefined because there is no parameter called num3
//   // answer is 20 because it uses the variable
// }
// const num1 = 10;
// const num2 = 1;
// const num3 = 20;
// myFunction(num3, num1);

// Q10
// function myFunction(num1, num2, num3) {
//   console.log(num3); // expected 100 because there is a parameters num3 with a value of 100
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 20;

// myFunction(num3, num1, 100);

// Q11
// function myFunction(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 20;

// const result = myFunction(1, 1, 1);
// console.log(result); // expected 3 because you give the parameters each a value of 1

// Q12
// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   const num2 = getSomeValue();
//   return num1 * num2;
// }

// const result = myFunction(5);
// console.log(result);

// expected num2 gets a value of 2 by the getSomeValue function
// num1 gets a value of 5 by giving the parameter a value of 5
// so expected result will be 2 * 5 = 10

// Q13
// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   const num2 = getSomeValue();
//   return num1 * getSomeValue();
// }

// const result = myFunction(5);
// console.log(result); // expected (num2 = 2 this doesn't matter) num1 = 5*2 =10

// Q14
// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   return getSomeValue() * getSomeValue();
// }

// const result = myFunction(5);
// console.log(result); // expected 4 (2*2 getSomeValue ===2 )

// Q15
// function myFunction(num1) {
//   if (true) {
//     return -10;
//   }

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result); // expected -10 it's always true

// Q16
// function myFunction(num1) {
//   if (false) {
//     return -100;
//   }

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result); // expected it's always true so 5 * 10 = 50

// Q17
// function myFunction(num1) {
//   return -100;

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result); // expected -100 it's the first return statement

// Q18
// function myFunction(num1) {
//   return num1 * 10;

//   return -100;
// }

// const result = myFunction(5);
// console.log(result); //expected 5 * 10 = 50 it's the first return

// Q19
// function myFunction(num1, num2, num3) {
//   return num2;
// }

// const result = myFunction(5, 10, 15);
// console.log(result); // expected 10

// Q20
// function myFunction(num1, num2, num3) {
//   return num1 + num3;
// }

// const num1 = 20;
// const num2 = 200;
// const num3 = 1000;

// const result = myFunction(5, 10, num3, 15);
// console.log(result); // expected 5 + 1000 = 1005

// Q21
// function myFunction(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// const result = myFunction(10, 20);
// myFunction(100, 2);
// console.log(result); // expected 10 + 20 = 30 because thats what is stored in result

// Q22
// function myFunction(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let result = 0;
// myFunction(100, 2);
// console.log(result); // expected 0 because the variable in the
// global scope has value 0 and is being logged

// Q23
// function myFunction(num1, num2) {
//   result = num1 + num2;
// }

// let result = 0;
// myFunction(100, 2);
// console.log(result); // expected 0 because the variable has value 0
// result is 102 result is defined in global but redecleared by local scope

// Q24
// function myFunction(num1, num2) {
//   const result = num1 + num2;
//   return 100;
// }

// const result = myFunction(5, 2);
// console.log(result); // expected 100 because the functions returns 100 regardless

// Q25
// function myFunction(a) {
//   let b = 20;

//   console.log("a:", a); // expected a: 100 (parameter value given in call)
//   console.log("b:", b); // expected b: 20 (variable inside local scope)
//   console.log("c:", c); // expected c: 3 (variable inside global scope)
// }

// let a = 1;
// let b = 2;
// let c = 3;

// myFunction(100);
