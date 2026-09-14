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

document.getElementById("exercise1").textContent =
    capitalizeWords("the quick brown fox");

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

document.getElementById("exercise2").textContent =
    `${max(1, 0, 1)}
     ${max(0, -10, -20)}
     ${max(1000, 510, 440)}`;

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

document.getElementById("exercise3").textContent =
    `${right("Python")}
     ${right("JavaScript")}
     ${right("Hi")}`;

console.log("\n==== EXERCISE 3 ====");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// =======================================================================
// EXERCISE 4 – Find the Types of an Angle
// =======================================================================

function angle_type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

document.getElementById("exercise4").textContent =
    `${angle_type(47)}
     ${angle_type(90)}
     ${angle_type(145)}
     ${angle_type(180)}`;

console.log("\n==== EXERCISE 4 ====");
console.log(angle_type(47));
console.log(angle_type(90));
console.log(angle_type(145));
console.log(angle_type(180));

// =======================================================================
// EXERCISE 5 – Find the Maximum Sum of K Consecutive Numbers in an Array
// =======================================================================

function array_max_sum(arr, k) {
    let maxSum = 0;

    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;

        for (let j = i; j < i + k; j++) {
            currentSum += arr[j];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

document.getElementById("exercise5").textContent =
    `${array_max_sum([1, 2, 3, 14, 5], 2)} 
     ${array_max_sum([2, 3, 5, 1, 6], 3)}
     ${array_max_sum([9, 3, 5, 1, 7], 2)}`;

console.log("\n==== EXERCISE 5 ====");
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
