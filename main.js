// ✅ ✅ ✅ Module 01 ❌

// ✅ ✅ Homework 01

// ✅ Task 01
// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'
// console.log(pricePerItem);
// 2000

// ✅ Task 02
// let productName = "Droid";
// let pricePerItem = 2000;
// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem += 1500;

// ✅ Task 03
// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// ✅ Task 04
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// ✅ Task 05
// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

// ✅ Task 06
// // Change code below this line
// const pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// ✅ Task 07
// // Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!")
// }
// sayHi()

// ✅ Task 08
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ✅ Task 09
// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ✅ Task 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// ✅ Task 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// };

// ✅ Task 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   // Change code above this line
//   return message;
// }

// ✅ Task 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }

// ✅ Task 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   // Change code above this line
//   return isMatch;
// }

// ✅ Task 15
// function checkAge(age) {
//   let message;
//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// ✅ Task 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered < available) {
//     message = "Order is processed, our manager will contact you."
//   } else {
//     message = "Not enough goods in stock!"
//   }
//   // Change code above this line
//   return message;
// }

// ✅ Task 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ✅ Task 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!"
//   } else {
//     creditsLeft = customerCredits - totalPrice
//     message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`
//   }
//   // Change code above this line
//   return message;
// }

// ✅ Task 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// ✅ Task 20
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) { // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// ✅ Task 21
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (available <= ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }

// ✅ Task 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip" // Change this line
//   return canAccessContent;
// }

// ✅ Task 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// ✅ Task 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// ✅ Task 25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   // Change code above this line
//   return message;
// }

// ✅ Task 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }

// ✅ Task 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line
//  switch (type) { // Change this line
//     case "starter" : "starter"// Change this line
//       price = 0; // Change this line
//       break;
//     case "professional" : type === "professional"// Change this line
//       price = 20; // Change this line
//       break;
//     case "organization" : type === "organization"// Change this line
//       price = 50; // Change this line
//       break;
//   }
//   // Change code above this line
//   return price;
// }

// ✅ Task 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   // Change code above this line
//   return message;
// }

// ✅ Task 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country"
//   }
//   // Change code above this line
//   return message;
// }

// ✅ Task 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   return message;
// }

// ✅ Task 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];
// // Change code above this line

// ✅ Task 32
// function getSubstring(string, length) {
//   const substring = string.slice (string, length); // Change this line
//   return substring;
// }

// ✅ Task 33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (message.length > maxLength) {
//       result = message.slice(0, maxLength) + "...";
//     } else {
//       result = message;
//     }
//   /// Change code above this line
//   return result;
// }

// ✅ Task 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//   return normalizedInput;
// }

// ✅ Task 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// ✅ Task 36
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message= message.toLowerCase();
//   result = message.includes("sale") || message.includes("spam");
//   // Change code above this line
//   return result;
// }

// ✅ ✅ ✅ Module 02

// ✅ ✅ Abstract 02

// ✅ Task 01
// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ✅ Task 02
// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// ✅ Task 03
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log(message);

// ✅ Task 04
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   }
// console.log(message);

// ✅ Task 05
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${number}`);
// }

// ✅ Task 06
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// ✅ Task 07
// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// ✅ Task 08
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// ✅ Task 09
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// ✅ Task 10
// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ✅ Task 11
// const numbers = [];
// numbers.push(1);
// console.log(numbers); // [1]
// numbers.push(2);
// console.log(numbers); // [1, 2]
// numbers.push(3);
// console.log(numbers); // [1, 2, 3]
// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]
// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// ✅ Task 12
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]
// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]
// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]
// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// ✅ Task 13
// function multiply() {
//   let total = 1;
//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// ✅ Task 14
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }
// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// ✅ Task 15
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }
// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// ✅ ✅ Mentor practice 02
// ✅ Task 01
// const min = parseInt(prompt('введіть число'));
// if (min <= 15) {
//   console.log('Перша чверть');
// } else if (min <= 30) {
//   console.log('Друга чверть');
// } else if (min <= 45) {
//   console.log('Третя чверть');
// } else  if (min <= 60){
//   console.log('Четверта чверть');
// } else {
//   console.log('Невірно');
// }

// ✅ Task 02
// const min = parseInt(prompt('введіть число'));
// switch (true) {
//   case (min <= 15):
//     console.log('Перша чверть');
//     break;
//   case (min <= 30):
//     console.log('Друга чверть');
//     break;
//   case (min <= 45):
//     console.log('Третя чверть');
//     break;
//   case (min <= 60):
//     console.log('Четверта чверть');
//     break;
//   default: console.log('Невірно');
//     break;
// }

// ✅ ✅ Homework Module 02

// ✅ Task 01
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// ✅ Task 02
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// ✅ Task 03
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// ✅ Task 04
// // Change code below this line
// const fruits =const  ["apple", "plum", "pear", "orange"];

// 0✅ 5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// // Change code below this line

// ✅ Task 06
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line

// ✅ Task 07
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line

// ✅ Task 08
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line

// ✅ Task 09
// function getExtremeElements(array) {
//   // Change code below this line
//   array = [array[0], array[array.length - 1]];
//   return array;
//   // Change code above this line
// }

// ✅ Task 10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// ✅ Task 11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   words = message.split(" ");
//   totalPrice = words.length * pricePerWord;
//   return totalPrice;
//   // Change code above this line
// }

// ✅ Task 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }

// ✅ Task 13
// function slugify(title) {
//   slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }

// ✅ Task 14
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// ✅ Task 15
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients); // Change this line

// ✅ Task 16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const makeArray = firstArray.concat(secondArray);
//   if (makeArray.length > maxLength) {
//     return makeArray.slice(0, maxLength);
//   }
//   return makeArray;
//   // Change code above this line
// }

// ✅ Task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ✅ Task 18
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }

// ✅ Task 19
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ✅ Task 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i <= order.length - 1; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// ✅ Task 21
// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   console.log();
//   let longestWord = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }

// ✅ Task 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// ✅ Task 23
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// ✅ Task 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }

// ✅ Task 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// ✅ Task 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const item of order) {
//     total += item;
//   }
//   // Change code above this line
//   return total;
// }

// ✅ Task 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// ✅ Task 28
// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ✅ Task 29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let arr = [];
//   for (i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
//   // Change code above this line
// }

// ✅ Task 30
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ✅ Task 31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// ✅ Task 32
// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// ✅ ✅ ✅ Module 03

// ✅ ✅ Abstract 03

// ✅ Task 01
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// ✅ Task 02
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// ✅ Task 03
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'
// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']
// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ✅ Task 04
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");
// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// ✅ Task 05
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// ✅ Task 06
// const name = "Генрі Сибола";
// const age = 25;
// const user = {
//   name,
//   age,
// };
// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// ✅ Task 07
// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };
// console.log(user.name); // 'Генрі Сибола'

// ✅ Task 08
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };
// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// ✅ Task 09
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ✅ Task 10
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ✅ Task 11
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// // Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true
// // Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// ✅ Task 12
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
//   // Якщо це невласна властивість - нічого не робимо
// }

// ✅ Task 13
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// ✅ Task 14
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// ✅ Task 15
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// ✅ Task 16
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods); // [6, 3, 4, 7]
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total); // 20

// ✅ Task 17
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ✅ Task 18
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];
// for (const book of books) {
//   bookNames.push(book.title);
// }
// console.log(bookNames);

// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// ✅ Task 19
