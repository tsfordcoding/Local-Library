function findAuthorById(authors, id) {
  // Use helper function to find author by id
  return findElementById(authors, id);
}

function findBookById(books, id) {
  // Use helper function to find book by id
  return findElementById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  // Set boolean variables for returned and borrowed status
  const returned = true;
  const borrowed = false;
  // Use helper function filter through books to determine borrowed status
  const booksBorrowed = filterBorrowedBooks(books, borrowed);
  const booksReturned = filterBorrowedBooks(books, returned);
  // Return array expanded by spread operator
  return [[...booksBorrowed], [...booksReturned]];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

// Helper Functions

function findElementById(element, id) {
  return element.find((element) => element.id === id);
}

function filterBorrowedBooks(books, borrowedStatus) {
  return books.filter(({ borrows }) => borrowedStatus === borrows[0].returned);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
