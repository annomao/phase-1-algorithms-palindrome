function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("")
  const reversedArray = wordArray.reverse()
  const newWord = reversedArray.join("")
  return word===newWord? true:false

}

/* 
  Add your pseudocode here
  reverse the string
  convert to array
  reverse array and then join the values to create new string
  compare it to original string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("saippuakivikauppias"));
}

module.exports = isPalindrome;
