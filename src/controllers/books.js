const Book = require("../models/book");

const getBooks = (request, response) => {
  //Get all books
  return Book.find({}).then((data) => {
    response.status(200).send(data);
  });
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  // response.status(200);
  // response.send(`User with id: ${user_id}`);
  return Book.findById(book_id)
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const createBook = (request, response) => {
  //Create new user
  // response.status(201);
  // response.send(request.body);
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const updateBook = (request, response) => {
  //Update book
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const deleteBook = (request, response) => {
  //Delete book
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id, { ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
