// // DATA TYPES - Primitive & Non-primitive

// var ad = 'Faxrin'; // string
// console.log(typeof ad);
// var yas = 25; // number
// console.log(typeof yas);
// var adress = null; // null
// console.log(typeof adress);

// var telebedir = false; // boolean
// console.log(typeof telebedir);

// var tel_no; // undefined
// console.log(typeof tel_no);



// Object -> Property -> Method

// var Person = {
//     ad: 'Seymur',
//     soyad: 'Manafov',
//     unvan: 'Baki',
//     yas: 25,
//     tevellud: function() {
//         return new Date().getFullYear() - this.yas
//     },
//     fullname: function() {
//         return this.ad + " " + this.soyad
//     }
// }

// console.log(typeof Person);

// // console.log(Person.tevellud())
// // console.log(Person.fullname())


// // var colors = ['red','yellow','green','black',true,null,''];
// // console.log(colors);

// function Change() {
//     document.body.style.backgroundColor = 'red'
// }


// console.log(typeof Change());


// function Double() {
//     document.body.style.backgroundColor = 'green'
// }


// typeof

// PRINT TO SCREEN

// console
// console.error('Error 404 Not Found')
// console.warn('It is warning')

// var groupName = 'P324';
// document.write('Hello ' + groupName)


// alert
// alert('Hello')

// innerHTML // innerText

// function Add() {
//     document.getElementById('group').innerText = '<i>P324</i>'
// }

// // OPERATORS
// // Arithmetic (+ - * / %)
// // Logical (&& || !)
// // Comparison( > < >= <= = == ===)

// var num1 = 20;
// var num2 = 7;

// var x = 15;
// var y = "15";
// console.log(y);

// x==y
// x===y

// console.log(num1*num2);
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1/num2);

// Conditions

// var ad = 'Elsen';
// var yas = 25;

// if(ad === 'Ismayil' ||  yas > 20) {
//     alert('Welcome ' + ad)
// }
// else{
//     alert('Ad duzgun deyil')
// }


// DATE 

// var date = new Date();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();

// var time = h + ":" + m + ":" + s;
// console.log(time);

// document.write(Date.now())


// var day = new Date().getDay();

// switch(day) {
//     case 0:
//         alert('Sunday');
//         break;
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     default:
//         alert('Hec biri');
//         break;
// }


// MATH

// min,max,PI,round,ceil,floor,abs,trunc,pow,sqrt

// console.log(Math.min(10,20,30,40,50,60));
// console.log(Math.max(10,20,30,40,50,60));
// console.log(Math.round(5.2));
// console.log(Math.ceil(5.2));
// console.log(Math.ceil(5.9));

// var x= -4
// console.log(Math.abs(x));
// console.log(Math.trunc(5.4));
// console.log(Math.pow(5,5));
// console.log(Math.sqrt(10));

// var texmin = Math.floor(Math.random() * 100)
// console.log(texmin);
// console.log(Math.PI);

// var x = 20;
// var y = '20';

// if(x === y) {
//     alert('Salam')
// }
// else{
//     alert('Sagol')
// }

