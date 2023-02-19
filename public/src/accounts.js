function findAccountById(accounts, id) {
  // Use find to find account matching arugment id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // Return last names sorted
  return accounts.sort((accountA, accountB) =>
    // Compare last names to sort by last name
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  // Set accumulator variable
  let total = 0;
  // Filter books that were borrowed
  books.filter((book) =>
    book.borrows.filter((borrow) => {
      // Check if account id equals the borrow id
      if (account.id === borrow.id) {
        // Increment total by 1
        total++;
      }
    })
  );

  // Return total number of borrows
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return (
    books
      // Filter books borrowed by account id and not returned
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      .map((book) => {
        // Map to return array of books with author information included for the books possessed by the account
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
