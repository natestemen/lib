var express = require("express");
const { Pool } = require("pg");
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

router.get("/new", function (request, response, next) {
  response.render("new");
});

router.post("/new", function (request, response, next) {
  let newBook = [request.body.title, request.body.author, request.body.fiction];
  pool.query(
    "INSERT INTO books(title, author, fiction) VALUES ($1, $2, $3)",
    newBook, // NEEDS SANITIZATION
    (error, queryResponse) => {
      if (error) {
        throw error;
      }
      response.render("success", { title: request.body.title });
    }
  );
});

module.exports = router;
