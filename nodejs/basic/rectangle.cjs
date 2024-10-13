
//normal fucntion
// function sum(a, b)
// {
//     return a+b;
// }
// console.log(sum (1,4));

// const sum =function (a, b){
//     return a+b;
// }
// console.log(sum (1,4));

// const sum = (a,b) => (a+b)
// console.log(sum(1,4));

// const hasOne = a => a+1
// console.log(hasOne(1));

// function sum(a,b)
// {
//     return a+b;
// }

// console.log(sum(2,3));

// const add = function (c,d){
//     return c+d;
// } 
// console.log(add(2,2));

// const sumOf = (e,f) => (e+f)
// console.log(sumOf(1,6));

// const hasOne = g => g+1
// console.log(hasOne(6));

// const Person = {
//     name : "Kiruthiga",
//     age : 26,
//     degree : "MBA",
//     work : "internship in",
//     office : "taff",
//     greet()
//     {
//         console.log('Hello my self ' +this.name+ ' and my age is '+this.age + ' i pursued '+this.degree +' currently doing in '+this.work +' at' +this.office);
//     }

// }
// Person.greet();

//Array
//  const hobbies = ['sports','cooking','dancing'];
//  for (const hobby of hobbies) {
//     console.log(hobby);
    
//  }
// const hobbies = ['sports','dancing','reading'];
// console.log(hobbies.map(hobby => 'myHobby is:' +hobby));

// const sum = (a,b) => (a+b);
// console.log(sum(2,5));


//synchronous

// console.log("First execution");
// console.log("Second execution");
// console.log("third execution");

//// setTimeout(() =>
// {
//     console.log("Third Execution");
// }, 4000);

// console.log("First execution");
// console.log("Second execution");

//callback 


//function 1

// function function1(name)
// {
//     console.log('am anu', name);

// }

// //function 2

// function function2(name)
// {
//     console.log('instead of calling me', name);
// }

// //function 3

// function fucntion3(callback)
// {
//     callback('Kiruthiga');
// }


// fucntion3(function2)
// fucntion3(function1)


 
// const success = (message) =>
//     {
//         console.log("Sucessfully booked",message);
//     }
// const failure = (message) =>
// {
//     console.log("Ticket booking failed",message)
// }
// tatkalbooking
// .then(() => console.log("Thanks for booking"))
// .catch(() => console.log("Thanks for trying"));

// function tatkalbooking(){
//    return new Promise((resolve,reject) =>
//         {
//             let bookingSucess = true
//             if(bookingSucess)
//             {
//                 resolve(850)
//             }
            
//         else
//         {
//             reject()
//         }
//     })

// }


    
// tatkalbooking()
//   .then((amt) => console.log(`Thanks for booking Rs.${amt}`))
//   .catch(() => console.log("Thanks for trying"));


// const reacA = new Promise((resolve,reject) =>
// {
//     const reached = true
//     if(reached)
//         setTimeout(resolve, 3000, 'Lathas has reached')
//     else
//     reject('latha has no reached')
// })

// const reachB = new Promise((resolve,reject) =>
// {
//     const reached = false
//     if(reached)
//         setTimeout(resolve,5000, 'Ram has reached')
//     else
//     reject('ramya has not reached')

// })
// const reachC = new Promise((resolve,reject) =>
// {
//     const reached = true
//     if(reached)
//         setTimeout(resolve,2000, 'dany has reached')
//         else
//         reject('dany has not reached')

// })

// Promise.race([reacA,reachB,reachC])
// .then((message) =>console.log(message))
// .catch((message) =>console.log(message))



//example 
//setTimeout Function

// setTimeout(() => {
//     console.log("This is setTimeout function it will be execute 2mille second");
        
//     }, 5000);
    
//     console.log("SetTimeout function is nothing but delay execution of piece of code");

//callback
//callback function means function passess as a argument to another function which is called as callback 

// function fun1(name,age){
//     console.log(`Hey this is ${name} . i am ${age} years old `);
// }
// function fun2(greet){
//     greet("Kiruthiga", 26);
// }
// fun2(fun1);

//promises
//promises in javascript which is way to handle asychronous operation it has 3 states
//pending --intial state neither fullfiled ot not
//fullfilled -- the operation sucessfully completed
//Rejection -- failure

// const TicketBooking = new Promise ((resolve,reject)=>{
//     const bookingStatus = false;
//     if(bookingStatus){
//         resolve("Successfully booked");
//     }
//     else{
//         reject("tried but not suceeded");
//     }
// });
// TicketBooking
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error));

//    

    
    //callback
//     function fun1(name){
//         console.log("hey what are you doing",name);
//     }
//     function fun2(name){
//         console.log("do well",name);
//     }
//     function cl1 (callback){
//         callback ("kiruthiga");
//     }
//     cl1(fun1);
//     cl1(fun2);

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a%b;
// }
// function operations(num1,num2, operation){
//     return operation(num1,num2);
// }
// console.log(operations(5,8, add));
// console.log(operations(5,8, sub));
// console.log(operations(5,8, mul));
// console.log(operations(5,8, div));

