var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "paul",
  password: "password",
  database: "todo_db"
});

// app.get("/", function(req, res) {

//   res.sendFile(path.join(__dirname, "/views/index.handlebars"));
// });

app.get("/api/todos", (req, res) => {
  con.connect();
  con.query("SELECT * FROM todos", (err, results) => {
    if (err) throw err;
    res.send(results);
    con.end();
  });
});

app.post("/api/todos", (req, res) => {
  con.connect();
  con.query("SELECT * FROM todos", (err, results) => {
    if (err) throw err;
    res.send(results);
    con.end();
  });
});

// app.post("/api/friends", (req, res) => {
//   console.log("POST /api/friends", req.body);
//   let message;
//   console.log(req.body);
//   db.push(req.body);
//   message = `Thanks for joining our dating app!`;
//   res.status(201).json({ message });
// });

app.listen(3004);
