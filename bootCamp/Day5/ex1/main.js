//1
// Create a script with two variables, each assigned to a number. Add them together
//  and output the result to the console.
var x = 123;
var y = 456;
var result = x+y;
console.log(result);
console.log("123 + 456 = " + result);

//1
 // Now do the same with two strings.
var str1 = "Hello ";
var str2 = "world";
var result = str1+str2;
console.log(result);
console.log("str1 + str2 = " + result);

//3
// 	 Create a multidimensional array related to a subject
// 	 that interests you. Output two of the items in
//   sub-arrays to the console.
var namesArray = ["Sulaiman","kally","Zia"];
for(var i = 0; i< namesArray.length; i++){
	console.log(i+" "+namesArray[i]);
}
console.log(namesArray[0],namesArray[1]);

//3, 4
// Write a script that checks if a variable is less than 100. If it is, alert the user that 
// their variable is less than 100. If it is not alert the user of what the 
// value was and that it was greater than 100.

// Try running the script and then changing the variable's
//  value to see how this affects the program's output.
function conditional(val){
	
	// var as condition
	var t = val>100;

	if(t){
		alert("grater " + val);
	}else{
		alert("Less " + val);
	}
}
conditional(96);
conditional(111);

//5
// Write a similar script to check 
// if a string stored in a variable is the same as another string.
function myStr(str1, str2) {
    var n = str1.localeCompare(str2);
    if (n == -1){
    	console.log("Not Equal");
    }else
    	console.log("Equal");
}
myStr("aa", "aa");
myStr("ab", "cd");

//6
// Declare a function that takes a name as an argument and tells the user what
// name they've entered. Try running it after it has been declared.
function nameFunc(name){
	console.log("name: " + name);
}
nameFunc("Zia");

//7
// Declare a function that takes no arguments but prints 
// something to the console. Try running it after it has been declared.

function name(){
	console.log("hello theree");
}
name();

// Declare a function that depending upon which virtual 'door' was entered tells the user 
// they've received a different 'prize' in an alert. After declaring the function, 
// try running it with different options. There must be at least 3 doors.
function doorPrize(val){
	if(val == 1){
		alert("$100");
		console.log("$100");
	}else if (val == 2){
		console.log("$500");
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































