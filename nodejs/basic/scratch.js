//Data Types
    //=>Data types are related to storing and manipulating different kinds of data. 
    //primitive data type means we can edit the vzlues to value int string and boolean hey are immutable and passed by value.
    //non primitve means wecan overwritr 


//if
//if consition is used to specify a block of code to be executed, if a specified condition is true
// let age = 18;

// if (age < 17) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }


//else
//if consition is used to specify a block of code to be executed, if the specified condition is false
// let age = 18;

// if (age < 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

//else if 
//Use else if to specify a new condition to test, if the first condition is false

// let age = 18;

// if (age > 19) {
//   console.log("You are an adult.");
// } else if (age > 13) {
//   console.log("You are a teenager.");
// } else {
//   console.log("You are a child.");
// }

//switch
//Use switch to specify many alternative blocks of code to be executed
// let day = 3; 

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//loop 
//loop means continusly iterated until the specified condition is true 
//for loop through a block of code a number of times
// let a= 5;
// for (let i = 1; i < a; i++) {
//     console.log(i);
//   } 

//for in 
//for...in loop helps you look at each part of the object and print its name and value.
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
//   };
  
//   for (let key in person) {
//     console.log(key + ": " + person[key]);
//   }

//for/of

// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
//   console.log(number);
// }

//while 
//The while loop loops through a block of code as long as a specified condition is true.
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//do...while.
// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
// console.log(person.name); 
//console.log(person.age);  
//console.log(person.city); 
//modify
// person.age = 31;
// console.log(person.age);
//add
// person.job = "Engineer";
// console.log(person.job); 
//delete
// person.city = "New York"
// delete person.city;
// console.log(person.city);

//prototype
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Person.prototype.nationality = "English";
//   Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
//   const person1 = new Person("John", 30);
//   person1.greet(); 
//   console.log(person1.nationality);

// const person ={
//     name : 'kiruthiga',
//     age : 26,
//     work : 'intern'
// };

// for(const key in person){
//     console.log(key + ' ', ' '+ person[key])
// }

// const colors = ['red', 'blue', 'green']

// for(const key in colors){
//     console.log(key + ' ',' '+colors[key])
// }

// for of 

// You have an array of numbers: [10, 20, 30, 40, 50, 60]. Use the .splice() method to do the following:

// Remove the elements 30 and 40.
// Insert the numbers 35 and 45 at the position where 30 was.

// const numbers = [10, 20, 30, 40, 50, 60]
// numbers.splice(2,2, 35,45)
// console.log(numbers)

// const num = [5,10,15,20,25,30,35,40]
// const num1 = num.slice()
// console.log('num1', num1)

// const numSet1 = num.slice(0,4) // it returns new array from start and end index and it elcludes the end index
// console.log('numSet1',numSet1)

// const numSet2 = num.slice(4,7)
// console.log("numSet2", numSet2)// return data values of index from 4 to 6 

// const num2 = num.slice(2)
// console.log('num2',num2)// since there is no second arguements so it copies the rest of the index from 2

// const num3 = num.slice(-5)
// console.log('num3', num3)//negative values indicates the index sequences and it returns from index 20

// const num4 = num.slice(-5, -1)
// console.log('num4', num4)// last elements not included which means 35

//map methods executes the call back from each element of an array and it returns new element and
//it is used to convert an array value into another element

//arrow function
// let priceUSD = [20,25,30]
// let priceINR = priceUSD.map((x=> x*83))
// console.log(priceINR)
// let priceUSD = [20,25,30]

// let priceINR = priceUSD.map(convert)

// function convert(value){
 
//     return value*83
// }
// console.log(priceINR)

//array of object
// const input = [
//     {name : 'kiruthiga',age : 26},
//     {name : 'rajendren',age : 63},
//     {name : 'indhirani',age : 50},
//     {name : 'sekar',age : 24}
// ];

// const ages = input.map(x => x.age)
// console.log(ages)

//const cost = [24,50,60, 123,500,600,7]
// const leeThan = cost.filter(x=>x<100)
// console.log(leeThan)
// const cartTotal = cost.reduce((total,ele)=>total+ele)
// console.log(cartTotal)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName())
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//   const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather)
// console.log(myFather.firstName); 
// console.log(myFather.lastName);  

// for(let i = 0; i < 5 ; i++){

//     console.log(i);

// }

// let i= 5
// while(i >= 0 ){
//     i--
//         console.log(i
//  

 //pop - remove the last element and it returns the new element 
 


 //splice whch is used to add / remove the element from an arrya at specific position

 //slice copies the given array and it doent alter the oroginal array it wont take last element 

//  const num = [5,10,15,20,25,30,35,40]
//  var num1 = num.slice();
//  console.log(num1)

//  var num2 = num.slice(2, 6)
//  console.log(num2)

//  var num3 = num.slice(-5, -1)
//  console.log(num3)





//
// for(let i =0; i !== 10;i++){
//     console.log(i)
// }

// for(const i = 0; i<=5; i++){
//     if(i % 2 ==0)
//     {
//         console.log(i)
//     }
// }



// const mybio = {
//     name : "kiruthiga",
//     native : "kerala",
//     greet : function(){
//         console.log(" hello am " + this.name + "my native is " + this.native)
//     }
// }
// mybio.greet()



// const mybio1 = {
//     name : "kiruthiga",
//     native : "kerala",
//     greet : function(){
//         console.log(" hello am " + " " +this.name + "my native is " + this.native)
//     }
// }

// const mybio2 ={
//     name : "Anu",
//     native : "tamilnadu"
// };

// mybio1.greet.call(mybio2)


// const mybio3 = {
//     name : "Anu kiki",
//     native : "kerala",
//     greet : function(){
//         console.log("vanakkam"+ " " +this.name+ " "+this.native)
//     }
// };

// const mybio4 = {
//     name: "Tajaswi",
//     native : "Punnamda, Kerala"
// };

// const mybio45 = mybio3.greet.bind(mybio4) 
// mybio45()

// const mybio5 = {
//     name: 'John',
//     native: "America",
//     introduce: function(age, profession) {
//         console.log(`My name is ${this.name}, I am ${age} years old and work as a ${profession}.`);
//     }
// };

// const mybio6 = {
//     name: "Aarthi"
// };
// mybio5.introduce.apply(mybio6, [26, 'Doctor']);



//const fruits = ["apple","orange", "pineapple is a fruit","blueberry"]
//console.log(fruits[2].split(' ').toUpperCase())
//console.log(fruits[2])

//const modify = fruits.map(modified => modified.toUpperCase())
//console.log(modify)

//const IndexTwo = fruits[2].split(' ').map(change => change.toUpperCase())
//console.log(IndexTwo)

//const changed = modify[2].split(' ')
//console.log(changed)

// console.log("script started")

// setTimeout(function(){
//     console.log("script task completed")
// }, 2000);

// console.log("end of script")

// const add = (a,b)=>(a+b)
// console.log(add(2,4))

// const adding =(a,b)=>{
// let sum = a+b
// return sum
    

// }
//    console.log(adding(2,8))   


// function task1(a){
//     console.log("5")
//     a()
// }
// function task2(a){
//     console.log("2")
//     a()
// }
// function task3(){
//     setTimeout(()=>{
//         console.log("9")
//     })
// }

// function task4(){
//     console.log("8")
// }
// task2(task4)
// task1(task3)

// let reachA = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve, 3000, "vidya has reached")
//     }
//     else{
//         reject(new Error("vidya has not reached"))
//     }

// })
// async function PromiseFun(){
// try{
//     console.log("Hi reetu")
//     const result = await reachA
//     console.log(result)
// }
// catch(err){
//     console.error(err.message)
// }
// finally{
//     console.log("its always execute")
// }

