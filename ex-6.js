let favoriteBooks = [];

function addFavoriteBook(bookName) {
  console.log(bookName.includes("Beauty"));

  if (bookName.includes("Beauty") === true) {
    favoriteBooks.push(bookName);
  }
  // Start coding here !
  
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
