const Pool = require("pg").Pool;
const pool = new Pool({
  user: "nate",
  host: "/var/run/postgresql",
  database: "lib",
  password: "secure",
  port: 5432,
});

const getTitles = (request, response) => {
  pool.query("SELECT title FROM books", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getTitles,
};