// }
// PromiseFun();

// let numbers = [1,2,3,4,5]
// numbers.forEach(num => {
//     console.log(num)
// })

// let doubled = numbers.map(number=>number*2)
// console.log(doubled)

// let eventNumber = numbers.filter(nums => nums % 2 == 0)
// console.log(eventNumber)


// let reachA = new Promise((resolve,reject)=>{
//  const reached = true
//  if(reached){
//     setTimeout(resolve,3000, "Anu has reached")
//  }
//  else{
//     reject("Anu has not reached")
//  }
// })

// let reachB = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(resolve,2000, "krithika has reached")
//     }
//     else{
//         reject("krithika has not reached")
//     }
// })

// let reachC = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve,1000, "tejaswi has reached")
//     }
//     else{
//         reject("tejaswi has not reached")
//     }
// })
// Promise.race([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// function demo(num1,num2, callback){
//     let result = num1+num2
//     callback(result)

// }
// function demo1(result){
//     console.log("adding numbers are", result)
// }

// demo( 6,6,demo1 )

// let reachA = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(resolve,3000, "anu has reached")
//     }
//     else{
//         reject("Anu has not reached")
//     }
// })

// let reachB = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(resolve,2000, "Kritika has reached")
//     }
//     else{
//         reject("Krithika has not reached")
//     }
// })

// let reachC = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve,1000, "Tejaswi has reached")
//     }
//     else{
//         reject("Tejaswi has not reached")
//     }
// })
// Promise.race([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((err)=>console.log(err))

// let numbers = [1,2,3,4,5]
// numbers.forEach((num)=>{
//     console.log(num)
// })

// let doubled = numbers.map((nums=>nums*2))
// console.log(doubled)

// let eventNumber = numbers.filter((nu => nu % 2==0))
// console.log(eventNumber)

// function greet(name) {
//     console.log("Hello, " + name);
// }
// function processUserInput(callback) {
//     const name = "Kiruthika"; 
//     callback(name); 
// }

//processUserInput(greet);

// function displayResult(result){
//     console.log("the result is ", result)
// }
// function sumofNumbers(num1, num2, callback){
//     const sum = num1 + num2
//     callback(sum)
// }

// sumofNumbers(3,5,displayResult)

// function displayResult(result){
//     console.log("The adding result is", result)
// }
// function sumofNumbers(num1,num2, operations){
//     const add = num1 + num2
//     operations(add)
// }
// sumofNumbers(2,3,displayResult)

// function displayName(name){
//     console.log(`my self, ${name}`)
// }
// function myName(callback){
//     const nameIs = 'krithika'
//     callback(nameIs)
// }
// myName(displayName)

// function adding(result,num2){

//     console.log("number added", result)
//     console.log("num2",num2)
// }

// function add(num1,num2, operations){

//     const addition = num1 + num2
//     console.log("added values",addition)
//     operations(addition,num2)
//     console.log("num1", num1)

// }
// add(2,3, adding)


// function sum(a,b){
    
//     console.log("sumOfvalues", b)
//     console.log("type of a",typeof(a))
//     console.log("type of b", typeof(b))
    
//     const c = a+b
//     console.log("type of c",typeof(c))
//     return c

// }
// console.log("added",sum(2,"hello"))

// function sum(a,b){
//     //console.log("added value is:", 2+4)
//     console.log("type of a :",typeof(a))
//     console.log("type of b", typeof(b))
   
//     const c = a+b
//     console.log("type of c", typeof(c))
//     return a+b   

// }
// //console.log("added:",sum(2,3))
// console.log("added :",sum("hello",3))

//add to cart

// let cart = [];


// function addToCart(item, quantity) {
//     cart.push({ item, quantity });
//     return cart;
// }


// addToCart('Shoes', 2);
// addToCart('Hat', 1);
// addToCart('Socks', 5);


// console.log(cart);

// function boolean() {
//     const status = "kiki"
//     return status; 
//   }
  
//   function operation(boolean, a, b, c, d, result) {
//     if (boolean()) { 
//       const add = a + b;
//       const mul = c * d;
//       if (add === mul) {
//         console.log('equal');
//         result();
//       } else {
//         console.log('not equal');
//       }
//     } else {
//       console.log('Boolean check failed');
//     }
//   }
  
//   function result() {
//     console.log('Both are the same, task success');
//   }
  
//   operation(boolean,2, 3, 1, 5, result);

// function boolean(){
//   const status = true 
//   console.log(status)
//   return status
// }
// function boolean(){
//   const status = true 
//   console.log(status)
//   return status
// }
// function operations(boolean,a,b,c,d,result){
//   if(boolean()){
//     const add = a+b
//     const mul = c*d
//     if(add === mul){
//       console.log("similar")
//       result()
    
      
//     }
//     else{
//       console.log("not similar")
//     }
//   }
  
//   else{
//     console.log("failed")
//   }
// }
// function result(){
//   console.log("the task is completed")
  
  
// }
// operations(boolean,2,3,1,5,result)

// function boolean(){
//   const status = true 
//   console.log(status)
//   return status
// }
// function operations(boolean,a,b,c,d,result){
//   if(boolean()){
//     const add = a+b
//     const mul = c*d
//     if(add === mul){
//       console.log("similar")
//       result("str")
//     }
//     else{
//       console.log("not similar")
//     }
//   }
  
//   else{
//     console.log("failed")
//   }
// }
// function result(str){
  
//   console.log("the result is task")
// }
// operations(boolean,2,3,1,5,result)
// function boolean(){
//   const status = true 
//   console.log(status)
//   return status
// }
// function operations(boolean,a,b,c,d,result){
//   if(boolean()){
//     const add = a+b
//     const mul = c*d
//     if(add === mul){
//       console.log("similar")
//       result("str")
//     }
//     else{
//       console.log("not similar")
//     }
//   }
  
//   else{
//     console.log("failed")
//   }
// }
// function result(str){
  
//   console.log("the result is task")
// }
// operations(boolean,2,3,1,5,result)



// const cart = [];
// function addItem(itemName, itemPrice) {
//   cart.push({ name: itemName, price: itemPrice });
// }
// function removeItem(itemName) {
//   const index = cart.findIndex(item => item.name === itemName);
//   if (index !== -1) {
//     cart.splice(index, 1);
//   } else {
//     console.log('Item not found in the cart');
//   }
// }
// function viewCart() {
//   if (cart.length === 0) {
//     console.log('The cart is empty');
//   } else {
//     console.log('Items in your cart:');
//     cart.forEach(item => {
//       console.log(`- ${item.name}: $${item.price}`);
//     });
//   }
// }
// function calculateTotal() {
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   console.log(`Total price: $${total}`);
// }
// addItem('Apple', 1.99);
// addItem('Banana', 0.99);
// viewCart();
// calculateTotal();
// removeItem('Apple');
// viewCart();
// calculateTotal();

//const cart = [];
// const numbers = [1, 2, 3]
// numbers.push(4)
// numbers.push(5, 6,7,8,9,10)
// console.log(numbers)

// const fruits = []
// fruits.push("pineapple", "apple")
// console.log(fruits)

// const Cart = []
// function additem(itemName,itemPrice){
//   Cart.push({name : itemName, prise : itemPrice})
// }
// function ViewCart(){
//   console.log("item in cart")

//   Cart.forEach(item => {
//     console.log(`name ${item.name}, price ${item.price}`);
//   });
// }
// additem('apple', 20)
// ViewCart()
// function checkStatus(isActive) {
//   if (typeof isActive !== 'boolean') {
//     throw new Error("Invalid argument: expected boolean");
//   }
  
