const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/books", (request, response, next) => {
  queries.listBooks("books").then(books => {
      response.json({books});
  }).catch(next);
});

router.get("/books/:id", (request, response, next) => {
  queries.read("books",request.params.id).then(books => {
      books
          ? response.json({books})
          : response.status(404).json({message: 'Not found'})
  }).catch(next);
});

router.post("/books", (request, response, next) => {
  queries.create("books",request.body).then(books => {
      response.status(201).json({books: books});
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete("books",request.params.id).then(() => {
      response.status(204).json({deleted: true});
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update("books",request.params.id, request.body).then(books => {
      response.json({books: books[0]});
  }).catch(next);
});

module.exports = router;