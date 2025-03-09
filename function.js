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

//Assignment 
//Question 1: Rectangle Area Calculator:
function calculateArea(length , width){
    return length * width;
}
console.log(calculateArea(50, 40));

//Question 2: String Reverser

function reverseString(word){

    //To create an empty string 
    let newString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newString += word[i];
    }
    return newString;
}

//Taking input from the user
const letter = prompt('enter a word');
const result = reverseString(letter);
console.log(result);

// // Question 3: Even Number Checker
function isEven(Number){
    if (Number %  2 == 0){
        return "true";
    } else {
        return "false";
}
}
const NumDig = prompt('enter a number');
const result1 = isEven(NumDig);
console.log(result1);

// //Question 4: Score Categorizer:
function scoreCategory(score){
    if(score == 100 && score >= 90 );
    {
        return 'Excellent';
    }
    elseif(score >= 80 && score <= 89 ) ;
    {
        return 'Very good';
    } 
    elseif(score >= 70 && score <= 79 );
    {
        return 'Pass';
    }
    elseif( score < 70 );
    {
        return' fail';
    } elseif(score > 100);
    {
    return 'out of bound';
    }
}
const scoreRev = prompt('enter a score');
const result2 = scoreCategory(scoreRev);
console.log(result2);