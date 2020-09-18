// This file will be for coding challenges and random practice problems

//=======================================================================

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

//=======================================================================

// Practice class that I used to experiment with adding values to the class using prototype

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
const guitar2 = new Guitar(2, "Gibson", "Les Paul", "orange, white" )

console.log(guitar1)
console.log(guitar2)
// console.log(guitar1.__proto__.__proto__)

console.log(guitar1.effect())

console.log(guitar1.addStrings("nickle plated"))
console.log(guitar1)

//=======================================================================

// Every once in a while I like to make small for loops like this just to practice different ways of observing recursion
// One way I do this by adding the console.log() with a string and `i` because the output is straight forward
// the output clearly states that 'we are currently in the loop, and this is the #th iteration' 
// this has helped me better grasp recursion

for(let i = 0; i < 5; i++) {
    console.log('in loop: ', i)
  }
  console.log('loop finished')
  
// another small for loop to iterate through an array and returning each index

  const names = ['shaun', 'mario', 'luigi']
  
  for(let i = 0; i < names.length; i++){
    console.log(names[i])
  }

//=======================================================================

// this is a freecodecamp challenge

// the goal is to truncate a string, which is given as the first argument, if it is longer than the given maximum string length, which is given as the second argument
// input: string, number
// output: string

// first we want to look for edge cases (conditions that automatically return). Edge cases arent neccessarily pointed out so we need to know what to look for
// in this case, according to the instructions on FCC, if the length of the string is less than or equal to the number, return the string. These are two different edge cases that we can do solo or combine into one if statement. Examples of both are shown below, with the obsolete statement commented out

// we know we have to be able to count the length of the string, which means we need to turn it into an array
// we need to intitialize a variable to store the new array
// to know how many indexes are in the new array, we need to loop through it
// we can use a loop that checks if the length of the array is longer than the number argument
// if that condition is true, the loop will remove an index from the array
// once the length of the array is not longer than the number argument, we will convert the array back into a string and store it in a new variable
// finally the string will be returned


function truncateString(str, num) {
  if(str.length <= num){
    return str
  }
  // added the <= operator to the above edge case so we didnt need to use the below if statement. The top one checks for both conditions while the below only checks for one
  // if(str.length === num){
  //   return str
  // }
  let strArray = str.split('')
  // console.log(strArray)
  while(strArray.length > num){
    strArray.pop()
  }
  strNew = strArray.join('')
  strNew = strNew + '...'
  // console.log(strNew)
  // console.log(strArray)
  return strNew;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//=================================================================

// input is a string, number
// output is a string
// edge case: if we give a negative number as an argument, we can return something right away
// repeat a string (first argument) a specified number of times (second argument)
// since there is a number being given as an argument, we will need to use a loop to multiply the given string
// initialize a new variable as an empty string to use to store the repeated string values after each iteration
// return the new variable outside of the loop

function repeatStringNumTimes(str, num) {
  let multipleStr = ''
  if(num < 0){
    return ''
  }
  for(let i = 0; i < num; i++){
    // console.log(i)
    multipleStr += str
  }
  console.log(multipleStr)
  return multipleStr
}

repeatStringNumTimes("abc", 3);

//=================================================================


// input: array
// output: array

// the goal is to return only the even numbers in an array
// create an array of numbers
// we will need to iterate through the whole length of the array to search for the indexes that meet out condition, so we will use a for loop
// we need to check if the array's indexes are even. How can we do that?
// the % operator can be used to see if the remainder of the index values is equal to zero
// if that condition is met, then we will push that index to a new, empty array that we initialized

const arrOfNumbers = [1,2,3,50,4,5,6,162,7,8,27,9,0,2]

let newArr = []
for(let i = 0; i < arrOfNumbers.length; i++){
  if(arrOfNumbers[i] % 2 === 0) {
   newArr.push(arrOfNumbers[i])
  }
}
console.log(newArr)
// arrOfNumbers[0]

//=================================================================

// The goal is to 

// input: array, array, number
// output: array

// since we are not supposed to modify arr1 and arr2, we need a new array to store our final value in
// because 5 and everything after it is after the given index, we know they have to be moved over to make room for the first array. These will be the ending values in our final array
// We need to store these values into a new variable ** we want to name this variable properly so we know that is contains the ending value of our final array **
// now we need to store the beginning value of our final array in a new variable
// at this point, the empty array we initialized at the beginning will be used to store the final value
// we need to concatinate the beginning value with arr1 and the ending value
// return the new array

function frankenSplice(arr1, arr2, n) {
  let newArr = []
  let endingValue = arr2.slice(n)
  // console.log(endingValue)
  // newArr = newArr.splice
  // console.log(newArr)
  let beginVal = arr2.slice(0, n)
  // console.log(beginVal)
  newArr = beginVal.concat(arr1, endingValue)
  console.log(newArr)
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//=================================================================
