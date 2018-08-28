
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', books => {
    books.increments()
    books.text('title')
    books.text('genre')
    books.text('description')
    books.text('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
