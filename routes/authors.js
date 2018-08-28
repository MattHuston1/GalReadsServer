const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/authors", (request, response, next) => {
  queries.listAuthors('authors').then(authors => {
      response.json({authors});
  }).catch(next);
});

router.get("/authors/:id", (request, response, next) => {
  queries.read("authors", request.params.id).then(authors => {
      authors
          ? response.json({authors})
          : response.status(404).json({message: 'Not found'})
  }).catch(next);
});

router.post("/author", (request, response, next) => {
  queries.create("authors", request.body).then(authors => {
      response.status(201).json({authors: authors});
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete("authors", request.params.id).then(() => {
      response.status(204).json({deleted: true});
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update("authors", request.params.id, request.body).then(authors => {
      response.json({authors: authors[0]});
  }).catch(next);
});

module.exports = router;