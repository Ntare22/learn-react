// let divs = document.getElementsByClassName('div');
// // console.log(divs);

// for (let i = 0; i < divs.length; i++){
//   divs[i].addEventListener('click', function() {
//     console.log('you clicked div #' + parseInt(i + 1));
//   })
// }

// const cupcake = document.querySelector('.cupcake');
// const container = document.querySelector('.orders')

// const cupcakes = [
//   { id: 1, flavor: 'Strawberry' },
//   { id: 2, flavor: 'Apple' },
//   { id: 3, flavor: 'Banana' }
// ]

// let randomCupcake;
// let orderNumber = 0;
// const baseAmount = 5;
// let finalAmount;
// const dicountID = 2;
// const dicountAmount = 3;
// let message

// cupcake.addEventListener("click", function () {
//   // Select a random cupcake
//   randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

//   // Increment the order number, we get a different order with each cupcake.
//   orderNumber += 1;

//   // Depending on the "dicountID" variable, this cupcake is on sale or not.
//   finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount - dicountAmount) : baseAmount;

//   // Create the message
//   message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is ' + orderNumber + '</div>'
//   container.insertAdjacentHTML('beforeend', message)

// });


// function returnEmployee(){
//   const name = "Francis";
//   const age = 21;
//   const position = "Manager"

//   console.log(`His name is ${name}, he is ${age} years old and works as a ${position}`)

// }

// returnEmployee();

// const names = ["James", "Ron", "Ace"]

// console.log(`The number is ${ 5 + 1 }`)

// const artists = ['Clapton', 'U2', 'Bruno Mars', 'Kendrick Lamar'];

// // for (let i = 0; i < artists.length; i++) {
// //   console.log(artists[i]);
// // }

// artists.forEach((artist) => document.body.insertAdjacentHTML("afterbegin", `<div>Hi, my name is ${artist}</div>`));

// var purchases = [
//   { quantity: 2, amount: 100 },
//   { quantity: 5, amount: 100 },
//   { quantity: 10, amount: 100 }
// ]

// var total = 0;

// // for (var i = 0; i < purchases.length; i++) {
// //   total += purchases[i].quantity * purchases[i].amount
// // }

// purchases.forEach((item) => {
//   total += item.quantity * item.amount;
// })
// console.log(total)


// const products = [
//   { name: 'Iphone', price: 200 },
//   { name: 'Motorola', price: 70 },
//   { name: 'Samsung', price: 150 },
//   { name: 'Sony', price: 98 },
//   { name: 'Windows phone', price: 10 }
// ];

// let template = '';

// products.forEach((product) => {
//   const discount = () => {
//     if(product.price < 100) {
//       return `<span>On sale !!</span>`
//     }
//   }
//     template += `<div class="product">
//     <h1>${product.name}</h1>
//     <strong>$ ${product.price} </strong>
//     ${discount()}
//   </div>`

// })

// document.body.insertAdjacentHTML("afterbegin", template);

// const numbers = [1,2,3,4,5];

// var otherArray = [];

// for(var i = 0; i < numbers.length; i++){
//   otherArray.push(numbers[i]*10)
// }
// const otherArray = numbers.map((number) => {
//   return number * 10
// })


// console.log(otherArray);

// const users = [
//   { user: 'Martin Jones', age: 32, eyes: 'brown' },
//   { user: 'Jane Doe', age: 20, eyes: 'blue' },
//   { user: 'Brian Wrecker', age: 40, eyes: 'brown' }
// ]

// const listOfUsers = users.map((user) => {
//   return user.user
// })

// listOfUsers.forEach((name) => {
//   const select = document.querySelector('select');

//   select.insertAdjacentHTML("afterbegin", `<option value="${name}">${name}</option>`)
// })

// const paintings = [
//   { name: 'Mona lisa', width: 200, height: 200 },
//   { name: 'The scream', width: 400, height: 600 },
//   { name: 'The last supper', width: 600, height: 700 }
// ]

// const message = paintings.map((painting) => {
//   return `The ${painting.name} is ${painting.width} X ${painting.height}`;
// })

// console.log(message);

// const cars = [
//   { name: 'Ford', price: 200 },
//   { name: 'Nissan', price: 400 },
//   { name: 'Nissan', price: 600 }
// ]

// let currency = 'RWF'
// let rate = 920

// const carPrices = cars.map((car) => {
//   return `${car.name} is ${car.price * rate} ${currency}`
// })

// console.log(carPrices)