
console.log("==============length =================");

var greets = "Good Morning";
var greetsChars = greets.length;
console.log("Total No of Greets Chars: " , greetsChars);

console.log("============== charAt() ================");
var  charAt0 = greets.charAt(0)
console.log("Characters of index 0 is: " , charAt0);

var  charAt9 = greets.charAt(9)
console.log("Characters of index 9 is: " , charAt9);


var sentence = "Zoom Video Communications, Inc. is a communications technology company headquartered in San Jose, California"
var totalLength = sentence.length;
var lastChars = sentence.charAt(totalLength-1);
console.log("Last Chars Is: " , lastChars);


console.log("============== indexOf() ==================");

var indexOfMethod = "Good Morning";
var indexOfM =  indexOfMethod.indexOf('M');
console.log("Index Of M is: " , indexOfM);


console.log("============ concat () ======================");
var firstName = "Ajay";
var lastName = "Kamble";
console.log("Use Of Concat: ", firstName.concat(lastName));