function hasTargetSum(array, target) {
  // Write your algorithm here
  const visited = new Set();

  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    // calculate the complement of the current number
    const complement = target - array[i];
    
    // check if the complement has been visited before
    if (visited.has(complement)) {
      // if yes, we found a pair that adds up to the target
      return true;
    }
    
    // add the current number to the visited set
    visited.add(array[i]);
  }
  
  // if we reach this point, we didn't find a pair that adds up to the target
  return false;
}


/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n), where n is the length of the input array. This is because the function uses a single loop to iterate through the array once and check if the difference between the target and each element is already in the set. The set lookup operation takes constant time on average, so it does not affect the overall time complexity. Therefore, the time complexity of the function is linear with respect to the size of the input.

*/

/* 
  Add your pseudocode here
  Define a function named "hasTargetSum" that takes two arguments: "arr" and "target"
Initialize an empty object named "hashTable"
Loop through the array "arr" from index 0 to its last index
Subtract the current element from the target and store the result in a variable named "difference"
Check if the "hashTable" contains the "difference" as a key
If the key is present, return true
If the key is not present, add the current element as a key to the "hashTable" with a value of 1
Continue to the next iteration of the loop until all elements have been checked
If no pair of numbers add up to the target, return false
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function works by iterating over the array and checking if the complement of each number has been visited before. If it has, that means we found a pair of numbers that adds up to the target. If we finish iterating over the array and haven't found a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
