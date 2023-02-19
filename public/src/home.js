function getTotalBooksCount(books) {
  // Find total book count by using helper function to return length of books array
  return findLength(books);
}

function getTotalAccountsCount(accounts) {
  // Find total account count by using helper function to return length of accounts array
  return findLength(accounts);
}

function getBooksBorrowedCount(books) {
  // Set borrowed variable to boolean false which indicates book is not returned
  const borrowed = false;
  // Filter borrowed books by check if returned in the borrows array is false
  const booksBorrowed = books.filter(
    ({ borrows }) => borrowed === borrows[0].returned
  );
  // Return length of booksBorrowed to get total count of borrowed books
  return findLength(booksBorrowed);
}

function getMostCommonGenres(books) {
  // Set empty object hashmap
  const genreHashMap = {};
  // Map books to map out the genres
  const bookGenres = books.map((book) => book.genre);

  bookGenres.slice("").forEach((number) => {
    // Slice booksGenres with an empty string and for each genre do the following
    // Check if genreHashmap[number] exists
    if (genreHashMap[number]) {
      // if key already exists increment number by 1
      genreHashMap[number]++;
    } else {
      // else set entry as new key and set number to 1
      genreHashMap[number] = 1;
    }
  });

  // Map result of genreHashmap to include { name: count: } properties
  const result = Object.entries(genreHashMap).map(([name, count]) => {
    return { name, count };
  });

  // Sort and return sliced array

  result.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1));

  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  // Map array of objects with name of title and count of book borrows array length
  const mostPopularBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });

  // Sort and return sliced array
  mostPopularBooks.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));

  return mostPopularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // Map for each author
  const authorArray = authors.map((author) => {
    const fullAuthorName = `${author.name.first} ${author.name.last}`;
    // Find all of the books for that author
    const bookByAuthor = books.filter((book) => book.authorId === author.id);
    // Add together the book.borrows.length
    const totalBorrowLength = bookByAuthor.reduce(
      (acc, cur) => acc + cur.borrows.length,
      0
    );
    // Create a new object from this data {name: first + last , count: 123}
    const mostPopularAuthors = {
      name: fullAuthorName,
      count: totalBorrowLength,
    };
    // Return object to mapped array
    return mostPopularAuthors;
  });
  // Sort and slice
  authorArray.sort((author1, author2) =>
    author1.count < author2.count ? 1 : -1
  );

  return authorArray.slice(0, 5);
}

// Helper Functions

function findLength(element) {
  return element.length;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
