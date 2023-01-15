function findFirstDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// imagine you have a big jar full of different colored marbles and you want to find the first marble 
// that is the same color as another marble in the jar.

// To do this, we can use a special helper called a "set".
//  A set is like a special bag where we can put the marbles in and it will only allow one of each color.

// We'll take the marbles out of the jar one by one and put 
// them in the special bag. If the marble is a new color that we haven't seen before, we'll add it to the bag. But if the marble is a color we've already seen, that means it's the first duplicate we found and we'll stop and return it.

// // So the computer is doing the same thing as putting the marbles in the special bag but with the help of a set. 
// And the set will only keep one of each color and if the computer encounters a marble of the same color as one it's already seen, it will return that marble as the first duplicate. If it goes through all the marbles and doesn't find a duplicate it will return -1