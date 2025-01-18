//abstract data types
//როცა რაღაც მონაკვეთი გატანებულია ფუნქციაზე,რაღაცასაკეთებს,უბრალოდ
//არ ვუფიქტდებით რასაკეთებს, ეგ აარის აბსტრაქტული.
// interface - ობიექტის შიგთავსს რაშიც ვწერ ფროფერთები მეთოდები ინტერფეისის ნაწილია
//ობიექტის ინტერფეისია
//methods- ისეთი ფროფერთი,რომელიც ფუნქციაცაა მაგას მეთოდი ჰქვია.
// let person = {
//     name: 'sergi',
//     sayMyName: function(){
//         console.log(this.name)
//     }
// }
// person.sayMyName()

//1. Creating and Accessing Objects and Arrays
//Objects
//Objects are used to store data, where each property has a name (key) and a corresponding value (value).
// const person = {
//     name: 'Sergi',
//     age: 25,
//     greet: function() {
//       console.log('Hello!');
//     }
//   };
  
//   // Accessing properties
//   console.log(person.name);  // Output: Sergi
//   console.log(person['age']);  // Output: 25
  
//   // Calling method
//   person.greet();  // Output: Hello!

//arrays

//prototypes - ჩაშენებული ფუნქციებივით არის
//create ქმნის ახალ ობიექტს
// let protoRabbit = {
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   };
//   let blackRabbit = Object.create(protoRabbit);
//   blackRabbit.type = "black";
//   blackRabbit.speak("I am fear and darkness");

// ufro naklebis wera gviwevs shekmnisas funqciashi ro gavitanet
// let protoRabbit = {
//     speak(line){
//         console.log(`the ${this.type} rabbit says ${line}`)
//     }
// }
// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
//   }
//   let blackRabbit = makeRabbit('black')

//   blackRabbit.speak('hello');
// let userPrototype = {
//     withdraw(){
//         this.credit = 0
//     }
// }
// function newUser(name,credit){
//     const user = Object.create(userPrototype)
//     user.name = name;
//     user.credit = credit;
//     return user;
// }
// let sergi = newUser('sergi',100000)
// console.log(sergi)

//classes
// class Rabbit {
//     constructor(type) {
//       this.type = type;
//     }
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   }
//   let black = new Rabbit('black')
//   console.log(black.speak('aeee'))
// esec shegvidzlia shekmna 
// function ArchaicRabbit(type) {
//     this.type = type;
//   }
//   ArchaicRabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   };
//   let oldSchoolRabbit = new ArchaicRabbit("old school");
//   console.log(oldSchoolRabbit.speak())
//asve shegvidzlia mere shevkmnat prototipit withdraw da kvelaferi

//overriding derived properties
// roca prototipshi rame metodi arsebobs da igive saxelit shevkmnit
//axal metods da sxva rames mivanichebt overriding hqvia

//maps 
//igive obuiektia prototipis gareshe.obiektis dabadeba carieli furclidan
//gansxvavebuli ak chaweris stili. axal maps ro vkmnit new Map()
// setit vamatebt, key values ra.ori argumenti unda
// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → false


//OOP 
//class constructor

// let protoPerson = {
//     sayHello(){
//         console.log('hello')
//     }
// }
// function createPerson(name){
//     const newPerson = Object.create(protoPerson)
//     newPerson.name = name;
//     return newPerson;
// }
// let person1 = createPerson('sergi')
// console.log(person1.sayHello())
//classebi igive prototipebi arian,sadac vwert obiektis shigtavss,
// ra metodebi unda hqondet mag klasidan gamomaval obiektebs da asheshemdeg

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log('hi')
//     }
// }
// const person2 = new Person(`gio`)
// console.log(person2.sayHello())

//polymotphism
//მეთოდების გადაწერა არის პოლიმორფიზმი
// Define Rabbit constructor function
// function Rabbit(type) {
//     this.type = type;
//   }
  
//   Rabbit.prototype.toString = function() {
//     return `a ${this.type} rabbit`;
//   };
  
//   let killerRabbit = new Rabbit("killer");
  
//   console.log(String(killerRabbit));  
  
  // → a killer rabbit
//getter setter static
// getter - ragac momentebshi egreve ver vwvdebit magalitad saxelis 
//amehsmetxvevashi, da amitom vkmnit, marto shignidan shegveedzleba
//miwvdoma shignita metodit
//setter - obiektshi chawera,shecvla

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`${this.name} says hi`);
//     }

//     get saxeli() {
//         return this.name;
//     }

//     set saxeli(newName) {  // change 'Name' to 'saxeli' to match the getter
//         this.name = newName;
//     }
// }

// let person1 = new Person('sergi');
// person1.saxeli = 'beqa';  // use 'saxeli' instead of 'Name'
// console.log(person1.saxeli);  // Output: 'beqa'

//static
//ragac momentebi sheileba ikos roca klass ar hqondes konstruktori
//da mxolod hqondes metodebi.propertebi ar aqvs,
//amdros shegvidzlia gamovikenot static,objectebis shekmna agar gvchirdeba
//shegvidzlia egreve klasze gamovikenot metodebi
//win ewereba static, tore error ikneba,
// class Cart {
//     static clearCart(){
//         console.log('cart is clear')
//     }
// }
// Cart.clearCart()

//inheritance  memkvidreobitoba, mshobeli klasidan shvili klasis
// mier igive metodebis wamogeba. simravle da kvesimravle.
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log(`${this.name} says hello`)
//     }
// }
// let person1 =  new Person('sergu')
// console.log(person1)
//student klasi axangrdzlivebs person klass ra
//ikidan info wamovida da ak kide daemateba
//super wamoigebs mshobeli klasis konstruktors,
// konstruktorshi ra parametric mekneba isini gadadian 
// class Student extends Person {
//     constructor(name,grade){
//         super(name)
//         this.grade = grade;
//     }

// }
// const student1 = new Student('sergi',100)
// console.log(student1.sayHello())

// class Bachelor extends Student {
//     constructor(name,grade,degree){
//         super(name,grade)
//         this.degree = degree
//     }
// }
// const bachelor1 = new Bachelor( 'nika' ,90, 'xarisxi')
// console.log(bachelor1)

//encapsulation
//damaluli propertebis temaa, garedan ar shegvidzlia wvdoma
//wvdoma shegvidzlia ubralod programistebs shoris iko eseti midgoma
// _ sadac ewera, magas ar wvdebodnen, ise ki modis ro vakonsolebt
//magram es ro ewera eseigi damaluls nishnavda
//constructoris magla unda ganvsazgvrot  private propert
class Person {
    #credit
    constructor(name,credit){
        this.name = name
        this.#credit = credit
    }
    sayHello(){
        console.log(`${this.name} says hello`)
    }
    //amshemtxvevashi amas ro gamovidzaxebt mere gamova credit,
    get credit(){
        return this.#credit;
    }
    set credit(newCredit){
        this.#credit = newCredit
    }
}
const person1 = new Person('sergi', 100)
console.log(person1.credit)
person1.credit = 200;
console.log(person1.credit)
