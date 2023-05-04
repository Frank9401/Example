// Module package CORE

// const fs = require('fs');
// const { networkInterfaces } = require('os')
// const data = fs.readFileSync('./input.txt','utf-8');
// console.log(data);


// console.log("********************")

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Frank`);
// const new_data = fs.readFileSync("./input.txt", "utf-8");
// console.log(new_data);


// setTimeout(function() {
//     console.log("ishga tushdi");
// }, 500);


// let number = 0;
// setInterval(function() {
//     console.log("hisob", number);
//     number++;
// }, 0);






// Module package EXTERNAL

// const moment = require('moment');

// setInterval(() => {
//   const time = moment().format();
//   console.log(`hozirgi vaqt: ${time}');
// }, 5000);


// const inquirer = require('inquirer');

// inquirer
// .prompt([{type: 'input',name:'raqam',message:'raqamni kiriting?'}])
// .then(answer => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
// })
// .catch((err) => console.log(err));

// const  validator = require ("validator");
// validator.isEmail('foo@bar.com');
// const test = validator.isInt('100');
// console.log("test",test);

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.red(`uuid creates ${random}`));





// Module package FILE

// const calculate = require('./hisob.js');

// const natija = calculate.kupaytirish(80,20);
// console.log('Natija', natija);
// console.log('*************');


// const natija2 = calculate.qushish(70, 20);
// console.log('Natija', natija2);
// console.log('*************');


// const natija3 = calculate.ayirish(70, 20);
// console.log('Natija', natija2);
// console.log('*************');


// console.log(require('module').wrapper);

// console.log(arguments);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("================");

const myAccount = new Account('Frank',400000,46584987154);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

myAccount.withdrawMoney(4000)