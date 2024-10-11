// Write a JavaScript program that takes an array containing elements of various types (such as strings, numbers, booleans, and nested arrays) and counts the total number of strings, numbers, and booleans in the entire array (including nested arrays).

// let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];


// Output example:
// Numbers: countOfNum
// String: countOfStr
// Bool: countOfBool.

function countTypes(arr) {
    let countOfStr = 0;
    let countOfNum = 0;
    let countOfBool = 0;

    function countElements(element) {
        if (Array.isArray(element)) {
            // If the element is an array, recursively count its elements
            for (const item of element) {
                countElements(item);
            }
        } else {
            // Check the type of the element and increment the respective counter
            if (typeof element === 'string') {
                countOfStr++;
            } else if (typeof element === 'number') {
                countOfNum++;
            } else if (typeof element === 'boolean') {
                countOfBool++;
            }
        }
    }

    // Start counting elements in the initial array
    countElements(arr);

    // Output the results
    alert(`Numbers: ${countOfNum}`);
    alert(`Strings: ${countOfStr}`);
    alert(`Booleans: ${countOfBool}`);
}

// Test the function with the provided array
let arr =["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];
countTypes(arr);
