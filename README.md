# JavaScript Functions Assignment

This repository contains my solutions for the JavaScript functions assignment.

## Instructions

1. Clone the repository: `git clone [repository URL]`
2. Open the `index.html` file in your browser.
3. View the results in the console or on the webpage.

## Functions

### 1. calculateArea(length, width)

Calculates the area of a rectangle.

**Example:**

```javascript
calculateArea(5, 10); // Returns 50
```

### 2. reverseString(word)

Reverses a given string.

**Example:**

```javascript
reverseString("hello"); // Returns "olleh"
```

### 3. isEven(Number)

Checks whether a given number is even.

**Example:**

```javascript
isEven(4); // Returns true
isEven(7); // Returns false
```

### 4. scoreCategory(score)

Categorizes a given score into different performance levels.

**Example:**

```javascript
scoreCategory(95); // Returns "Excellent"
scoreCategory(85); // Returns "Very good"
scoreCategory(75); // Returns "Pass"
scoreCategory(60); // Returns "Fail"
scoreCategory(120); // Returns "Out of bound"
```

## Test Results

### calculateArea

| Input  | Expected Output | Actual Output |
|--------|----------------|---------------|
| (5, 10) | 50             | 50            |
| (0, 8)  | 0              | 0             |
| (3.5, 2) | 7             | 7             |

### reverseString

| Input       | Expected Output | Actual Output |
|------------|----------------|---------------|
| "javascript" | "tpircsavaj"   | "tpircsavaj"  |
| ""          | ""              | ""            |
| "madam"     | "madam"         | "madam"       |

### isEven

| Input | Expected Output | Actual Output |
|--------|----------------|---------------|
| 4      | true           | true          |
| 7      | false          | false         |
| 0      | true           | true          |

### scoreCategory

| Input  | Expected Output | Actual Output |
|--------|----------------|---------------|
| 95     | "Excellent"     | "Excellent"   |
| 85     | "Very good"     | "Very good"   |
| 75     | "Pass"          | "Pass"        |
| 60     | "Fail"          | "Fail"        |
| 120    | "Out of bound"  | "Out of bound"|

---

### Notes
- All functions were tested in a browser console.
- The `prompt()` function was used to take user input for `reverseString`, `isEven`, and `scoreCategory` functions.
- Input values were properly converted to numbers where necessary to avoid unexpected behavior.

This repository serves as a demonstration of fundamental JavaScript function handling.

