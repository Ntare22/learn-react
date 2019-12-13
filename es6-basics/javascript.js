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

// const products = [
//   { name: 'ipad', category: 'devices', number: 20, price: 200 },
//   { name: 'Sony 3D', category: 'TV', number: 0, price: 400 },
//   { name: 'E256', category: 'Blender', number: 3, price: 50 },
//   { name: 'Super Vision', category: 'TV', number: 7, price: 500 },
//   { name: 'Iphone 7', category: 'phones', number: 40, price: 2 },
// ];

// const result = products.filter((product) => {
//   return product.category === 'TV' && product.number > 0
// })

// console.log(result);

// const result = products.filter((product) => {
//   return product.category === 'TV'
// })

// console.log(result);

// const brands = [
//   { name: 'Apple', id: 1 },
//   { name: 'HP', id: 2 },
//   { name: 'Samsung', id: 3 },
//   { name: 'Samsung', id: 4 }
// ];

// const result = brands.find((brand) => {
//   return brand.name === 'Samsung'
// })

// console.log(result)

// const cars = [
//   { brand: "Ford", price: 500, available: 2, type: "Sport car" },
//   { brand: "Nissan", price: 200, available: 5, type: "Wagon" },
//   { brand: "Chevy", price: 300, available: 4, type: "Sport car" },
//   { brand: "Porshe", price: 100, available: 1, type: "Urban" },
// ];

// const getResults = (price, type) => {
//   return cars.find((car) => {
//     return car.price < price && car.available > 0 && car.type === type;
//   })
// }

// document.querySelector('.search').addEventListener('click', () => {
//   let price = parseInt(document.querySelector('#price').value);
//   let type = document.querySelector('#type').value;

//   let results = getResults(price, type);
//   if (results) {
//     console.log(`Found ${results.brand} for $${results.price}`)
//   } else {
//     console.log(`No cars available filling those criteria`)
//   }
// })

// const students = [
//   { name: "Francis", grade: 5 }, 
//   { name: "Martin", grade: 5 },
//   { name: "Martha", grade: 5 }
// ]

// let passedTheCourse = students.some((student) => {
//   return student.grade >= 6;
// })

// // let passedTheCourse = false;

// // for (let i = 0; i < students.length; i++) {
// //   let student = students[i];

// //   if(student.grade < 6) {
// //     passedTheCourse = true;
// //     break;
// //   } else {
// //     passedTheCourse = false;
// //   }
// // }

// console.log(passedTheCourse)

// const previous = 200;

// const current = [
//   { expense: 'Guitar', amount: 200 },
//   { expense: 'Mic', amount: 100 },
//   { expense: 'Starp', amount: 100 }
// ]

// const results = current.reduce((sum, expense) => {
//   return sum + expense.amount;
// }, previous);

// console.log(results);


// const users = [
//   { name: "Francis", lastname: 'Norton', age: 25 },
//   { name: "Martha", lastname: 'Norton', age: 55 },
//   { name: "Rob", lastname: 'Norton', age: 63 }
// ]

// const names = users.reduce((start, user) => {
//   start.push(user.name);
//   return start;
// }, [])

// console.log(names)

// const names = ['Jane', 'Thomas', 'James'];

// for (let name of names) {
//   console.log(name)
// }

// const numbers = [10, 20, 30, 40, 50]

// let total = 0;

// for (let number in numbers) {
//   total += numbers[number];
// }

// console.log(total);

// const cars = {
//   brands: ['Ford', 'Audi', 'BMW'],
//   category: 'Sport Car',
//   message: function() {
//     return this.brands.map((brand) => {
//       console.log(`${brand} is a ${this.category}`)
//     })
//   }
// }

// cars.message();

// const request = (url, data) => {
//   $.ajax({method:'post', url, data})
// }

// request('http:// request.com', {car:ford})

// const createCharacter = (name, powers) => {
//   return {
//     name,
//     powers,
//     getFriends() {
//       return 'Luis lane'
//     },
//     getEnemies() {
//       return 'Skeletor'
//     }
//   }
// }

// const characterObj = createCharacter('Superman', 'Fly');

// console.log(characterObj.getEnemies());

// function randomBrand() {
//   const brands = ['ford', 'nissan', 'bmw'];
//   return brands[Math.floor(Math.random() * brands.length)];
// }

// function cars(brand = randomBrand()) {
//   console.log(`My brand is ${brand}`);
// }
// cars()

// function hey() {
//   console.log('hey')
// }

// function args(...args) {
//   console.log(args[2])
// }

// args('Val 1', 'Val 2', hey());

// const brands = ["Ford", "Nissan"];
// const otherBrand = ["Audi", "BMW"]

// // const newArray = brands.concat(otherBrand);

// const newArray = [...brands, ...otherBrand];

// console.log(newArray)

// function Car() {

// }

// var car = new Car();
// Car.prototype.status = 'New';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function () {
//   console.log('available')
// }

// console.log(car.__proto__)


// class Car {
//   constructor({status, wheels, avail}){
//     this.status = status;
//     this.wheels = wheels;
//     this.avail = avail;
//   }
// }

// const car = new Car({
//   status:'New',
//   wheels: 4,
//   avail: () => {
//     console.log('avail')
//   }
// })


// class Car {
//   constructor() {
//     this.condition = 'New';
//     this.wheels = '4';
//     this.avail = () => {
//       console.log('avail')
//     }
//   }

//   otherFunction(){
//     console.log('Hey')
//   }
// }

// class Ford extends Car {
//   constructor() {
//     super();
//   }
// }

// const car = new Car();
// const ford = new Ford();

// ford.color = 'red'
// console.log(ford);

// const user = {
//   name: 'Francis',
//   lastname: 'Jones',
//   age: 25
// };

// const message = ({name, lastname, age}, salute) => {
//   console.log(`my name is ${name} ${lastname}, age ${age}, ${salute}`)
// }

// message(user, 'hey')

// const cars = [
//   'Camaro',
//   'Nova',
//   'A4'
// ];

// const [camaro, nova, a4] = cars;

// console.log(camaro)



// const users = [
//   { name: "Francis", lastname: 'Norton', age: 25 },
//   { name: "Martha", lastname: 'Jones', age: 55 },
//   { name: "Rob", lastname: 'James', age: 63 }
// ]

// const [{lastname}] = users;

// console.log(lastname)


// const users = {
//   names:['Francis', 'Martha', 'Ray']
// }

// const {names:[name1, name2, name3]} = users;

// console.log(name3)

// function createCar({brand, model}) {

// }

// const car = {
//   brand: 'ford',
//   model: 'focus',
//   color: 'red',
//   year: '2015', 
//   type: 'fast'
// }

// createCar('Ford', 'Focus')


// Unresolved, Pending
// Resolved, Fulfilled
// Rejected

// let promise = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     rejected();
//   }, 5000);

// })

// promise
//   .then(() => console.log('finished'))
//   .then(() => console.log('finished 2'))
//   .catch(() => console.log('damn'))


// const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({title:'some title'}),
//   mode: 'cors',
//   redirect:xxx,
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('fucked up', error))

// console.log('foo'.repeat(4*10))

// console.log(Number.isSafeInteger(100));
// console.log(Number.isInteger(0.100));
// console.log(Math.trunc(1.10));