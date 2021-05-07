var express = require("express");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "nate",
  host: "/var/run/postgresql",
  database: "lib",
  password: "secure",
  port: 5432,
});
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  pool.query(
    "SELECT title, author, fiction FROM books ORDER BY title",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("index", { title: "books", books: results.rows });
    }
  );
});

module.exports = router;
