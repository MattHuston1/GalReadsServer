
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', authors => {
    authors.increments()
    authors.text('first_name')
    authors.text('last_name')
    authors.text('biography')
    authors.text('portrait_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
