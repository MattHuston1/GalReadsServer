const database = require('./database-connection')

module.exports = {
  list(tableName) {
    return database(tableName).select('*')
  },
  listBooks(){
    return database('books')
      .select('books.title', 'authors.first_name', 'authors.last_name', 'books.genre', 'books.description','books.cover_url')
      .from('books')
      .innerJoin('books_authors', 'books.id', 'books_authors.books_info')
      .innerJoin('authors', 'authors.id', 'books_authors.authors_info')
  },
  listAuthors(){
    return database('authors')
      .select('authors.first_name', 'authors.last_name', 'authors.biography', 'books.title', 'authors.portrait_url')
      .from('authors')
      .innerJoin('books_authors', 'authors.id', 'books_authors.authors_info')
      .innerJoin('books', 'books.id', 'books_authors.books_info')
  },
  read(tableName, id) {
    return database(tableName).select('*').where('id', id).first()
  },

  create(tableName, item) {
    return database(tableName).insert(item).returning('*')
      .then(record => record[0])
  },

  update(tableName, id, item) {
    return database(tableName).update(item).where('id', id).returning('*')
      .then(record => record[0])
  },

  delete(tableName, id) {
    return database(tableName).delete().where('id', id)
  },
}