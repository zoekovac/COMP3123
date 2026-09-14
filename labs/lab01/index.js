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
