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
// const temps = [14, -4, 25, 8, 11];
// // В консолі буде масив
// console.log(temps);
// // Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN
// // В консолі буде набір окремих чисел
// console.log(...temps);
// // Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// ✅ Task 20
// const temps = [14, -4, 25, 8, 11];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// ✅ Task 20
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ✅ Task 21
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ✅ Task 22
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// ✅ Task 23
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// ✅ Task 24
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ✅ Task 24
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ✅ Task 25
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined
// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// ✅ Task 26
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };
// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;
// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// ✅ Task 27
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;
// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };
// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;
// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ✅ Task 28
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
// ];
// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// for (const book of books) {
//   const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ✅ Task 29
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// ✅ Task 30
// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red); // "200"
// console.log(colors); // [255, 100]

// ✅ Task 31
// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"

// ✅ ✅ Mentor practice 03
// ✅ Task 01
// const products = [{ name: "apple" }, { name: "orange" }, { name: "tomato" }];
// for (const product of products) {
//   console.log(product);
// }

// ✅ Task 02
// const products = {
//   name: "tomato",
//   qty: 20,
//   price: 10,
// };
// const keysArr = Object.keys(products);
// console.log(keysArr);
// for (const key of keysArr) {
//   console.log(products[key]);
// }

// ✅ Task 03
// const arr = [1, 2, 3, 4, 5];
// // const first = arr[0];
// // const second = arr[1];
// // console.log(second);
// const [first, second, third] = arr;
// console.log(second);

// ✅ Task 04
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   age: 25,
// };
// const { name, skills, age } = user;
// console.log("name", name);
// console.log("skills", skills);
// console.log("age", age);

// ✅ Task 05
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   any: [1, "abc", false],
// };
// const {
//   skills: { html, css, js },
// } = user;
// const {
//   any: [first, second, third],
// } = user;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(html);
// console.log(css);
// console.log(js);