//   if (isActive) {
//     console.log("The status is active");
//   } else {
//     console.log("The status is inactive");
//   }
// }

// try {
//   checkStatus(false); 
// } catch (error) {
//   console.error(error.message); 
// }



// function checkStatus(isActive) {
//   if (typeof isActive !== 'boolean') {
//     throw new Error("Invalid argument: expected boolean");
//   }
  
//   if (isActive) {
//     console.log("The status is active");
//   } else {
//     console.log("The status is inactive");
//   }
// }

// try {
//   checkStatus(true); 
// } catch (error) {
//   console.error(error.message); 
// }

// function operations(booleanVal, a, b, c, d, result) {
//   if (booleanVal) { 
//     const add = a + b;
//     const mul = c * d;
    
//     if (add === mul) {
//       console.log("Similar values");
//       result("task completed"); 
//     } else {
//       console.log("Not similar");
//     }
//   } else {
//     console.log("Failed: Boolean value is false");
//   }
// }

// function result(str) {
//   console.log("The result is: " + str);
// }

// operations(true, 2, 3, 1, 5, result); 

// function onlineShopping(age){
//   if(typeof age !== 'number' || age < 0 ){
//     console.log("Invalid and wrong data")
//     return
//   }
    
//   if(age >= 21){
//     console.log("he can buy beverages",age)
//   }
//   else{
//     console.log("not valid age to buy beverages",age)
//   }
// }

// onlineShopping('5')

// let a = 5;  
// let b = 3;  

// let result = a & b;
// console.log(result);  

// let c = 5;  
// let d = 3;  

// let res = c | d;
// console.log(res);  

// let e = true;
// let re = !e;  
// console.log(re);

// let e = 5;
// let f = 10;
// let re = e !== f; 
// console.log(re)

// let a = false
// let b = 'kiruthiga'
// if(b){
//   console.log("checking")
// }
// else{
//   console.log("not checking")
// }


// function createPerson(highSalary,cibilScore){

//   if(typeof highSalary !== 'boolean' || typeof cibilScore !== 'boolean'){
//     throw new Error ("Invalid customers: highSalary and cibilScore must be boolean values.")
    
//   }
//   if(highSalary && cibilScore)
//   {
//       console.log("eligible")
//   }
//   else{
//       console.log("not eligible")
//   }

// }


// try{
// //createPerson(true, 'yes')
//   //createPerson(true, 1)
//   //createPerson(1,1)  
//   //createPerson(0,true)
// createPerson(true,true)

// }
// catch(error){
//   console.error(error.message)
// }

// function createPerson(highSalary,cibilScore,extraMsg){
//   if(typeof highSalary !=='boolean' || typeof cibilScore !== 'boolean'){
//     throw new Error ("Invalid customer : highsalary must be boolean value")
//     }

    
//     let resultMsg = (!highSalary && !cibilScore) ? "Not eligible" : "eligible"
//     return{
//       result : resultMsg,
//       extra : extraMsg
//   };

// }
// try{
//   let res = createPerson(true,true,"congrats")
//   console.log(res)
// }
// catch(error){
//   console.error(error.message)
// }


// let highSalary = false /// 6000
// let cibilScore = true // 720
// console.log(highSalary || cibilScore)


// let x = "kiki" + 16 + 4
// let y = 16 + 4  + "kiki"
// console.log(typeof x)
// console.log(typeof y)
// console.log(x)
// console.log(y)
// let x;
// let y=10
// console.log(x,y)

// let arr = [1,2,3,4,5]
// arr.push(6,7)
// console.log(arr)
// let arr = [1,2,3,4,5]
// let removedLast = arr.pop()
// console.log(arr)
// let arr = [1,2,3,4,5]
// arr.push(6,7)
// console.log(arr)
//arry syntax for splice metd

//array.splice(start,deletecount, num ......)



// let fruit = ["apple", "banana",'coconut', 'dragonfruit']
//             //0         1         2         3
// let removedEle = fruit.splice(1,4)
// console.log(removedEle)

// let fru = ["apple", 'dragonfruit']
// fru.splice(1,0,"banana","coconut")
// console.log(fru)

// let fruits = ['apple', 'banana', 'mango'];
// fruits.splice(1, 2, 'orange');
// console.log(fruits);





// let fruits = ["apple", 'banana', 'pineapple','strawberry']
// let removeEle = fruits.splice(1,2)
// console.log("removed",removeEle)
// console.log(fruits.length)

// fruits.splice(1,0,"blueberry","guva")
// console.log(fruits.length)

// let pop = fruits.pop()
// console.log(pop)
// console.log(fruits.length)

// let numbers = [3,6,7,8,9,1]

// let removedNum = numbers.pop() 
// console.log(removedNum) //5

// let push = numbers.push(2,5)//123467
// console.log(numbers)
// console.log(push)

// let newremoved = numbers.pop() //7
// console.log(newremoved)
// console.log(numbers)//12346

// let addnew = numbers.push(8)
// console.log(numbers)

// let mixboth = addnew + removedNum
// console.log(mixboth)

// function createPerson(salary,cibilScore,age){
//   if (typeof salary !== 'number' || typeof cibilScore !== 'number' || typeof age !== 'number') {
//     throw new Error("Invalid input: salary, cibilScore, and age should be numbers");
// }
  
//   if(salary < 0)
//   {
//     throw new Error ("Invalid input: salary cannot be negative")
//   }
//   if(cibilScore < 300 || cibilScore > 900)
//     {
//       throw new Error ("Invalid input: CIBIL score must be between 300 and 900")
//     }
//   if(age < 18 || age > 100)
//   {
//     throw new Error ("Invalid input: age must be between 18 and 100")
//   }
  
//   if ((salary > 50000 && cibilScore > 750) || (age >= 60 && cibilScore > 700)) {
//     return "Eligible";
// } else {
//     return "Not eligible";
// }
// }


// try {
 
//   //console.log(createPerson(40000, -780, 65));  
//   console.log(createPerson(40000, 780, 55));  

// } catch (error) {
//   console.error(error.message);
// } finally {
//   console.log("Process completed.");
// }


// function checkEligibility(age, isCitizen) {
//   if (typeof age !== 'number' || typeof isCitizen !== 'boolean') {
//     throw new Error("Invalid input: age must be a number and isCitizen must be boolean");
//   }
  
//   if (age >= 18 && isCitizen) {
//     console.log("Eligible to vote and they are a citizen");
//   } else {
//     console.log("Not eligible to vote");
//   }
  
//   let Region;
//   switch (age >70) {
//     case (age >= 18 && age <= 80):
//       Region = 'Region-A';
//       break;
//     case (age >= 30 && age <= 89):
//       Region = 'Region-B';
//       break;
//     case (age >= 90):
//       Region = 'Region-C';
//       break;
//     default:
//       Region = 'Unknown';
//   }

//   let result = (age >= 18 && isCitizen) 
//     ? `You are Eligible to Vote and belong to ${Region}` : "Not Eligible to Vote";
//   console.log(result);
//   return result;
// }

// checkEligibility(70, true);


// let num = 15;

// switch (num < 10) {
  
//   case (num >= 10 && num <= 20):
//     console.log("Number is between 10 and 20");
//     break;
//     case (num < 10):
//     console.log("Number is less than 10");
//     break;
//     case (num > 10):
//     console.log("Number is less than 10");
//     break;
//   default:
//     console.log("Number is greater than 20");
// }

// function testNumber(num1,num2) {
//   try {
//     console.log("Testing number:", num1,num2);

