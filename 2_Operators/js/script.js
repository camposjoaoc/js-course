// 1 - Number
//This section uses typeof to check the type of various numbers, all of which should be of type number.
console.log(typeof 2);       // Output: "number"
console.log(typeof 5.14);    // Output: "number"
console.log(typeof -32);     // Output: "number"
console.log(typeof -.32);    // Output: "number"

// 2 - Operators - arithmetic
//This section demonstrates basic arithmetic operations.
console.log(2 + 4);          // Output: 6
console.log(10 - 5);         // Output: 5
console.log(5 * 4);          // Output: 20
console.log(10 / 2);         // Output: 5

console.log(5 + (4 * 2));    // Output: 13 (due to operator precedence)

// 3 - Special Numbers
//This section shows some special numeric values, such as Infinity, -Infinity, and NaN (Not-a-Number), and checks their types.
console.log(typeof Infinity);    // Output: "number"
console.log(typeof -Infinity);   // Output: "number"
console.log(12 * "asdfg");       // Output: NaN (since "asdfg" is not a number)
console.log(typeof NaN);         // Output: "number"

// 4 - Strings
//This section introduces string values using different quotation marks and checks their types.
console.log("hello");            // Output: "hello"
console.log(`world`);            // Output: "world"
console.log(`123`);              // Output: "123" (a string, not a number)

console.log(typeof "hello");     // Output: "string"
console.log(typeof `world`);     // Output: "string"

// 5 - Special symbols in strings
//Special characters are used within strings for formatting, such as new lines, tabs, and Unicode symbols.
console.log("Testing \n break line ");  // Output: "Testing" (new line) "break line"
console.log("Testing \t tab ");         // Output: "Testing    tab" (tab space after "Testing")
console.log("Testing \u00A9 copyright "); // Output: "Testing © copyright" (copyright symbol)

// 6 - Concatenation
//Concatenation combines strings using the + operator.
console.log("Hello" + "World");             // Output: "HelloWorld"
console.log("Hi!" + " How" + " are" + " you?"); // Output: "Hi! How are you?"
console.log(`Testing` + ` 123`);            // Output: "Testing 123"

// 7 - Interpolation (Template Strings)
//Template strings (or template literals) allow embedding expressions inside strings with ${expression}.
console.log(`The sum of 2 + 2 is: ${2 + 2}`); // Output: "The sum of 2 + 2 is: 4"
console.log(`We can execute anything here ${console.log("Test")}`);
// First, "Test" is printed from the inner console.log; then the outer string logs "We can execute anything here undefined"
//The second log will output undefined as console.log("Test") doesn’t return a value.

// 8 - Boolean
//Booleans represent true / false values and are used in logical expressions.
console.log(true);             // Output: true
console.log(false);            // Output: false
console.log(5 > 20);           // Output: false
console.log(30 >= 10);         // Output: true

// 9 - Comparations
//Comparison operators are used in programming to compare values and determine if an expression is true or false.
//Here are the main comparison operators:
// Equal to (==)
console.log(5 == 5); // true

// Not equal to (!=)
console.log(5 != 3); // true

// Greater than (>)
console.log(10 > 5); // true

// Less than (<)
console.log(3 < 8); // true

// Greater than or equal to (>=)
console.log(5 >= 5); // true

// Less than or equal to (<=)
console.log(3 <= 7); // true

// 10 - Identical value comparison
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Logic Operators
//Logical operators are used in programming to combine or invert boolean expressions. 
//Here are the main logical operators:
// AND (&&)
console.log(5 > 3 && 8 > 5); // true
console.log(5 > 3 && 8 < 5); // false

// OR (||)
console.log(5 > 3 || 8 < 5); // true
console.log(5 < 3 || 8 < 5); // false

// NOT (!)
console.log(!(5 > 3)); // false
console.log(!(5 < 3)); // true

// 11.1 - True Table
//A truth table is a tool used in logic and mathematics to show all possible combinations of true and false values ​​of propositions (logical expressions) and their results. 
//In programming and logic, truth tables are very useful for understanding the behavior of logical operators.

//Each logical operator has its own truth table.
//Below are the truth tables for the basic logical operators: AND, OR, and NOT.
// Truth Table for the AND Operator (&&)
console.log("Tabela AND (&&):");
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Truth Table for the OR Operator (||)
console.log("Tabela OR (||):");
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Truth Table for the NOT Operator (!)
console.log("Tabela NOT (!):");
console.log(!true);  // false
console.log(!false); // true

// 11.2 - More Examples (Logic Operators)
console.log(5 > 2 && 2 < 10); //true

console.log(5 > 2 && "João" === 1); //false

console.log(5 > 2 || "João" === 1); //false

console.log(5 > 2 && 5 === 1); //false

console.log(!5 > 2); //true

// 12 - Empty Values (undefined and null)
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Change of Types
//In JavaScript, type coercion occurs when values are converted from one type to another, either implicitly (automatic) or explicitly (forced). 
//Type coercion is common in many programming languages and is useful for performing operations between different data types.

//JavaScript automatically converts types in certain operations, known as implicit coercion. 
//This happens, for example, when using the + operator to add a number to a string.
console.log("5" + 2);    // "52" (number 2 is converted to string and concatenated)
console.log("5" - 2);    // 3 (string "5" is converted to a number, and subtraction is performed)
console.log(true + 1);   // 2 (true is converted to 1)
console.log(false + 1);  // 1 (false is converted to 0)


//Explicit Type Coercion
//You can force type conversion in JavaScript using functions like Number(), String(), Boolean(), and others.

//Converting to Number
//Use Number() to convert strings or boolean values to numbers.
console.log(Number("5"));         // 5
console.log(Number("5.5"));       // 5.5
console.log(Number("text"));      // NaN (Not a Number)
console.log(Number(true));        // 1
console.log(Number(false));       // 0


//Converting to String
//Use String() to convert numbers or booleans to strings.
console.log(String(5));           // "5"
console.log(String(5.5));         // "5.5"
console.log(String(true));        // "true"
console.log(String(false));       // "false"


//Converting to Boolean
//Use Boolean() to convert values to booleans.In JavaScript, some values are considered falsy(false) and others are truthy(true):

//Falsy values: 0, ""(empty string), null, undefined, NaN, and false.
//Truthy values: any value that is not falsy.
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean("text"));     // true
console.log(Boolean(5));          // true
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false

//Practical Example
//In a scenario where a user input is a string representing a number, you may need to convert it to a number before performing calculations:
let userInput = "25";          // string
let age = Number(userInput);    // converted to number
console.log(age + 5);           // 30


//More examples
console.log(5 * null);           // 0

console.log("Test" * "Hej!");   // NaN

console.log("10" + 1);          //101

console.log("10" - 1);          //9
