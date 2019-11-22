// eslint-disable-next-line no-unused-vars
// const catalogue = [
//   "The Catcher in the Rye by J.D. Salinger (10)",
//   "Dracula by Bram Stoker (0)",
//   "Between the Assassinations by Aravind Adiga (9)",
//   "Wolf Hall by Hilary Mantel (33)",
//   "Bring Up The Bodies by Hilary Mantel (31)",
//   "A Place of Greater Safety by Hilary Mantel (11)",
//   "Giving Up the Ghost by Hilary Mantel (8)",
//   "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
//   "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
//   "Conversations With Friends by Sally Rooney (1)",
//   "Normal People by Sally Rooney (2)",
//   "Everything I Never Told You by Celeste Ng (6)",
//   "2666 by Robert Bolaño (17)",
//   "By Night In Chile by Robert Bolaño (8)",
//   "A Tale of Two Cities by Charles Dickens (3)",
//   "Oliver Twist by Charles Dickens (7)",
//   "Great Expectations by Charles Dickens (1)",
//   "The Blind Assassin by Margaret Atwood (8)",
//   "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
//   "The Origin of Species by Charles Darwin (50)"
// ];


const catalogue = [
  { title: "Catcher in the Rye", author: "J.D. Salinger", isInStock: 10 },
  { title: "Dracula", author: "Bram Stoker", isInStock: 0 },
  { title: "Between the Assassinations", author: "Aravind Adiga", isInStock: 9 },
  { title: "Wolf Hall", author: "Hilary Mantel", isInStock: 33 },
  { title: "Bring Up The Bodies", author: "Hilary Mantel", isInStock: 31 },
  { title: "A Place of Greater Safety", author: "Hilary Mantel", isInStock: 11 },
  { title: "Giving Up the Ghost", author: "Hilary Mantel", isInStock: 8 },
  { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", isInStock: 43 },
  { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", isInStock: 12 },
  { title: "Conversations With Friends", author: "Sally Rooney", isInStock: 1 },
  { title: "Normal People", author: "Sally Rooney", noInStock: 2 },
  { title: "Everything I Never Told You", author: "Celeste Ng", isInStock: 6 },
  { title: "2666", author: "Robert Bolaño", isInStock: 17 },
  { title: "By Night In Chile", author: "Robert Bolaño", isInStock: 8 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", isInStock: 3 },
  { title: "Oliver Twist", author: "Charles Dickens", isInStock: 7 },
  { title: "Great Expectations", author: "Charles Dickens", isInStock: 1 },
  { title: "The Blind Assassin", author: "Margaret Atwood", isInStock: 8 },
  { title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", isInStock: 19 },
  { title: "The Origin of Species", author: "Charles Darwin", isInStock: 50 },
];

function countBooksByAuthor(author) {
  // so we want a loop that will go through the object from beginning to end
  let count = 0;
  for (let i = 0; i < catalogue.length; i++) {
    // we want it to find books by a certain author
    if (catalogue[i].author == author) {
      // we want it to add one to zero each time it finds a book by that author
      count++
    }
    // we want it to return the total 
  }
  return count;
};

function checkBookByTitle(title) {
  // We will loop through the catalogue, searching for a title
  for (i = 0; i < catalogue.length; i++) {
    // If the title exists, we will return true and stop looking
    if (catalogue[i].title == title) {
    }

}
return true;

// We will need to ensure the entire catalogue is checked (looped through)
// If the title does not exist, return false

 
  return false
};

function countBooksByFirstLetter(letter) {
    // so we want a loop that will go through the object from beginning to end
    let count = 0;
    for (let i = 0; i < catalogue.length; i++) {
      // we want it to find all books that begin with a certain letter
      if (catalogue[i].letter == letter) {
        // we want it to add one to zero each time it finds a book that begins with that letter
        count++
      }
      // we want it to return the total 
    }
    return count;
  };


function getQuantity(title) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

function checkQuantity(title, quantity) {
  // Your code here
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};


