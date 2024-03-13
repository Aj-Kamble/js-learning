
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

console.log("============ replace () ======================");

var greets = "Good Morning";
var replaceMethod = greets.replace("Morning" , "Afternoon");
console.log(`use case of replace method: ${replaceMethod}`);


console.log(`=================== toUpperCase () && toLowerCase==================`);
var greets = "Good Morning";
var greetsInUpperCase = greets.toUpperCase();
console.log(`${greets} is in Upper Case: ${greetsInUpperCase}`);

var greetsInLoweCase = greets.toLowerCase();
console.log(`${greets} is in Lower Case: ${greetsInLoweCase}`);


console.log(`=================== trim () ==================`);
var greets = "   Good Morning   ";
var greetsLength = greets.length;
console.log(`length of greets is: ${greetsLength}`);

var trimUseCase = greets.trim();
console.log(`length of  greets after trim is: ${trimUseCase.length} and its value: ${trimUseCase}` );

var removeSpaceLength = trimUseCase.length;
var result = greetsLength - removeSpaceLength;
console.log(`after removing space in string using trim: ${result}`);


console.log(`==================== include() ====================`);
var fullName = "Ajay Kamble";
var includeMethod = fullName.includes("Ajay")
console.log(`use Case of Include(): ${includeMethod}`);



console.log(`==================== slice () ====================`);

var str = "Software Developer";
var sliceUseCase = str.slice(3, 8);
console.log(`Use Case of Slice: ${sliceUseCase}`);

