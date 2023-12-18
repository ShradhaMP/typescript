"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Shraddha",
    age: 21
};
console.log(user.name);
// console.log(user.address); -->Gives error in ts but its perfectly correct in js and returns undefined
const message = "Hello world!";
message.toLowerCase();
// message(); -->Gives error as message is not a function
//Type annotation
let branch = "CSE";
//Type infernece
let num = 20; //Type is inferred as number
//Functions
//When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. 
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("shraddha");
function signupUser(name, email, isPaid = false) { }
signupUser("sh", "sh@gma.com", true);
signupUser("sh", "sh@gma.com");
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//Objects
function createUser(person) { }
createUser({ name: "shraddha", isPaid: false });
let usr = {
    name: "shrd",
    isPaid: true,
    email: "shrd@gmail.com"
};
createUser(usr);
const color = ["red", "green", "blue"];
color.map((x) => {
    return `the color is ${x}`;
});
function addUser(user) {
    return { name: "shrd", age: 21, email: "shrd@g.com" };
}
addUser({ name: "shrd", age: 21, email: "shrd@g.com" });
function printCord(pt) {
    console.log("The x coordinate is" + pt.x);
    console.log("The y coordinate is" + pt.y);
}
printCord({ x: 2, y: 3 });
let getUSer = {
    _id: 12345,
    name: "shan",
};
getUSer.name = "shein";
//Arrays
const numbers = [];
const fruits = [];
numbers.push(1);
fruits.push("bannana");
const credDetail = [];
credDetail.push({ name: "dheeraj", dob: "25/10/2001", age: 20 });
//union types
let score = 33;
score = "33";
let srd = { name: "shradhha", isActive: false };
srd = { userName: "srd02", isActive: true };
function getDb(id) {
    if (typeof id === "string")
        id.toLowerCase();
    else
        id.toExponential();
}
getDb(2);
getDb("2");
const data = [1, 2, "red", true];
let pi = 3.142;
// pi=3.1425 -->error
let seatAlloment;
seatAlloment = "asile";
// seatAlloment="crew" -->error
//tuples
let newUSer = ["sr", 32, true];
let rgb = [255, 255, 255];
let myuser = ["srd", "srd@gmail.com"];
myuser[1] = "rd@yahoo.com";
const testArray = [10, 'test'];
testArray.push('test');
const shrd = {
    dbId: 22,
    userId: 12345,
    email: "srd@smail.com",
    startTrail() {
        return "trail started";
    },
    getDiscount(name, value) {
        return 10;
    },
    role: "dev",
    github: "srd@github"
};
shrd.userId = 345;
