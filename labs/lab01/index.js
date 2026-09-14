// COMP 3123 | FULL STACK DEVELOPMENT | LAB 01 | ZOË KOVAC | ID: 101107123

// =======================================================================
// EXERCISE 1 – Capitalize the First Letter of Each Word of a String
// =======================================================================
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log("\n==== EXERCISE 1 ====");
console.log(capitalizeWords("the quick brown fox"));

// =======================================================================
// EXERCISE 2 – Find the Largest of Three Integers
// =======================================================================
function max(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("\n==== EXERCISE 2 ====");
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// =======================================================================
// EXERCISE 3 – Move the Last Three Characters to the Start of a String
// =======================================================================
function right(str) {

    // Return the string unchanged if its length is less than three
    if (str.length < 3) {
        return str;
    }

    return str.slice(-3) + str.slice(0, -3);
}

console.log("\n==== EXERCISE 3 ====");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));