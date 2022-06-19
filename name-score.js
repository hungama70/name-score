/* Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file? */



/*const fs = require('fs');

const nameScore = function(filename) {
    const fileData = fs.readFileSync(names, 'utf-8')
    const nameArray = fileda.replace(/\"/g,").split(',').sort();
    console.log(fileData)
    console.log(nameArray)

    return 5
}

const score = nameScore('names.txt')

console.log("Score is", score)

*/

// Step 1. Read the file - Done!
// Step 2. Store the file data into an array of names
// Step 3. Sort the names

// Step. Create an array?
// Step. Assign value to each alphabet?
// Step. Loop through the thing and add? Possibly with a while loop? Shove into new array?
// Step. Remove quotation marks
// Step. Find the sum of each name? With a loop?

const fs = require('fs');

const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const nameScore = function(filename) {
  const fileData = fs.readFileSync(filename, 'utf8');
  const nameArray = fileData.replace(/"/g, '').split(',').sort();
  console.log(fileData)
  console.log(nameArray)


  nameArray.forEach(firstName=>{
    let nameSum = 0
    firstName.split('').forEach(letter => {
        const letterPosition = ALPHA.indexOf(letter) + 1
        nameSum += letterPosition
    })
    console.log(firstName, nameSum)

    
  })

  
  return 5
}

const score = nameScore('names.txt')

console.log("Score is", score)