//     if (typeof num1 !== 'number' || typeof num2 !== 'boolean')
//       throw "num1 and number 2 is number";

//     let result = (num1+num2) / 2;
//     console.log(` ${result}`);
//   }
//   catch(error) {
//     console.log("Error:", error);
//   }
//   finally {
//     console.log("Test completed");
  
//   }
// }
// testNumber(10,0)
//11/2 = 5.5 


// let age = 50
// if(age < 18 ){
//   console.log("eligible to vote")
// }

// else if(67 > 18)
// {
//   console.log(" older eligible to vote")
// }
// else{
//   console.log("not eligible to vote")
// }



// let day = "saturday"; //fixed value 

// switch (day) {
//   case "tuesday":
//     console.log("It's Tuesday");
//     break;
//   case "wednesday":
//     console.log("It's Wednesday");
//     break;
//   case "monday":
//     console.log("It's Monday");
//     break;
//   default:
//     console.log("It's Friday");
//     break;
// }

// function checkEligibility(age,isCitizen){
//   if(typeof )

// }

// const Person = {
//     Name : "Kiruthiga",
//     Age : 25,
   
// address:{
//     Native : "Keralam",
//     Degree :"MBA"
// },
// }
// // console.log(address1)
// let address1 ={
//     Native : "Keralam",
//     Degree :"MBA",
//     ...Person
// }

//console.log(address1)
//let result = 

// function sum(...numbers)
// {
//     console.log(numbers)
// }

// sum(1,2,3,4,5,6,7,8,9)

// const [firt, ...rest]= [10,20,30,40]
// console.log(rest)

// const { name, ...others } = { name: "Kiruthika", age: 25 };
// console.log(others);



// greet : function(){
//     return `Hello am ${this.Name} and my age is ${this.Age}`;
// },

// getAddress : function(){
//     return `My native is ${this.Native} and I completed ${this.Degree}`;
    
// },

// }
// console.log(Person.greet());
// console.log(Person.getAddress());


// const arr1 = [2,4,5,7,8,9]
// const arr2 = [...arr1,10,11,12]
// console.log(arr2)


//spread
// const arr = [1,2,3,4,5]
// const arr1 = [...arr,6,7,8]
// console.log(arr1)

//in object
// const obj1 = {name : "Kiruthiga", Age : 25}
// const obj2 = {...obj1,Native : "Keralam", Degree : "MBA"}
// console.log(obj2)

// // in array 
// const numbers = [1,2,3,45,9]
// function add(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(add(...numbers))


//rest 
// let merge = [...arr, ...arr1]
// console.log("Merged",merge)
// console.log("spread",arr1)

// const [,second,...rest] = [1,2,3,45,67,89]
// console.log(rest)
// console.log(second)

// const { name, ...others } = { name: "Kiruthika", age: 25 };
// console.log(others);

// const arr = [1,2,3,4,5]
// const arrNew = [...arr,6,7,8,9,10]
// let merged = [...arr, ...arrNew]
// console.log("Spread merged", merged)

// const obj1 = {name : "Anu", FullName : "Krithika Tejaswi"}
// const obj2 = { Native : "Keralam", Degree : "MBA"}
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// const numbers = [1,2,3,4,5]
// function add(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(add(...numbers))

// console.log("rest")

// const [first,...rest] = [10,20,30]
// console.log(rest)

// const {name,...others} = {name : "kiki", class : "5 th Bsec"}
// console.log(others)


// function logArguments(...args) {
//     console.log(args);
//   }
  
//   logArguments(1, 2, 3, 4, 5); 

//   function num(...numbers){
//     return numbers.reduce((total, ele)=>total+ele,0)
//   }
//   console.log(num(1,2,3,4,5))

// const arrs = [1,2,3,4,5]
// const remove = arrs.splice(2,2,"kiki","anu")
// console.log(remove)

// console.log(arrs)


// const arrss = [1,2,3,4,5]
// const arrsss = arrss.slice(1,3)
// console.log(arrsss)


// const arr1 = ['a','b','c']
// const arr2 = arr1
// arr2.push('d')
// console.log(arr2)
// console.log(arr1)




// const [,,,four,...rest]=[1,2,3,4,5]
// console.log(rest)

// const a =['c','b']
// const b = [a,...['e','f']]
// console.log(b)

// const object1 = {name : "Kiruthiga", Native : "Kerala"}
// const object2 = {...object1,age : 25, Degree : "MBA"}
// const object3 = {...object1,...object2}
// console.log("cloned",object2)
// console.log("threeobj",object3)

// const date = Date().toString()
// console.log(typeof date)
// console.log(date)

// const New = new Date().toLocaleString("en-us")
// console.log(New)
// console.log(typeof New)

// const ds = new Date("October 31, 2014 11:13:00")
// console.log(ds)

// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d)
//date format
// const iso = new Date("2024-03-25");
// console.log("ISO", iso)

// const iso1 = new Date("2024-03");
// console.log("ISO without date", iso1)//default value keep so 1 will come

// const iso2 = new Date("2024");
// console.log("ISO without date and month", iso2)////default value keep so 1 will come same for month

// const currentdate = new Date("2024-01-01").getFullYear()
// console.log("currentdate", currentdate)

// const currentdate1 = new Date("2024-02-02").getMonth()
// console.log("currentdate", currentdate1)

// const months = ["January", "February", "March", "April", "May",
//      "June", "July", "August", "September", "October", "November", "December"];

     //const days = [1,2,3,4,5,6,7,8,9,10,11,12,15,18]
     
// let currentdate3 = new Date ("2024-09-18")
// let res = months[currentdate3.getMonth()]
// console.log(res)

// let currentdate4 = new Date ("2024-09-18")
// let result = [currentdate4.getDate()]
// console.log(result)

// let currentdate5 = new Date ("2024-09-18T00:00:12")
// let hrs = [currentdate5.getHours()]
// console.log(hrs)
// let today = new Date().toLocaleString("en-us")
// console.log("today :", today)
// const Trim =     "Hello World"   
// const removedSpace = Trim.trim(5)
// console.log("removed : ", removedSpace)

// const Chartind = "Helloworld"
// const res = Chartind.charAt(5)
// console.log("result charind : ",res)

// let str1 = "Anu"
// let str2 = "Krithika"
// let str3 = "Tejaswi"
// let result = str1.concat(" ",str2, " " ,str3)
// console.log("varres : ", result)
// console.log("concatcon: ", str1.concat(" "),str2.concat(" "),str3.concat())

// let inclustr = "hey am Kirithika"
// console.log("not availble: ", inclustr.includes("I"))
// console.log("available: ",inclustr.includes("am"))

// let Indesofstr1 = "Hello am krithika";
// let Indesofstr2 = "Hello am krithika";
// console.log("withsps: ", Indesofstr1.indexOf("k"))
// console.log("next k: ", Indesofstr1.indexOf("k", 10));
// console.log("withoutsps: ", Indesofstr2.indexOf("krithika"))
// console.log(Indesofstr1.repeat(3))


// let sentence = "Krithika is a good girl. Krithika loves coding.";
// let replaced = sentence.replaceAll("Krithika", "Aruna");
// console.log(replaced); 

// let slicepos = "Krithika"
// let positiveval = slicepos.slice(3,6)
// console.log("positive :", positiveval)

// let slicepos1 = "Krithika"
// let negativetiveval = slicepos1.slice(-9, -2)
// console.log("Negative :", negativetiveval)

// let slicepos2 = "Krithika"
// let negativetiveva2 = slicepos2.slice(4)
// console.log("Negative :", negativetiveva2)

// let upper = "krithika"
// let uppRes = upper.toUpperCase()
// console.log("upperCase :", uppRes)