// function makeUpperCase(text){
//     return text.toUpperCase();
// }
// function makeLowerCase(text){
//     return text.toLowerCase();
// }
// function addExclamation(text){
//     return text + "!";
// }
// function processText(text,modifier){
//    return modifier(text);
// }
// console.log(processText("hello" ,makeLowerCase));
// console.log(processText("hello",makeUpperCase));
// console.log(processText("hello",addExclamation));



// function addition(a,b){
//     return a+b;
// }
// function operations(num1,num2, operation){
//     return (operation(num1,num2));
// }
// console.log(operations(5,10,addition));

// function compareTwo(a,b){
//     return a>b ? a:b;
// }
// function compareThree(a,b,c){
//     const largestAB = compareTwo(a,b);
//     return compareTwo(largestAB,c);
// }
// console.log("the largest no is:", compareThree(8,10,9));

// //tofinding average
// function sumOfNumber(a,b,c){
//     return a+b+c;
// }
// function findingAverage(a,b,c){
//     const sum = sumOfNumber(a,b,c);
//     return sum/3;
// }
// console.log(findingAverage(5,10,15));

//prmoises

// function checkNumber(number){
//     return new Promise((resolve,reject)=>{
//         if(number>0){
//             resolve("this is the positive");
//         }
//         else if(number === 0){
//             reject("the number is negative");
//         }
//         else
//         {
//             resolve("the number is positive");
//         }

        
//     })


// }
// checkNumber(5)
// .then((message) => console.log(message));   
// .catch((error) => console.log(error));    
       
       
//syn
// console.log("fisr exc");
// console.log("second exc");
// console.log("Third ex");




// function fun1(name){
//     console.log("hey", name);
// }
// function fun2(name){
//     console.log("hello", name);
// }
// function fun3(callback){
//     callback ("Kiruthiga");
// }
// fun3(fun2);
// fun3(fun1);

//console.log("hello");

// const a = 10;
// const b = 5;

// const c = a+b;
// console.log(c);

// function adding(a,b){
//     return a+b
// }
// console.log((adding(10,5)));

//arrow function

// const add =(a,b)=>a+b;
//  console.log(add(4,5));

//callback 

// function fun1(name){
//     console.log("hi",name);
// }
// function fun2(name){
//     console.log("hello",name);
// }
// function fun3(result){
//     result ("kiruthiga");
// }

// fun3(fun2);
// fun3(fun1);

//arithmetics 
 


// function saySomething(callback){
//     callback();
//     console.log("vanakkam!");
// }

// function sayNandri(){
//     console.log("Nandri");
// }

// saySomething(sayNandri);

// function doMath(callback1,callback2){
//     console.log("Math Pandrom")
//     callback1(10,5);
//     callback2(6,7);
// }
// function add(a,b){
//     console.log(a + " + " +b +" "+ " = "+(a+b));
// }
// function sub(a,b){
//     console.log(a + " - " +b +" "+ " = "+(a-b));
// }
// doMath(add,sub);

//async and await

// const reacA = new Promise((resolve,reject)=>{
//     const reached = false
//     if(reached){
//         setTimeout(resolve, 2000,"latha has reached");
//     }
//     else{
//         reject("latha has not reached");
//     }

// });
// reacA.then((mes)=>console.log(mes))
//     .catch((err)=>console.log(err));

    // async function status(){
    //     try{
    //         console.log("hey....")
    //    const result = await reacA
    //     console.log(result);
//         console.log('bye')
//         }
        
// catch(err){
//     console.log(err)
// }

//     }
    

// function task1(){
//     console.log("2");
// }
// function task2(){

//     console.log("3");
// }
// function task3(){
//     console.log("1");
// }
// function task4(){
//     console.log("4");
// }
// task2(task3);
// task4(task3);
// task3();
// task1();

// function task1(){
//     console.log("2")
// } 
// function task2(a)
// {
//     a();
//     setTimeout(()=>{
//         console.log("3");
//     })
   
    
// }
// function task3(){
//     console.log("1")
// }
// task2(task1);
// task3(task2);


// let reacA = new Promise((resolve,reject)=>{
//     const Reached = false
//     if(Reached){
//        setTimeout(resolve, 3000, "vidya has reached");
//     }
//     else{
//         reject("vidya has not reached")
//     }
// })

// async function fn(){
//     try{

// console.log('hi...')
// const result = await reacA;
//    console.log(result)
//    console.log('bye')

//     }
//     catch(err){
//         console.log(err)
//     }
// }
// fn();


// function downloadFile(callback){
//     callback();
//     setTimeout(()=>{
//         console.log("file has been downloaded.")
//     },2000)

// }
// function processFile(){
//     console.log("file has been processed")
// }
// downloadFile(processFile);

// let reachA = new Promise((resolve,reject)=>{
//     const reached = true;
//     if(reached){
//         setTimeout(resolve,3000, "vidya has reached");
//     }
//     else{
//         reject("vidya has not reached");
//     }
// });

// async function fn(){
//     try{
//         console.log("hey... am")
//     const result = await reachA;
//     console.log(result);
//     console.log("bye....")
//     }
//     catch(err){
//             console.log(err)

//     }
// finally {
//     console.log("bye....");
// }
// }
// fn();

//area of rectangle 
// function areaOfrectangle(length,width){
//     return length * width
// }

// module.exports = areaOfrectangle;


































