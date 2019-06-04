export{}

const { pool }= require('../db')

interface Author {
    id: number,
    first_name: string,
    last_name: string,
}

// getting authors
exports.getAuthors = async function () {
    const query:String = 'SELECT * FROM authors';

    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};

// getting author
exports.getAuthor = async function (id) {
    const query:String = `SELECT * FROM authors WHERE id=${id}`;
    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};