// let lower = "KRITHIKA"
// let loweres = lower.toLowerCase()
// console.log("lowerCase :", loweres)

// let split = "hello world";
// let arrval = split.split("  ")
// console.log("arrvales :", arrval)

// let replace = "hello world"
// let midd = replace.replace("world" , "krithika")
// console.log("replaced :", midd)

// let replace1 = "hello world"
// let midd1 = replace1.replace("world" , "krithika").replace(" ","")
// console.log("replaced :", midd1)

// let myString = "Hello World";
// let lengthOfString = myString.length;
// console.log("withspace :", lengthOfString)

// let myString1= "Hello World";
// let subs = myString1.substring(2,7)
// console.log("substring :", subs)

// let fruits = ["apple", "banana","berry"]
// fruits[6]="blueberry"
// console.log(fruits)


// const slice = "Kiruthiga"
// const res = slice.slice(2,5)
// console.log("result :", res)

// const splice = [1,2,3,4,5]
// const result = splice.splice(2,0)
// console.log("splice :", splice)

// const replace = "Hello world good morining and world is beautiful world has many colors"
// const edited = replace.replaceAll(" ","")
// console.log("edited :", edited)

// let sentence = "hello welcome to the coding world fun"
// let wordArray = sentence.split("  ")
// let capital = wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
// let longWords = capital.filter(word => word.length > 4);
// let resultString = longWords.join(" ");

// console.log("complete :", sentence)
//console.log("Split :",wordArray)
// console.log("capitalized :", capital)
// console.log("longWords :", longWords)
// console.log("resultString :",resultString)

// let split = "hello world";
//  let arrval = split.split("o")
//  console.log("arrvales :", arrval)

// let numberString = "10,20,30,40,50";
// let numberArray = numberString.split(",").map(Number)
// let slicedArray = numberArray.slice(1,4)
// let toltalSum = slicedArray.reduce((acc, ele) => acc + ele,0)
// let isallAboveFive = numberArray.every(num =>num > 5)

// console.log("numberArray :", numberArray)
// console.log("slicedArray :", slicedArray)
// console.log("totalSum :", toltalSum)
// console.log("allAboveFIve :",isallAboveFive)

// const spilit = "hello welcome to the coding world fun"
// const res = spilit.split(" ")
// const cap = res.map(word=>word.charAt(0).toUpperCase() + word.slice(1))
// const fil = cap.filter(num =>num.length > 5)
// const eve = res.every(nu=>nu >4)
// const jo = res.join(" ")
// console.log(jo)

// let arr1 = ["banana","grapes","strawberry","orange"];
// let arr2 = ["carrot","onion","raddish"];

// console.log("concatation : ", arr1.concat(arr2));

// console.log("length : ",arr1.length);

// let at = arr1.at(-1)
// console.log("at : ",at)

// console.log("joining : ",arr1.join())

// console.log("string : ",arr1.toString())

// let pushing = arr1.push("1");
// console.log("My array : ",arr1);

// let poping = arr1.pop();
// console.log("poped out : ",poping);
// console.log("after poping : ",arr1);

// let unshifting = arr1.unshift("berry","blueberry","kiwi");
// console.log("after unshifting : ",arr1);


// let shifting = arr1.shift()
// console.log("shifting : ",shifting);
// console.log("After shifting : ",arr1)

// let mapping = arr1.map(convert => convert.toUpperCase())
// console.log("mapping : ", mapping);

// let filtering = mapping.filter(converting => converting.length>6)
// console.log("fltering : ",filtering);

//  let reducing = arr1.reduce((acc,tot) => acc +" "+tot,"")
//  console.log("reducing : ",reducing)

//  let checkforeach = arr1.forEach(fruit => console.log(fruit));

//  let checksome = arr1.some(fruit => fruit.length < 3)
//  console.log("checksome : ",checksome);

//  let checkevery = arr1.every(fruit => fruit.length > 3);
//  console.log("checkevery : ",checkevery);

//  console.log("aftr splicing :",arr1);
//  let spliced = arr1.splice(2,3,"rose","fly")
//  console.log("spliced : ",spliced);
//  console.log("aftr splicing :",arr1);

// let sentence = "hello world"
// let keyword = 'l'
// let count = sentence.split(' ').reduce((acc,char)=>{
//     return char === keyword ? acc + 1 : char
// })

//-------------------------------------------------------------------------------------------------------------

//spread

// const arr1 = [10,20,30]
// const arr2 = [40,50,60]

// const merged = [...arr1,...arr2]
// console.log("clone :",merged)

//object

// const Person = {
//     Name: "Kiruthiga",
//     Native: "Keralam",
// };

// const Job = {
//     Role: "Developer",
//     Company: "Techcorp",
// };

// const PersonWithJob = { ...Person, ...Job };

// function displayName({ Name, Native, Role, Company }) {
//     console.log(`Name: ${Name}`);
//     console.log(`Native: ${Native}`);
//     console.log(`Role: ${Role}`);
//     console.log(`Company: ${Company}`);

// }

// displayName(PersonWithJob);

//or array with this keyword
// const PersonWithJob = {
//     Name: "Kiruthiga",
//     Native: "Keralam",
//     Role: "Developer",
//     Company: "Techcorp",
//     displayDetails() {
//         console.log(`Name: ${this.Name}`);
//         console.log(`Native: ${this.Native}`);
//         console.log(`Role: ${this.Role}`);
//         console.log(`Company: ${this.Company}`);
//     }
// };
// PersonWithJob.displayDetails();

//array

// const numbers = [1,2,3,4,5]
// function addNum(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(addNum(...numbers))

//rest 
// let [first,second,third,...rest] = [10,20,30,40,50]
// console.log(rest)

// function fn(...num){
//     return num.reduce((acc,char)=>acc+char,0)
// }
// console.log(fn(10,20,30))

// const {name,...others} = {name : "Anu",class : "5th",native : "keralam"}
// console.log(others)

//foreach 
//array.foreach(callback(currentval,index,arr){
//code
//})

// let fruits = ["Apple","Banana","pineapple"]
// fruits.forEach(function(fruit,index){
//     console.log(`${index + 2}`,`${fruit}`)
// })
// 0 + 1 =1 apple
// 1+1= 2banana
// 2+1=3 pineapple
// let text = "Hello";
// [...text].forEach(function(char){
//     console.log(`${char}`)
// })

// function addTwo(x) {
//     return x + 2; //4
//   }
  
//   function multiplyByThree(x) {
//     return x * 3;
//   }
//   console.log(multiplyByThree(addTwo(7)))

// let number = [1, 2, 3];


// let newNumbers = [...number, 4, 5, 6];


// newNumbers.forEach(number => {
//   console.log(number);  
// });

  
// let numbers = [1,2,3,4,5]
// let result = numbers.filter(num => num > 2)
//              .map(num => num * 2)
//              .reduce((sum,ele)=>sum + ele,0)
// console.log(result)

// let name = "     rAJu      "
// let res = name.trim().toLowerCase().charAt(0).toUpperCase() + name.trim().toLowerCase().slice(1);
// console.log(res)

// let myFunction = function(a,b){
//     return a + b
// }
// let result = myFunction(2,3)
// console.log(result)

// let myFun = function(c,d){
//     if(c === undefined || d === undefined){
//         return "Please provide two number"
//     }

//     return c + d
// }
// console.log(myFun(2,3))

// let argue = function(e,f){
//     if(argue.length !==2){
//         return "Please pass arguemnts"
//     }
//     return e + f
// }
// console.log(argue(2,3))

//self invoke

// (function(){
//     console.log("This is the string method")
// })();

