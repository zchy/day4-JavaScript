// 
// 	Group Members:
// 	Ziaul Choudhury
// 	Sulaiman Jalloh
// 	Mamadou Kaly Diallo 
// 

// JavaScript for form page
// this function takes values from the inputs and validats them using conditional statement
function formCheck() {
	var userName = document.getElementById('username').value;
	var psw = document.getElementById('password').value;
	var h1Tag = document.getElementsByTagName('h1');

	if (psw==12345678 && userName.length > 1) {
			h1Tag[1].innerHTML = "Input Saved.";
	} else {
		alert("Invalid password/username");
	}
}

// JavaScript for keypressed page
// this function takes values from the keypresses/keybord in the input 
// and passes back to html for displaying on the page
function myFunction(event) {
    var x = event.which || event.keyCode;
    console.log(String.fromCharCode(x));
    document.getElementById("keyPassed").innerHTML = "Pressed Key: " + String.fromCharCode(x);
    document.getElementById('myFunction').value = '';
}



























// function changeH1(event){
// 	var x = event.keyCode;
// 	var title = document.getElementsByTagName("h1");
// 	title[0].innerHTML = String.formCharCode(x);

// }