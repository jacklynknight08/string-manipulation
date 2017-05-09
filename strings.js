// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters
// in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical
// order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a
// palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below
// the text input.
// When the user presses the enter key in the text input, or clicks the button, set the
// value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

console.log("String Manipulation Exercise");

// function alphabetOnly(event) {
// 	var key = event.keyCode;
// 	return ((key >= 65 && key <= 90) || key == 8);
// };

var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");
var testString = "";


function reversal(string) {
	var reverseChar = string.split("").reverse().join("");
	output.innerHTML += `<p>${reverseChar}</p>`;
}

function alphabits(string) {
	var alphabeticalOrder = string.split("").sort("").join("");
	output.innerHTML += `<p>${alphabeticalOrder}</p>`;

}

function palindrome(string) {
	var palindromeStr = string.split("").reverse().join("");
	if (palindromeStr == string) {
		output.innerHTML += `<p>This is a palindrome</p>`;
	}else {
		output.innerHTML += `<p>Not a palindrome</p>`;
	}
}

input.addEventListener("keypress", function(event){
	if(event.which === 13){
		testString += input.value;
		output.innerHTML = testString;

		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}
});

