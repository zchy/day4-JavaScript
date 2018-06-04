// ex2
// JavaScript objects 
var myCar = { 
	brand: "Toyota", 
	model: "RAV4", 
	wheels: 4,
	doors: 4,
	color: "gray",
	price: "$28,000"
}
//dot notation
// call it by 
// myCar.brand


// ex2
// object through a func2 on, known as a constructor
function Car(brand, wheels){
	this.brand = brand;
	this.wheels = wheels;
}
// here we are instantiating a new instance of Car as reusing the code
var myCar2 = new Car("toyota", 4);
// we can create as many cars as we'd like!
var someOtherCar = new Car("maserati", 4);


// ex3
// square bracket notaoon
var myCar = {   
	brand: "Prius",
	"has-leather": false
}
//call it by
//myCar["has-leather"]

// ex4
// object literals
var myCar = {  
	brand: "Prius",  
	friendlyBrand: function() {
		return"Your car's brand is " + this.brand;  
	}
}
// call it by
// myCar.friendlyBrand()


// Exercise page: 11
function phone(brand, wheels){
	this.brand = brand;
	this.screen = screen;
}
var firstPhone = new phone("OnePlus", 5.5);
var someOtherPhone = new phone("apple", 4.8);


// Exercise page: 16
var myPC = {  
	brand: "Apple",
	model: "MacBook Air",  
	friendlyBrand: function() {
		return"Your PC's brand is " + this.brand + "\nYour PC's model is " + this.model;  
	}
}
// call it by
// myPC.friendlyBrand()


// ex5
// prototype using ex2
function Car2(brand, wheels) {
	this.brand = brand;
	this.wheels = wheels;
}

// add a method or attribute to the parent object
//by using the object's prototype
Car2.prototype.friendlyBrand = function() {
	return"This car's brand is " + this.brand;
}

// define the new Car objec
myCar3 = new Car2("Honda", 4);
// call it by 
myCar.friendlyBrand()
// >>> "This car's brand is Toyota"


//Prototype ex, page 20
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var person1 = new Person("John", "Smith", 30);
var person2 = new Person("Sally", "Rally", 8);

Person.prototype.pName = function() {
    return this.firstName + " " + this.lastName + "\nAge: " + this.age
};

console.log(person1.pName());
console.log(person2.pName());


// //Coding example 24
// // define the Admin constructor
// functionAnimal(name, age){
// 	this.animal = animal

// 	// call User constructor  
// 	User.call(this, name, age);
// }

// // admin now has all of the prototype methods of a User
// animal.prototype = Object.create(User.prototype);

// // create a new admin
// var newAnimal = new animal("Mamal", "Tod", "2 years")

// // because the Admin prototype was set to mirror
// //  the User prototype we can now use the fullName() method on 
// console.log(newAnimal.fullName())

// function User(fname, lname, email){this.fname = fname;this.lname = lname;this.email = email;}

// function Admin(fname, lname, email, admin){this.admin = admin
// 	User.call(this, fname, lname, email);}

// Admin.prototype = Object.create(User.prototype);
// var newAdmin = new Admin("Orlando", "Caraballo", "o@email.com", true)
// newAdmin.fullName();


















