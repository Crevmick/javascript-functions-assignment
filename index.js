//Class World
// Extratcting Substring
let stringGive = "JavaScript is Fun!"
let part = stringGive.substring(4, 10)
console.log(part);

// Changing case
let stringText = "hello"
let stringText2 = "WORLD"
let stringTextUpper = stringText.toUpperCase();
let stringTextlowrer = stringText2.toLowerCase();
console.log(stringTextUpper, stringTextlowrer);

//Finding Character
let CheckText = 'Programming'
let resultCheck = CheckText.indexOf('r');
console.log(resultCheck);

//Checking for inclusion
let stringMe = "Web Development"
if (stringMe.substring(0,3) == "Web"){
    console.log("true")
} else {
    console.log("false")
}

// String length
let String = 'Coding is cool'
let CheckString = String.length;
console.log(CheckString);


//Part 2: 
// Replacing Substrings
let stringWord = "i like apples and apples";
let newWord = stringWord.replace("apples", "orange");
console.log(newWord);

//Splitting String 
let stringSplit = "apple,banana,orange";
let stringFruit = stringSplit.split();
console.log(stringFruit);

//Trimming whitespaces: 
let stringExtra = "Extra spaces   ";
let resultString = stringExtra.trim();
console.log(resultString);

// Concatenation 
let text1 = "Front";
let text2 = "end";
let resultText = text1 + text2;
console.log(resultText);

//Repeating strings
let stringRepeat = "Ha";
let ResultRepeat = stringRepeat.repeat(3);
console.log(ResultRepeat);