// (function(name){
//     console.log(`Vanakkam ${name}`)
// })("Raju");
// (function(a,b,c){
//     return console.log(a+b+c)
// })(2,3,4)
// (function(person,number){
//     console.log(person.name + "likes" + number.join(","))
// })({name : "kiki"},[1,2,3])
// (function(person,number){
//     console.log(person.name+"likes"+" "+number.join(","))
// })({name : "kiki"},[1,2,3])
// (function(callback){
//     callback()
// })(function(){console.log("am a callback :-)")})

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const merged = [...arr1,...arr2,7,8,9,10]
// console.log("merged: ",merged)

// const obj1 = {name : "Anu", Native : "Keralam"}
// const obj2 = {Degree : "MBA", Hobby : "sleeping"}
// const obj3 = {...obj1,...obj2,Foodie : "true"}
// console.log("cloned :",obj3)


// let numbers = [1,2,3,4,5]
// function add(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(add(...numbers))

// let Person = {
//     Name : "Anu",
//     NicKname : "Krithika",
//     familyName : "Tejaswi"
// };

// let Job = {
//     Title : "Developer",
//     Company : "Abc and co"
// };

// let PersonwithJob = {...Person,...Job}

// function DisplayDetails({Name,NicKname,familyName,Title,Company}){
//     console.log(`Name ${Name}`)
//     console.log(`NicName ${NicKname}`)
//     console.log(`familyName ${familyName}`)
//     console.log(`Title ${Title}`)
//     console.log(`company ${NicKname}`)
// }
// DisplayDetails(PersonwithJob)

// const PersonWithJob = {
//         Name: "Anu",
//         Nickname: "Krithika",
//         familyName : "Tejaswi",
//         Title: "Developer",
//         Company: "Abc and co",
//        displayDetails() {
//             console.log(`Name: ${this.Name}`);
//              console.log(`Native: ${this.Native}`);
//             console.log(`Role: ${this.Role}`);
//             console.log(`Company: ${this.Company}`);
//         }
//     };
//  PersonWithJob.displayDetails()

// function introduce(name,age,...hobbies){
//     console.log(`I am ${name} and ${age} years old`)
//     if(hobbies.length > 0){
//         console.log(`am ${name} and my hobbies : are ${hobbies.join(",")}`)
//     }


// }
// let person = ["Anu Krithika Tejaswi",25]
// let hobbies = ["reading","sleeping","eating"]
// introduce(...person,...hobbies)


// function fn(...numbers){
//     return numbers.reduce((acc,ele)=>acc + ele,0)
// }
// console.log(fn(1,2,3,4,5))

// let array = ["apple","banana","pineapple"]
// array.forEach(function(fruit,index){
//     console.log(` ${index +1} : ${array}`)
// })

// let text = "Hello";
// [...text].forEach(function(char){
//     console.log(`${char}`)
// })

// let find = [5,40,56,101,70,7,9]
// let res = find.filter(num => num > 7)
// console.log(res)

// let at = [5,40,56,101,70,7,9]
// let result = at.at(-2)
// console.log(result)

// let arrays = ["Apple","banana","pine"]
// delete arrays[1]
// console.log(arrays)


// (function(){
//         console.log("This is the string method")
//     })();

//     (function(name){
//         console.log(`hello ${name}`)
//     })("Raju")

// (function(callback){
//     console.log("na oru self invoke which means inner function");
//     callback()
// })
// (function(){
//     console.log("na outer / callback function");   
// });
// (function() {
//     var localVar = "Naan oru local variable";
//     console.log("Function-ukku ulla:", localVar);
    
//     function innerFunction() {
//         console.log("Inner function-la:", localVar);
//     }
    
//     innerFunction();
// })();

// console.log("Function-ukku veliya try panrom:");
// try {
//     console.log(localVar);
// } catch(error) {
//     console.log("Error: localVar is not defined");
// }

// (function(){
//     var localVar = "am a localvar/ function scope"
//     console.log("local :",localVar)
//     function innerFun(){
//         return `you can access here as well ${localVar} `
//     }
//     innerFun()
// });
// console.log(`You cant access me ${localVar}`);
// try{
//     console.log(`Error may throw ${localVar}`);
// }
// catch(err){
//     console.log(err.message)
// }
// finally{
//     console.log("am always execute");
    
// }

// (function(fruits){
//     console.log("my favourite fruits");
//     fruits.forEach(function(fruit){
//         console.log("_",fruit);    
//     })   
// })(["mango","jackfruit","strawberry"])

// (function(name){
//     console.log(`hello world ${name}`);
    
// })("Kiruthiga");

// (function(callback){
//     console.log("hello am self invoke /IIFE");
//     var localVar = "am working here only";
    
//     function innerFun(){
//         return console.log(localVar);
//     }
//     innerFun(); 
//     callback(function(obj, num) {
//         console.log(`am inserting obj & converting array into an array ${obj.name} + ${num.join(",")}`);
//     });
// })(function(call2) {
//     console.log("hi am a callback");
//     call2({ name: "kiki" }, [1, 2, 3]);
// });

// (function(callback1){

//     console.log("hello world")
//     var localVar = "am self invoke"
//     function innerFun(){
//         return console.log(localVar);
        
//     }
//     innerFun()
//     callback1();
// })(function(){
//     console.log("am a callback fun");
// })(function(obj,num){
//     console.log(`hell am ${obj.name} and arrtostr ${num.join()}`);
    
// })({name : "kiki"},[1,2,3])

// (function (data) {
//     console.log("Processing data..."); 
  
//     setTimeout(() => {
      
//       let processedData = data.map(item => item * 2); 
  
//       (function(result) {
//         console.log("Processed data:", result);
//       })(processedData);
      
//     }, 2000);
  
// })([1, 2, 3, 4, 5]);

// (function(data){
//     console.log("Processing Data....");
    
//     setTimeout(()=>{
       
//         let processedData = data.map(item => item * 2);

//         (function(result){
//             console.log("Processed Data...", result);
//         })(processedData);

//     },2000);
    

// })([1,2,3,4,5]);

 
// (function(data){
//     console.log("Processing Data")
//     let newArr = data.map(item => item * 2);

// })(function(res){
//     console.log("ProcessedData...",res)

// })([1,2,3,4,5],newArr)


// (function(name){
//     console.log(`I am ${name}`);
    
// })(function(){
//     console.log("Thank you ");
    
// })("Kiruthiga")

// (function(callback){
//     callback();
//     console.log("Hello world");
    
    
// })(function(){
//     console.log("Thank you")
// });

// function additional(){
//         return storefun(2,3)
// }
// //console.log("added",storefun(2,3))
    
// let storefun = function(a,b){
   
//    console.log(`Values : ${a+b}`);
   

//    return a+b

   
// }
// additional();

// let fruits = {colour1 : "red",colour2 : "yellow",colour3 : "orange"}
// fruits.foreach(function(fru){
//     console.log(this.fruit);
    
    
// })

// let fruit = ["Apple","Banana","PineApple"]
// fruit.forEach(function(fru,index){
//     console.log(` ${index + 1}  ${fru}`);  

// })

// let zylo = {
//     company : "Mahendra",
//     Price : "30lk"
// } ;

// let nano ={
//     company1 : "Tata",
//     Price : "10lk"
// };

// let total = {...}



// function declaration(){
//     console.log("function declaration");
    
// }
// declaration()

// let array = [1,2,3,4,5]
// array.forEach((number)=>{
//     console.log("numbers :",number)
// })

// let Items = [1,2,3,4,5]
// let copy = []
// Items.forEach((item)=>{
//     copy.push(item)
// })
// console.log("copy :",copy)

