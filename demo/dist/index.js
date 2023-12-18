"use strict";
// class user{
//        name:string
//        private email:string
//        readonly city:string="Jaipur"
//        constructor(name:string,email:string){
//               this.name=name;
//               this.email=email;
//        }
// }
class user {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "Jaipur";
        this._courseCount = 1;
    }
    get getEmailAccount() {
        return `email is${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("number shoould be more than one");
        }
        else {
            this._courseCount = coursenum;
        }
    }
}
const srd = new user("shraddha", "srd@mail.com", "srd123");
// srd.city="delhi"

//getter call
let val = srd._courseCount;
console.log(val);

//setter call
srd._courseCount=10;

console.log(srd._courseCount);