// ✅ Task 06
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({ name, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js - ${js}.`
//   );
// }
// getUserName(user);

// ✅ Task 07
// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mango" }];
// const names = [];
// // // for (const user of users) {
// // //   names.push(user.name);
// // // }
// // for (const { name } of users) {
// //   names.push(name);
// // }
// for (const user of users) {
//   const { name } = user;
//   names.push(name);
// }
// console.log(names);

// ✅ Task 08
// const obj = {
//   a: 1,
//   b: `abc`,
// };
// const obj1 = { ...obj };
// console.log(obj1);
// console.log(obj === obj1);

// ✅ Task 09
// const numbers = [1, 2, 3];
// const [first, ...args] = numbers;
// console.log(args);

// ✅ Task 10
// const obj = {
//   a: 1,
//   b: `abc`,
//   c: false,
// };
// const { a, ...args } = obj;
// console.log(args);

// ✅ Task 11
// const first = { a: 1, b: 2 };
// const second = { a: 3, c: 4 };
// const third = {
//   a: 5,
//   ...first,
//   ...second,
//   c: 6,
// };
// console.log(third);

// ✅ Task 12
// const names = ["Alice", "Kate", "Emma"];
// function foo(first, second, third) {
//   console.log("first", first);
//   console.log("second", second);
//   console.log("third", third);
// }
// foo(...names);

// ✅ Task 13
// const user = {
//   id: 1,
//   username: "harry_potter",
//   profile: {
//     name: "Harry",
//     surname: "Potter",
//     age: 25,
//   },
// };
// const {
//   username,
//   profile: { name, surname },
// } = user;
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// ✅ Task 14
// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };
// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight },
// }) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }
// displayProductInfo(product);

// ✅ Task 15
// function createContact(partialContact) {
//   return {
//     id: Math.floor(Math.random() * 1000),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }
// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// ✅ Task 16
// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }
// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );
// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@mail.com",
//     friendCount: 20,
//   })
// );

// ✅ Task 17
// function calculateHousePerimetr({ sideA, sideB, sideC, sideD }) {
//   const perimetr = sideA + sideB + sideC + sideD;
//   return perimetr;
// }
// const house = {
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// };
// const perimetr = calculateHousePerimetr(house);
// console.log(`Периметр будинку: ${perimetr}`);

// ✅ ✅ Homework 03

// ✅ Task 01
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// ✅ Task 02
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// ✅ Task 03
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// ✅ Task 04
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];
// // Change code above this line

// ✅ Task 05
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// ✅ Task 06
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// // Change code below this line

// ✅ Task 07
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// // Change code below this line

// ✅ Task 08
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// ✅ Task 09
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// ✅ Task 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// ✅ Task 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// ✅ Task 12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// ✅ Task 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// ✅ Task 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }

// ✅ Task 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ✅ Task 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryArr = Object.values(salaries);
//   for (const salary of salaryArr) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// ✅ Task 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ✅ Task 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// ✅ Task 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
//   const valueArr = [];
//   for (const product of products) {
//     if (propName in product) {
//       valueArr.push(product[propName]);
//     }
//   }
//   return valueArr;
//   // Change code above this line
// }

// ✅ Task 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Change code above this line
// }

// ✅ Task 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ✅ Task 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ✅ Task 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ✅ Task 24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ✅ Task 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// ✅ Task 26
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ✅ Task 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// ✅ Task 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ✅ Task 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// ✅ Task 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { category, priority, ...data, completed };
//   // Change code above this line
// }

// ✅ Task 31
// // Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const number of args) {
//     sum += number;
//   }
//   return sum;
//   // Change code above this line
// }

// ✅ Task 32
// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }

// ✅ Task 33
// // Change code below this line
// function findMatches(matchTo, ...matchArr) {
//   const matches = []; // Don't change this line
//   // Change code above this line
//   for (const matchArrElement of matchArr) {
//     for (const matchToElement of matchTo) {
//       if (matchToElement === matchArrElement) matches.push(matchToElement);
//     }
//   }
//   return matches;
// }

// ✅ Task 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// ✅ Task 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// ✅ Task 36
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// ✅ Task 37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// ✅ Task 38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// ✅ Task 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };

// ✅ Task 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };

// ✅ Task 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     for (const potion of this.potions) {
//       return this.potions;
//     }
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions.splice(i, 1, {
//           name: newName,
//           price: this.potions[i].price,
//         });
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// ✅ ✅ ✅ Module 04

// ✅ ✅ Abstract 04

// ✅ Task 01
// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }
// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.
// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// ✅ Task 02
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }
// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Манго", greet);

// ✅ Task 02
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }
// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });
// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ✅ Task 03
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }
// processCall("Манго");

// ✅ Task 04
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }
// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// ✅ Task 05
// function printValue(value) {
//   console.log(value);
// }
// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2
// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ✅ Task 06
// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }
// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ✅ Task 07
// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// ✅ Task 08
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// ✅ Task 09
// const add = (...args) => {
//   console.log(args);
// };
// add(1, 2, 3); // [1, 2, 3]

// ✅ Task 10
// const numbers = [5, 10, 15, 20, 25];
// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ✅ Task 11
// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };
// numbers.forEach(logMessage);

// ✅ Task 12
// // Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
// console.log(filteredNumbers); // [4, 5]

// ✅ Task 13
// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((value) => value > 3);
// console.log(filteredNumbers); // [4, 5]

// ✅ Task 14
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// ✅ Task 15
// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach((element) => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ✅ Task 16
// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']
// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// ✅ Task 17
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const names = students.map((student) => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// ✅ Task 18
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
// students.map((student) => student.courses);
// console.log(students.map((student) => student.courses));
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
// students.flatMap((student) => student.courses);
// console.log(students.flatMap((student) => student.courses));
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// ✅ Task 19
// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []
// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ✅ Task 20
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
// const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

// ✅ Task 21
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі
// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс
// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// ✅ Task 22
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// ✅ Task 23
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1

// ✅ Task 24
// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true
// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// ✅ Task 25
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true
// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false
// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// ✅ Task 26
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];
// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false
// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// ✅ Task 27
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 32

// ✅ Task 28
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore);

// ✅ Task 29
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); // 32
// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };
// console.log(countLikes(tweets)); // 32

// ✅ Task 30
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);
// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// console.log(getTags(tweets));

// ✅ Task 31
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);
// const tags = getTags(tweets);
// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.
// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };
// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) => tags.reduce(getTagStats, {});
// const tagCount = countTags(tags);
// console.log(tagCount);

// ✅ Task 32
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// ✅ Task 33
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// ✅ Task 34
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// ✅ Task 35
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ✅ Task 36
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ✅ Task 37
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// ✅ Task 38
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// ✅ Task 39
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];
// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(students);

// ✅ Task 40
// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// ✅ Task 41
// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];
// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

// ✅ ✅ Mentor practice 04
// ✅ Task 01
// const person = {
//   userName: "Kate",
// };
// const foo = (key, value, obj) => {
//   const newObj = { ...obj };
//   newObj[key] = value;
//   return newObj;
// };
// const result = foo("age", 25, person);
// console.log("result", result);
// console.log("person", person);

// ✅ Task 02
// function foo(a) {
//   const random = Math.random();
//   return a * random;
// }
// const res = foo(5);
// console.log(res);

// ✅ Task 03
// function foo(a, random) {
//   return a * random;
// }
// const random = Math.random();
// const res = foo(5, random);
// console.log(res);

// ✅ Task 04
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];
// const names = users.map((user) => foo(user));
// function foo(user) {
//   return user.name;
// }
// console.log(names);

// ✅ Task 05
// const names = users.map((user) => {
//   return {
//     color: "green",
//     ...user,
//   };
// });
// console.log(names);

// ✅ Task 06
// const res = users.flatMap(({ skills }) => skills);
// console.log(res);

// ✅ Task 07
// const arr = [1, 2, 3, [4, [5, [85]]]];
// const res = arr.flat(2);
// console.log(res);

// ✅ Task 08
// const result = users.filter(({ age }) => age > 30);
// console.log(result);

// ✅ Task 09
// const skills = users.flatMap(({ skills }) => skills);
// const uniqSkill = skills.filter((skill, index, arr) => {
//   return arr.indexOf(skill) === index;
// });
// console.log(skills);
// console.log(uniqSkill);

// ✅ Task 10
// const result = users.find(({ skills }) => skills.includes("JavaScript"));
// console.log(result);

// ✅ Task 11
// const idx = users.findIndex(({ skills }) => skills.includes("JavaScript"));
// console.log(idx);

// ✅ Task 12
// const res = users.some(({ skills }) => skills.includes("JavaScript"));
// console.log(res);

// ✅ Task 13
// const res = users.every(({ age }) => age > 20 && age <= 40);
// console.log(res);

// ✅ Task 14
// const sort = users.sort((a, b) => b.age - a.age);
// console.log(sort);

// ✅ Task 15
// const res = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(res);

// ✅ Task 16
// const res = users.reduce((acc, user, index, arr) => acc + user.age, 0);
// console.log(res);

// ✅ Task 17
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);
// const uniqTags = tags.reduce((acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// }, {});
// console.log(uniqTags);

// ✅ Task 18
// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [70, 80, 75] },
//   { name: "Bob", grades: [95, 92, 88] },
//   { name: "Emily", grades: [85, 88, 90] },
//   { name: "David", grades: [90, 95, 92] },
// ];
// function getAverage(arr) {
//   const result = arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, item) => acc + item, 0);
//     const obj = {
//       name,
//       average: Math.floor(total / grades.length),
//     };
//     return obj;
//   });
//   return result;
// }
// console.log(getAverage(students));

// ✅ Task 19
// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];
// function getAdult(arr) {
//   const res = arr.filter((student) => student.age > 20);
//   return res;
// }
// console.log(getAdult(students));

// ✅ Task 20
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];
// function getBook(arr, title) {
//   const book = arr.find((item) => item.title === title);
//   console.log(book);
//   return book || "Not find";
// }
// console.log(getBook(books, "JavaScript: The Good Parts"));

// ✅ Task 21
// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];
// function getTotal(arr) {
//   const total = arr.reduce((acc, { price, quantity }) => {
//     acc += price * quantity;
//     return acc;
//   }, 0);
//   return total;
// }
// console.log(getTotal(products));

// ✅ Task 22
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];
// function sortDesc(arr) {
//   // const res = [...arr].sort((a, b) => b.year - a.year);
//   // return res;
//   return [...arr].sort((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));

// ✅ Task 23
// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];
// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));

// ✅ Task 24
// const str = "absdabsrgbadgtdswwbetflg";
// const result = str.split("").reduce((acc, item) => {
//   if (!acc.hasOwnProperty(item)) {
//     acc[item] = 0;
//   }
//   acc[item] += 1;
//   return acc;
// }, {});
// console.log(result);

// ✅ ✅ Homework 04
// ✅ Task 01
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;

// ✅ Task 02
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// ✅ Task 03
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// ✅ Task 04
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ✅ Task 05
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach((number) => {
//     totalPrice += number;
//   });
//   // Change code above this line
//   return totalPrice;
// }

// ✅ Task 06
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// ✅ Task 07
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach((item) => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }

// ✅ Task 08
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// ✅ Task 09
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// ✅ Task 10
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// // Change code above this line

// ✅ Task 11
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// };

// ✅ Task 12
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// };

// ✅ Task 13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }

// ✅ Task 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// ✅ Task 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const titles = books.map((book) => book.title);

// ✅ Task 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap((book) => book.genres);

// ✅ Task 17
// // Change code below this line
// const getUserNames = (users) => {
//   const userNames = [];
//   users.map(({ name }) => userNames.push(name));
//   return userNames;
// };
// // Change code above this line

// ✅ Task 18
// // Change code below this line
// const getUserEmails = (users) => {
//   const userEmails = [];
//   users.map(({ email }) => userEmails.push(email));
//   return userEmails;
// };
// // Change code above this line

// ✅ Task 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter((item) => item % 2 === 0);
// const oddNumbers = numbers.filter((item) => item % 2 !== 0);

// ✅ Task 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (gener, index, array) => array.indexOf(gener) === index
// );

// ✅ Task 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// ✅ Task 22
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const result = users.filter((user) => user.eyeColor === color);
//   return result;
// };
// // Change code above this line

// ✅ Task 23
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const result = users.filter(
//     (user) => user.age >= minAge && user.age <= maxAge
//   );
//   return result;
// };
// // Change code above this line

// ✅ Task 24
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   const result = users.filter(({ friends }) => friends.includes(friendName));
//   return result;
// };
// // Change code above this line

// ✅ Task 25
// // Change code below this line
// const getFriends = (users) => {
//   const result = users
//     .flatMap(({ friends }) => friends)
//     .filter((item, index, arr) => arr.indexOf(item) === index);
//   return result;
// };
// // Change code above this line

// ✅ Task 26
// // Change code below this line
// const getActiveUsers = (users) => {
//   const result = users.filter(({ isActive }) => isActive === true);
//   return result;
// };
// // Change code above this line

// ✅ Task 27
// // Change code below this line
// const getInactiveUsers = (users) => {
//   const result = users.filter(({ isActive }) => isActive === false);
//   return result;
// };
// // Change code above this line

// ✅ Task 28
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line
// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// ✅ Task 29
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   const result = users.find((user) => user.email === email);
//   return result;
// };
// // Change code above this line

// ✅ Task 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line
// const eachElementInFirstIsEven = firstArray.every((item) => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((item) => item % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every((item) => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((item) => item % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every((item) => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((item) => item % 2 !== 0);

// ✅ Task 31
// // Change code below this line
// const isEveryUserActive = (users) => {
//   const result = users.every(({ isActive }) => isActive === true);
//   return result;
// };
// // Change code above this line

// ✅ Task 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line
// const anyElementInFirstIsEven = firstArray.some((item) => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((item) => item % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some((item) => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((item) => item % 2 !== 0);
// const anyElementInThirdIsEven = thirdArray.some((item) => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((item) => item % 2 !== 0);

// ✅ Task 33
// // Change code below this line
// const isAnyUserActive = (users) => {
//   const result = users.some(({ isActive }) => isActive === true);
//   return result;
// };
// // Change code above this line

// ✅ Task 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// const totalPlayTime = playtimes.reduce((startValue, number) => {
//   return startValue + number;
// }, 0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ✅ Task 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// ✅ Task 36
// // Change code below this line
// const calculateTotalBalance = (users) => {
//   const result = users.reduce((total, { balance }) => {
//     return total + balance;
//   }, 0);
//   return result;
// };
// // Change code above this line

// ✅ Task 37
// // Change code below this line
// const getTotalFriendCount = (users) => {
//   const result = users.reduce((total, { friends }) => {
//     return total + friends.length;
//   }, 0);
//   return result;
// };
// // Change code above this line

// ✅ Task 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// ✅ Task 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ✅ Task 40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ✅ Task 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// ✅ Task 42
// // Change code below this line
// const sortByAscendingBalance = (users) => {
//   return [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance
//   );
// };
// // Change code above this line

// ✅ Task 43
// // Change code below this line
// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// };
// // Change code above this line

// ✅ Task 44
// // Change code below this line
// const sortByName = (users) => {
//   return [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
//   );
// };
// // Change code above this line

// ✅ Task 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// ✅ Task 46
// // Change code below this line
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map(({ name }) => name);
// };
// // Change code above this line

// ✅ Task 47
// // Change code below this line
// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap(({ friends }) => friends)
//     .filter((item, index, arr) => arr.indexOf(item) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// // Change code above this line

// ✅ Task 48
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, { balance }) => {
//       return total + balance;
//     }, 0);
// };
// // Change code above this line

// ✅ ✅ ✅ Module 05

// ✅ ✅ Abstract 05

// ✅ Task 01
// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// ✅ Task 02
// function foo() {
//   console.log(this);
// }
// foo();

// ✅ Task 03
// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };
// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// ✅ Task 04
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window
// const user = {
//   username: "Mango",
// };
// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;
// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// ✅ Task 05
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// ✅ Task 06
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis(); // this in showThis: window
// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window

// ✅ Task 07
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };
//     foo();
//     console.log("this in showThis: ", this);
//   },
// };
// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// ✅ Task 08
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };
// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// ✅ Task 09
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };
// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// ✅ Task 10
// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }
// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."
// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// ✅ Task 11
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// ✅ Task 12
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;
// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// console.log(getWage(baseSalary, overtime, rate));

// ✅ Task 13
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());

// ✅ Task 14
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'
// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// ✅ Task 15
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// ✅ Task 16
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key); // barks
// }

// ✅ Task 17
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // ['barks']

// ✅ Task 18
// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// ✅ Task 19
// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }
// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// ✅ Task 20
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }
//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// ✅ Task 21
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// ✅ Task 22
// class User {
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   // Геттер email
//   get email() {
//     return this.#email;
//   }
//   // Сеттер email
//   set email(newEmail) {
//     if (newEmail === "") {
//       console.error("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }
//     this.#email = newEmail;
//   }
// }
// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// ✅ Task 23
// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };
//   #email;
//   #role;
//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }
// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });
// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// ✅ Task 24
// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #email;
//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }
// const mango = new User({ email: "mango@mail.com" });
// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// ✅ Task 25
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// ✅ Task 26
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// ✅ Task 27
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
//   addPost(post) {
//     this.posts.push(post);
//   }
// }
// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

// ✅ ✅ Homework 05

// ✅ Task 01
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// ✅ Task 02
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ✅ Task 03
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };

// ✅ Task 04
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line
// const child = Object.create(parent);
// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// ✅ Task 05
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// // Change code above this line

// ✅ Task 06
// class Car {}

// ✅ Task 07
// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// ✅ Task 08
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// ✅ Task 09
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

// ✅ Task 10
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemName) {
//     const itemIndex = this.items.indexOf(itemName);
//     this.items.splice(itemIndex, 1);
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ✅ Task 11
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padBoth(str) {
//     this.value += str;
//     this.value = str + this.value;
//   }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ✅ Task 12
// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// ✅ Task 13
// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ✅ Task 14
// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ✅ Task 15
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// ✅ Task 16
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// ✅ Task 17
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ✅ Task 18
// class User {
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// ✅ Task 19
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Change code above this line
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ✅ Task 20
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails = [];
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// ✅ ✅ ✅ Module 06

// ✅ ✅ Abstract 06

// ✅ Task 01
// console.log(document);
// const body = document.body;
// console.log(body);
// const list = document.querySelector(".list");
// console.log(list);
// const firstListItem = list.firstElementChild;
// console.log(firstListItem);
// const lastListItem = list.lastElementChild;
// console.log(lastListItem);
// const listItems = list.children;
// console.log(listItems);

// ✅ Task 02
// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);
// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);
// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);
// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);
// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// ✅ Task 03
// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop
// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// ✅ Task 04
// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text
// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to Bahamas!";

// ✅ Task 05
// const link = document.querySelector(".link");
// console.log(link.classList);
// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);
// link.classList.add("special");
// console.log(link.classList);
// link.classList.remove("is-active");
// console.log(link.classList);
// link.classList.toggle("is-active");
// console.log(link.classList);
// link.classList.replace("special", "regular");
// console.log(link.classList);

// ✅ Task 06
// const button = document.querySelector(".btn");
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style); // inline styles object

// ✅ Task 07
// const image = document.querySelector(".image");
// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
// console.log(image.hasAttribute("src")); // true
// console.log(image.getAttribute("alt")); // "Rocks and waterfall"
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature

// ✅ Task 08
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// ✅ Task 09
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>
// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>
// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// ✅ Task 10
// const list = document.querySelector(".usernames");
// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);
// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);
// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);
// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet";
// list.after(text);

// ✅ Task 11
// const text = document.querySelector(".text");
// text.remove();

// ✅ Task 12
// const article = document.querySelector(".article");
// console.log(article.innerHTML);
// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);
// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);
// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// ✅ Task 13
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// ✅ Task 14
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// // Check the console, you'll see a single string with HTML tags
// console.log(markup);
// // Adding all the markup in one operation
// list.innerHTML = markup;

// ✅ Task 15
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;
// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// ✅ Task 16
// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// ✅ Task 17
// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// ✅ Task 18
// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);

// ✅ Task 19
// const singleBtn = document.querySelector("#single");
// const handleClick = () => {
//   console.log("click event listener callback");
// };
// singleBtn.addEventListener("click", handleClick);
// // ===============================================
// const multiBtn = document.querySelector("#multiple");
// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };
// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// ✅ Task 20
// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");
// const handleClick = () => {
//   console.log("click event listener callback");
// };
// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });
// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// ✅ Task 21
// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };
// const btn = document.querySelector(".js-btn");
// // ✅ Працює
// mango.showUsername();
// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener("click", mango.showUsername); // не працює
// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener("click", mango.showUsername.bind(mango));

// ✅ Task 22
// const handleClick = (event) => {
//   console.log(event);
// };
// button.addEventListener("click", handleClick);

// ✅ Task 23
// const button = document.querySelector(".btn");
// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);

// ✅ Task 24
// const form = document.querySelector(".register-form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// ✅ Task 25
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("Keyup: ", event);
// });

// ✅ Task 26
// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// ✅ Task 27
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
// console.log(clearLogBtn);
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//   logList.insertAdjacentHTML("afterbegin", markup);
//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }
// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ✅ Task 28
// document.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

// ✅ Task 29
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }

// ✅ Task 30
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");
// select.addEventListener("change", setOutput);
// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// ✅ Task 31
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

// ✅ Task 32
// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');
// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });
// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });
// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });
// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
