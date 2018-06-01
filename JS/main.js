//Ziaul
// comment single line
/*
	multiline comment
*/

// allatrs on the pop-up
// alert("Hello World from JS. My first JS");
// alert("Hello World")

// you are wrirting to console
console.log("Hello World from JS. My second JS");

/* 	This way we are calling 'function change()' in index.html page
	by the id indicated thir as 'txtChange'. Below is an example of the functoin
	this function change the taxt upon clicking it, as well as the backgorund color
	when the text is clicked
 */
function change(){
	document.getElementById('txtChange').innerHTML = "NEW TEXT";
	document.getElementById("txtChange").style.backgroundColor = "red";
}

/* 	Here we are calling 'function change2()' in index.html page
	by the id indicated thir as 'addText'. Below is an example of the function
	this function adds the taxt at the end upon clicking it, as well as the backgorund color
	when the text is clicked
 */
function change2(){
	var td1 = document.getElementById('addText');
	var text = document.createTextNode(" added some text");
	td1.appendChild(text);
	document.getElementById("addText").style.backgroundColor = "red";
}


/* This is basically changing the text to interger in the html*/
function change3(){
	n = 10;
	document.getElementById('txtChange3').innerHTML = n;
	document.getElementById("txtChange3").style.backgroundColor = "red";
}

// function change4(){
// 	var td1 = document.getElementById('mathOpr');
// 	var opr = 2+2
// 	var text = document.getElementById('txtChange4').innerHTML = opr;
// 	td1.appendChild(text);
// }

//adding two var and desplay on the browser as alart
var x = 123;
var y = 456;
var result = x+y;
console.log(result);
alert("123 + 456 = " + result);

//display info to html page including array
function aboutInfo(){
	firstName = "First: Jhon";
	lastName = "Last: Smith";
	var hobbis = ["car", " travel"," gardening"," hangout with family and friends"];
	document.getElementById('txtChange5').innerHTML = firstName +"<br>"+ lastName +"<br>"+ hobbis;
	document.getElementById("txtChange5").style.backgroundColor = "red";
}

//sending array to console logging
var user = {firstName: 'Jhon', lastName: 'Smith', birthday: '12/12/1995', hobbies: ["car", " travel"," gardening"," hangout"]};
console.log(user['firstName'] .toUpperCase());
console.log(user['lastName'] .toLowerCase());
console.log(user['hobbies']);


//for local and global var
var x = 10; //global
function printIt(){
	var x = 20;	//local var
	console.log(x);
}

printIt();
console.log(x);

//block scope
var d = 10; // you give this diffrent name
function hallo(){
	if(true){
		var c = 2;  
	}
	console.log(c); 
	// returns 2, not the global value 10
	// implication: variables don't have a 
	// separate scope within a block}
}
hallo()



/* ->->The reason this is undefined is bacuese you are not providing any
	any value to you function rather you are passing a variable with value
	that has not been initiated.*/
function haha(argument_uno){
	console.log(argument_uno);
}
haha("hello");
//>>"hello"

//console.log(argument_uno);
//>>ReferenceError: argument_uno is not defined
// ->-> correct way is: console.log(argument_uno("Hi there"));

// using conditional as well as a demo that var can hold conditional vlaues
function conditional(grade){
	
	// var as condition
	var t = grade>60;

	if(t){
		console.log("pass!!!");
	}else{
		console.log("fail :(");
	}
}
conditional(96);

//same as above with diffrent condition and statements
function conditional2(variable){
	
	// var as condition
	var t = variable > 10;

	if(t){
		console.log("Variable passed grater than 10.");
		console.log("Variable passed was: " + variable );
	}else if(variable === 10){
		console.log("Variable passed is exactly " + variable );
	}else{
		console.log("Variable passed less than 10.");
		console.log("Variable passed was: " + variable );
	}
}
//passing the values to the function
conditional2(96);
conditional2(7);
conditional2(10);

// function that takes two argument and adds those two numbers and return the sum
function retValue(x,y){
	sum = x+y;
	return sum;
}
// calling the function above
console.log("The sum: " + retValue(7,8));

/* a func, on that takes any string as an argument and console 
logs to the user the text they've entered*/
function textString(str){
	console.log("String Entered: " + str);
}
// calling the function above
textString("Hello, I'm tired now after a long day coding.");

// a func, on that takes no arguments but prints something to the console
function textDisp(){
	console.log("Some text");
}
// calling the function above
textDisp();

//open door with numbers to win prize
function doorPrize(val){
	if(val == 1){
		console.log("$100");
	}else if (val == 2){
		console.log("$150");
	}else if (val == 3){
		console.log("$1500");
	}else{
		console.log("Sorry you didn't win");
	}
}
// calling the function above to test val
doorPrize(1);
doorPrize(1);
doorPrize(3);
doorPrize(6);
doorPrize("hello");

// for loop in JS to print 0-9
for (var i = 1; i >= 10; i++) {
	console.log(i);
}

// incrementing i by 2
for (var i = 1; i >= 10; i = i + 2) {
	console.log(i);
}

// for loop by order
beers = ["Lagunitas", "Peak", "Budlite"]
for(var i = 0; i< beers.length; i++){
	console.log(beers[i]);
}

// for loop by reverse order
for(var i = beers.length -1; i>=0; i--){
	console.log(beers[i]);
}

//While loop checking the value untill it becomes false
x = 6;
while(x < 10){
	console.log("On number " + x)
	x++;
}

// Exercise for loop
/*  Create an array filled with several strings of names
 	Use a loop to print out the names, followed by 'is my friend'.*/
var namesArray = ["Jake","John","Samantha","Billy"];
for(var i = 0; i< namesArray.length; i++){
	console.log(namesArray[i] + " is my friend");
}

// 99 bottles of beer song exercise
x = 99;
console.log(x + 'bottles of root beer');
while(x >= 0){
	if (x > 0) {
		console.log(x + 'bottles of root beer...take one down, pass it around');
	}else if (x === 0){
		console.log('NOooo bottles of root beer');
	}
	x--;
}

