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
    if (Number %  2 === 0){
        return "true";
    } else {
        return "false";
}
}
const NumDig = Number(prompt('enter a number')); 
const result1 = isEven(NumDig);
console.log(result1);

// //Question 4: Score Categorizer:
function scoreCategory(score){
    score = Number(score);
    if (score >= 90 && score <= 100)
    {
        return 'Excellent';
    }
    else if (score >= 80 && score <= 89 ) 
    {
        return 'Very good';
    } 
    else if (score >= 70 && score <= 79 )
    {
        return 'Pass';
    }
    else if ( score < 70 )
    {
        return' fail';
    } else (score >= 0 && score > 100)
    {
    return 'out of bound';
    }
}
const scoreRev = (prompt('enter a score'));
const result2 = scoreCategory(scoreRev);
console.log(result2);