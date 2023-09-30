                                    // Modul 01
// 01
// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'
// console.log(pricePerItem);
// 2000


// 02
// let productName = "Droid";
// let pricePerItem = 2000;
// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem += 1500;


// 03
// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;


// 04
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;


// 05
// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`


// 06
// // Change code below this line
// const pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`


// 07
// // Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!")
// }
// sayHi()


// 08
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// 09
// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };


// 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// };


// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   // Change code above this line
//   return message;
// }


// 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }


// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   // Change code above this line
//   return isMatch;
// }


// 15
// function checkAge(age) {
//   let message;
//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }


// 16
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


// 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// 18
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


// 19
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


// 20
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


// 21
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

// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip" // Change this line
//   return canAccessContent;
// }


// 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }


// 24
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


// 25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   // Change code above this line
//   return message;
// }


// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }


// 27
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


// 28
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


// 29
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


// 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   return message;
// }


// 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];
// // Change code above this line


// 32
// function getSubstring(string, length) {
//   const substring = string.slice (string, length); // Change this line
//   return substring;
// }


// 33
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


// 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }


// 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }


// 36
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message= message.toLowerCase();
//   result = message.includes("sale") || message.includes("spam");
//   // Change code above this line
//   return result;
// }


                                    // Modul 02




                                    // Konspekt Modul 02
// 01
// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// 02
// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }


// 03
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


// 04
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


// 05
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


// 06
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]


// 07
// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"


// 08
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// 09
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false


// 10
// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// 11
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

// 12
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


// 13
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


// 14
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


// 15
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


                                    // Mentor practice
// 01
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


// 02
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



