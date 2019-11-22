// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) { //check through all of the books in the array
    let bookToCheck = catalogue[i];

    if (bookToCheck === book) {
      return true;
    }
  }
  return false;
}


//    if (book === catalogue[i]); {              //look for a particular book in the array
//      return true;                             //if it's there, return true
//    } 
//   }
//   return false;                               //if it isn't, return false
// }

// function countBooksByFirstLetter(letter) {
//   // We want it to check through all the books in the array
//   for (let i = 0; i < catalogue.length; i++){
//      // Want it to keep all the titles that have the first letter we are testing for
// let letter === results.filter {
//   // Want it to give us the number of titles that start with that first letter 
//   return numberOfBooks;
// }
//   }
// }
function countBooksByFirstLetter(letter) {
  // This tells computer that count begins at zero
  let count = 0; 
  // This tells computer what your loop is - to start looping at index point zero, to keep going until the end of the array and to go through them one at a time
  for (let i = 0; i < catalogue.length; i++) {
  // This tells computer to go through the catalogue array and each time it finds a title that starts with the letter (in this case W is being tested for by the test.js)
    if (catalogue[i].startsWith(letter)){
  // This tells computer to add one to the count variable each time it finds a title beginning with W
      count++
    }
  }
  // And then we are asking it to return 'count', which has now changed from zero because the computer has added 1 to it each time it found a title starting with W
  return count;
}

function countBooksByKeyword(keyword) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