// var arr = [2,4,6,8,10]
// arr.forEach((val, index)=>(console.log(`index num is : ${index} and val is ${val} `)))

// //we will access the whole array with the third optional parameter

// var arrays = [2,4,6,8]
// arrays.forEach((val,index,wholeArr)=>console.log("wholeArrays :",wholeArr))
// arrays.forEach((val,index,whole)=>console.log(`${index + 1}`,whole))



// let arr = [1,2,3]
// arr.forEach((Element,index)=>{
//     arr[index] = Element + 10
// });
// console.log(arr)

// let player = {
//     name : "Dhoni",
//     team : "CSK",
//     role : "captain",
//     me(){
//         console.log("am " +this.name+ " my team is "+this.team +" am role is  "+this.role)
//     }

//     }
//     player.me();
//  var con = "hello"

// var iceCreamShop = {
//     flavors: ["Vanilla", "Chocolate", "Strawberry"],
//     greeting: "Welcome to our ice cream shop!",

//     introduce: function() {
//         console.log(con);
//         console.log(this.greeting)
        

//         this.flavors.forEach((flavor) => {
//             console.log("We have " + flavor + " ice cream.");
//         });
        
        
//     },

//     check : function(){
//         console.log(this.flavors)
//     }
    

// };
// iceCreamShop.check()
// iceCreamShop.introduce();


//display the numbers

// let numbers = [1,2,3,4,5];
// numbers.forEach((number)=>{
//     console.log("Display :",number)
// });


//copy or store the one array elements to another empty array

// let items = [10,20,30];
// let copy = [];
// items.forEach((item)=>{
    
//     copy.push(item);

// });
// console.log("Copied :",copy)

//using this keyword 

// const greet = "Kiki ice";

// let iceCreamShop = {
  
//     flavours : ["vannila","butterscotch","blackcurrent"],
//     greetings : "Welcome all...",
//     introduce : function(){
//         console.log(this.greetings)
        
//         this.flavours.forEach((flaour)=>{
//             console.log(`we have ${flaour} ice creams`)
//             console.log(greet);

//         });
        
//     },
   

//     greets : function(){
//         //console.log(greet);
//         let modify = this.flavours.map((ele =>ele.charAt(0).toUpperCase() + ele.slice(1)))
//         console.log("map :",modify)   
//     }
// }
// iceCreamShop.introduce();
// iceCreamShop.greets();


// let GradeCalculator ={
//     marks : [],
//     addMark : function(mark){
//         this.marks.push(mark)

//     },
//     calculateAverage : function(){
//        let total = this.marks.reduce((acc,tot)=>acc + tot,0)
//        let average = total / this.marks.length
//        return average

//     },
//     determineGrade : function(average){
//         if(average >= 90) return 'A'
//         if(average >= 80) return 'B'
//         if(average >= 70) return 'C'
//         if(average >= 60) return 'D'
//         return 'F'
        
//     },
//     getResult : function(){
//         let average = this.calculateAverage()
//         let grade = this.determineGrade(average)
//          return { average: average, grade: grade }
//     }

// };
// GradeCalculator.addMark(85);
// GradeCalculator.addMark(75);
// GradeCalculator.addMark(65);
// GradeCalculator.addMark(55);
// GradeCalculator.addMark(45);
// console.log(GradeCalculator.getResult());

// let sentence = "hello welcome to the coding world fun";
// let wordArray = sentence.split(" ");
// let capitalizedWords = wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// let longWords = capitalizedWords.filter(word => word.length > 4);
// let hasO = longWords.some(word => word.includes('o'));
// let resultString = longWords.join(" ");
// longWords.push("Amazing");
// let firstWordWithC = longWords.find(word => word.startsWith('C'));
// longWords.shift();
// let finalString = longWords.join(", ");
// longWords.pop();
// longWords.unshift("Exciting");
// longWords.splice(1, 2)

// let additionalWords = ["and", "adventures"];
// let combinedWords = longWords.concat(additionalWords);
// let includesWorld = combinedWords.includes("World");
// let stringRepresentation = combinedWords.toString();
// console.log(longWords)
// console.log(combinedWords)
// console.log(includesWorld)
// console.log(stringRepresentation)


//callback 
// function mainFunction(callback){
 
//     setTimeout(function(){
//       callback ("Operation is complete")  
//     },1000);
//     console.log("Performing task....")   
// }
// function callbackFuction(result){
//  console.log("Result :",result)   
// }
// mainFunction(callbackFuction);

// function main(a,b,operation){
//     console.log("adding numbers")
    
//     setTimeout(function(){
//        const result = operation(a-b)
//        map(result)
//        some(result > 5)
       
//     },3000);
   
// }
// function subtract(res){
//     console.log("subtracted result :",res)
//     let doubled = res * 3
//     return doubled   
// }
// function map(result){
//     console.log("doubled:",result)
// }

// function some(boolean){
//   console.log("boolean :",boolean)
// }
// main(10,4,subtract)

// Starting calculation...
// First number: 10
// Second number: 7
// Sum: 17
// Product: 70
// Calculation complete!

// function startFun(a,b){
//     console.log("Starting calculation...")
//     let firstVal = firstFun(a * b)
//     let secondVal = secondFun(firstVal)
//     let merged = sum(firstVal,secondVal)
//     let finalRes = Product(merged)
//     console.log("Final Result:", finalRes) 
//     console.log("Calculation complete..")
//     return finalRes
    
// }
// function firstFun(firstVal){
//     console.log("First number :",firstVal)
//     let secondVal = (firstVal - 3)
//     return secondVal   
// }
// function secondFun(secondVal){
//     console.log("Second Number :",secondVal) 
//     return secondVal 
// }
// function sum(firstVal,secondVal){
   
//     let merged = firstVal + secondVal + 3
//     console.log("Sum :",merged)
//     return merged
// }
// function Product(merged){
//     let finalRes = merged + 53
//     return finalRes
// }
// startFun(5,2,firstFun)

// function startCalculation(a, b) {
//     console.log("Starting calculation...");
//     console.log("First number:", a);
//     console.log("Second number:", b);
    
//     let sumResult = sum(a, b);
//     let productResult = product(a, b);
    
//     console.log("Calculation complete!");
    
//     return { sum: sumResult, product: productResult };
// }

// function sum(a, b) {
//     let result = a + b;
//     console.log("Sum:", result);
//     return result;
// }

// function product(a, b) {
//     let result = a * b;
//     console.log("Product:", result);
//     return result;
// }

// startCalculation(10, 7);

 
//callback
// function uploadingVideo(videoData,callback){
//     console.log("Uploading the video --" + videoData.title)
//     console.log("Uploading the video --" + videoData.description)
//     setTimeout(()=>{
//         console.log("Upload the video has done")
//         callback(videoData);
//     },3000)
// }
// function publishingVideo(videoData,callback2){
//     console.log("Publishing the video")
//     setTimeout(()=>{
//         console.log(`Publish has done ${videoData.title},${videoData.description}`)
//         callback2(videoData);
//     },2000)
// }
// function notifySub(videoData){
//     console.log(`Notification sent ${videoData.title},${videoData.description}`)
// }

// const data = {
//     title : "This is my first video",
//     description : "its about JavaScipt callabck"
// };
// uploadingVideo(data,function(uploadData){
//     publishingVideo(uploadData,function(publishedData){
//         notifySub(publishedData);
//     })
// })

