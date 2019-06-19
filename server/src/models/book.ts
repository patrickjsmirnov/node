const { pool }= require('../db')

interface Book {
    id: number,
    title: string,
    author_id: number,
    description: string,
}

// getting books
exports.getBooks = async function ({limit = 100, authorId}) {
    let query: string = ''

    if (authorId) {
      query = `SELECT * FROM books where author_id=${authorId} LIMIT ${limit}`;
    } else {
      query = `SELECT * FROM books LIMIT ${limit}`;  
    }

    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};

// getting book
exports.getBook = async function (id:number) {
    const query:string = `SELECT * FROM books WHERE id=${id}`;
    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};

// add book
exports.addBook = async function (book:Book) {
  const query: string = 'INSERT INTO books(id, title, author_id, description) VALUES($1, $2, $3, $4) RETURNING *'
  const { id, title, author_id, description } = book
  const values = [id, title, author_id, description]

  try {
    const { rows } = await pool.query(query, values);
    return rows
  } catch (e) {
    return e;
  }
};