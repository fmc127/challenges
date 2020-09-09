// This file will be for storing coding challenges

// Find the longest word LENGTH in an array

// Start by working through each relevant detail and step in english, not code
// do this by typing it out in pseudo code:

// the input is a string
// the output will be a number

// we know a word is a word because there are spaces on both sides
// break up the string into an array. Which method breaks up a string and returns an array of the broken up words?
// we found that string.split(' ') does what we need. It splits a string into an array and returns that array
// now we need to simply iterate over every index/word in the array. We will do this with a for loop
// in the for loop, in order to iterate through each index, we need to check if `i` is less than the length of the new array
// console.log() to confirm that the for loop is iterating over each index/word and can return the length of the array
// console.log() to confirm that the for loop is iterating over each index/word and can return the length of each index/word
// we need to initiate a variable ABOVE the for loop. The value of this variable is the length of the longest word we've seen thus far. Since we haven't actually seen any words yet, the longest word length thus far is `0`
// now we need to check if each index/word in the new array is longer than the longest word we've seen thus far. That word is still `0`, since we still haven't actually seen any words yet. 
// starting with the first index/word, whenever the index/word length is longer than the longest word we've seen thus far, that index/word length now becomes the longest number we've seen thus far. Then it moves onto the next index/word...etc
// return the longest word
// call the function in a console.log() with the string as the argument

function findLongestWordLength(str) {
  const newArray = str.split(' ')
  let longestWord = 0
  for(let i = 0; i < newArray.length; i++){
        // console.log(newArray.length)
        // console.log(newArray[i].length)
    if(newArray[i].length > longestWord){
      longestWord = newArray[i].length
    }
  }
  // console.log(longestWord)
  return longestWord
}

console.log(findLongestWordLength("Fear urged him to go back, but growth drove him on"))

//================================================================

// practicing making classes

function Guitar(id, make, model, color) {
    this.id = id
    this.make = make
    this.model = model
    this.color = color
    this.effect = function(){
      return "distortion"
    }
  }
  
  Guitar.prototype.addStrings = function(strings) {
    this.strings = strings
  }
  
  Guitar.prototype.addPickups = function(pickups) {
    this.pickups = pickups
  }
  
  const guitar1 = new Guitar(1, "Schecter", "Damien Elite", "maroon, black, clear glaze")
  // const guitar2 = new Guitar(2,)
  
  // console.log(guitar1)
  // console.log(guitar1.__proto__.__proto__)
  
  console.log(guitar1.effect())
  
  console.log(guitar1.addStrings("nickle plated"))
  console.log(guitar1)

  //================================================================