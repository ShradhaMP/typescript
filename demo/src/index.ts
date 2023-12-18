// class user{
//        name:string
//        private email:string
//        readonly city:string="Jaipur"
//        constructor(name:string,email:string){
//               this.name=name;
//               this.email=email;
//        }
// }
class user{
       readonly city:string="Jaipur"
       _courseCount:number=1;
       constructor(public name:string,public email:string,private userId:string)
       {
       }

       get getEmailAccount():string{
              return `email is${this.email}`
       }

       get courseCount():number{
              return this._courseCount;
       }      

       set courseCount(coursenum){
              if(coursenum<=1){
                     throw new Error("number shoould be more than one")
              }
              else{
                     this._courseCount=coursenum;
              }
       }
}

const srd=new user("shraddha","srd@mail.com","srd123");
// srd.city="delhi"
let val=srd._courseCount;
console.log(val);

//setter call
srd._courseCount=10;

console.log(srd._courseCount);

//interface
interface takePhoto{
       cameraMode:string,
       filter:string,
       burst:string
}

interface short{
       createStory():number;
}

class instagram implements takePhoto{
       constructor(
              public cameraMode:string,
              public filter:string,
              public burst:string
       ){}
}

class youtube implements takePhoto,short{
       constructor(
              public cameraMode:string,
              public filter:string,
              public burst:string,
              public shrot:string
       ){}

       createStory(): number {
           return 2;
       }
}

//Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
//Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (inherited from).

abstract class Animal{
       constructor(public name:string,public race:string){}
       //abstract method so should no have implementation
       abstract produceSound():string
       //general methods
       sound():void{
              console.log("zzzz");     
       }

}

// const myObj=new Animal();  -->Cannot create an instance of abstract class


class pig extends Animal{
       constructor(
              public name:string,
              public race:string,
              public active:boolean
       ){
              super(name,race);
       }
       //All the abstract method needed to be implemented here
       produceSound(): string {
           return "werwe"
       }
}

const myAni=new pig("piggy","genre",true);

//Generics

//Here we are trying to take the argument and return the same data type og argument
//Without generics, we would either have to give the identity function a specific type:
function identityOne(arg: number): number {
       return arg;
}

//Without generics, we would either have to give the identity function a specific type:
//Here using any is a very bad idea as we might recive a number but return a string
function identityTwo(arg: any): any {
       return arg;
}

//Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
function identitythree<Type>(arg: Type): Type {
       return arg;
}

//Here we are passing number so type is captured  as number so the value that is returned should be a number only
let value=identitythree(2);

function identityFour<T>(arg:T):T{
       return arg;
}

let res=identityFour("string")

