const { pool }= require('../db')

interface Book {
    id: number,
    title: string,
    author: string,
    description: string,
}

// getting books
exports.getBooks = async function () {
    const query:String = 'SELECT * FROM books';

    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};

// getting book
exports.getBook = async function (id:number) {
    const query:String = `SELECT * FROM books WHERE id=${id}`;
    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};

// getting books
exports.getBooksByAuthorId = async function (authorId:number) {
    const query:String = `SELECT * FROM books where author=${authorId}`;

    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};