// function uploadingVideo(videoData,callback){
//      console.log("Uploading the video..." +videoData.title +" "+videoData.description) 
//      setTimeout(()=>{
//         console.log("Upload has done!")
//         callback(videoData)
//      },3000)
// }
// function publishingVideo(videoData,callback2){
//     console.log("Publishing the video..." +videoData.title+" "+videoData.description)
//     setTimeout(()=>{
//         console.log("Publish has done")
//         callback2(videoData)
//     },2000)
// }
// function notifySub(videoData){
//     console.log("Notification sent..." + videoData.title+ "and "+videoData.description)
// }
// const data = {
//     title : "This is my video",
//     description : "its about hello youtube"
// }
// uploadingVideo(data,function(uploadedData){
//  publishingVideo(uploadedData,function(publishedData){
//     notifySub(publishedData)
//  })
// })

// let reachA = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(resolve,3000,"kiki has reached")
//     }
//     else{
//         reject(new Error("Not reached"))
//     }
// });
// async function PromiseFun(){
//     try{
//         console.log("Reetu has reached")
//     const result = await reachA
//     console.log(result)
//     }
//     catch{
//         console.error(error.message)
//     }
//     finally{
//         console.log("am always execute")
//     }
    
// }
// PromiseFun();


// let reachA = new Promise((resolve,reject)=>{
//      const reached = true
//      if(reached){
//         setTimeout(resolve,3000, "Anu has reached")
//      }
//      else{
//         reject("Anu has not reached")
//      }
//     })
    
//     let reachB = new Promise((resolve,reject)=>{
//         const reached = true
//         if(reached){
//             setTimeout(resolve,2000, "krithika has reached")
//         }
//         else{
//             reject("krithika has not reached")
//         }
//     })
    
//     let reachC = new Promise((resolve,reject)=>{
//         const reached = false
//         if(reached){
//             setTimeout(resolve,1000, "tejaswi has reached")
//         }
//         else{
//             reject("tejaswi has not reached")
//         }
//     })
    
//     Promise.all([reachA,reachB,reachC])
//     .then((message)=>console.log(message))
//     .catch((message)=>console.log(message))
    
// const p1 = val => new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(val+10)
//     },1000);
// })
// p1(1).then(x => x + 20).then(result => console.log("added val is",result))

// const p1 = val => new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(val + 20)
//     }, 1000);

// })
// p1(1).then(x => x + 10).then(result => console.log("input values ",result))

// const f1 = (val, callback1) => {
//     return callback1(val + 10); //11
// }

// const callbackfn1 = (res, callback2) => {
    
//     return callback2(res + 20)//31
// }

// const callbackfn2 = (res) => {
//     return res; 
// }


// console.log("input + val", f1(1, (res) => callbackfn1(res, callbackfn2))); 

// const reachA = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve,3000,"Anu has reached")
//     }
//     else{
//         reject("not reached")
//     }
// });
// const reachB = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve,2000,"Krithika has reached")
//     }
//     else{
//         reject("not reached")
//     }
// });
// const reachC = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve,1000,"Tejaswi has reached")
//     }
//     else{
//         reject("not reached")
//     }
// });
// Promise.any([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// const reachA = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(resolve, 3000, "Anu has reached")
//     }
//     else{
//         reject(new Error("Not reached"))
//     }
// });
// async function PromiseFun(){
//     try{
//         console.log("Hi Reetu")
//         const result = await reachA 
//         console.log(result)
//     }
//     catch(error){
//         console.error(error.message)
//     }
//     finally{
//         console.log("Am always run")
//     }
// }
// PromiseFun();

// const f1 = val => new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(val + 10)
//     }, 1000);
// });
// f1(1).then(x => x + 20).then(result => console.log("value",result))

// function fn1(val,callback1){
//     return callback1(val + 10)
// }
// function callbackfn1(res,callback2){
//     return callback2(res + 20)
// }
// function callbackfn2(res) {
//     return res
// }
// console.log("added",fn1(1,(res) => callbackfn1(res,callbackfn2)))
//error handling
// const reachA = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached){
//         setTimeout(() => {
//             resolve("Anu has reached")
//         }, 2000);
//     }
//     else{
//         reject(new Error("not reached"))
//     }
// });
// async function PromiseFun(){
//     try{
//         console.log("Hello")
//         const result = await reachA 
//         console.log(result)
//     }
//     catch(error){
//         console.error(error.message)
//     }
//     finally{
//         console.log("I am always execute")
//     }

// }
// PromiseFun();

//promise 
// let reachA = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached)
//     {
//         setTimeout(() => {
//             resolve("Anu has reached")
//         }, 3000);
//     }

// });

// let reachB = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached)
//     {
//         setTimeout(() => {
//             resolve("Krithika has reached")
//         }, 2000);
//     }

// });
// let reachC = new Promise((resolve,reject)=>{
//     const reached = true
//     if(reached)
//     {
//         setTimeout(() => {
//             resolve("Tejaswi has reached")
//         }, 1000);
//     }

// });
// Promise.all([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

//callback 
// const function1 = (val,callback) =>{
//     return callback(val + 10)//11
// }
// const callbackfn1 = (res,callback2)=>{
//     return callback2(res + 20)//31
// }
// const callbackfn2 =(res) =>{
//     return res
// }
// console.log("inpur",function1(1,(res)=>callbackfn1(res,callbackfn2)))

//promise 

// const p1 = val =>new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(val + 10)
//     }, 1000);
// });
// p1(1).then(x => x +20).then(result =>console.log("added",result))


// async function fetchData() {
//   return new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//       const data = {id : 1, name : 'Anu Krithika Tejaswi'}
//       const success = false;
//     if(success){
//       resolve(data)
//     }
//     else{
//       reject("failed to fetch data")
//     }
//     },2000)
    

//   });

// }
// console.log("Fetching data...")
// fetchData()
// .then((data)=>{
//   console.log("Successfully data has been fetched from the server")
// })
// .catch((error)=>{
//   console.log("Something went wrong",error)
// })

// async function fetchAndDisplayData(){
//   console.log("Fetching Data....")
// try{
//   const data = await fetchData();
//   console.log("Successfully data has been fetched from the server")
// }
// catch(error){
//   console.log("Something went wrong",error)
// }
  
// }
// fetchAndDisplayData();


// function getWeatherData(city) {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching weather data for ${city}...`);
//     setTimeout(() => {
//       if (city.toLowerCase() === 'chennai') {
//         resolve({ temperature: 32, condition: 'Sunny' });
//       } else if (city.toLowerCase() === 'coimbatore') {
//         resolve({ temperature: 28, condition: 'Cloudy' });
//       } else {
//         reject(`Unable to fetch weather data for ${city}`);
//       }
//     }, 2000); 
//   });
// }
// function displayWeather(city) {
//   getWeatherData(city)
//     .then(data => {
//       console.log(`Weather in ${city}:`);
//       console.log(`Temperature: ${data.temperature}°C`);
//       console.log(`Condition: ${data.condition}`);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// console.log("Weather App Starting...");
// displayWeather('Chennai');
// displayWeather('Coimbatore');
// displayWeather('Mumbai');

// function getWeatherData(city){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if(city.toLowerCase() === 'chennai'){
//           resolve({temparature : 28, condition : 'sunny'})
//         }
//         else if(city.toLowerCase() === 'coimbatore'){
//           resolve({temparature : 31, condition : 'cloudy'})
//         }
//         else {
//           reject(`not able to predict for ${city}`)
//         }
//     }, 2000);
//   })


// }
// async function displayWeather(city){
 
//   try{
//     const data = await getWeatherData(city)
//     console.log(`Weather condition in ${city}`)
//     console.log(`the temparature is ${data.temparature}`)
//     console.log(`and the condition is ${data.condition}`)
//   }
//   catch(error){
//     console.error(error)
//   }  
// }
















