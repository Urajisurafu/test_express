const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.set("view engine", "hbs");

const urlencodedParser = bodyParser.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "users",
    password: "1490592"
});

app.get("/", function(req, res){
    pool.query("SELECT * FROM user", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});

app.get("/create", function(req, res){
    res.render("create.hbs");
});

app.post("/create", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    pool.query("INSERT INTO user (name, age) VALUES (?,?)", [name, age], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

app.get("/edit/:id", function(req, res){
    const id = req.params.id;
    pool.query("SELECT * FROM user WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.render("edit.hbs", {
            user: data[0]
        });
    });
});

app.post("/edit", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;

    pool.query("UPDATE user SET name=?, age=? WHERE id=?", [name, age, id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

app.post("/delete/:id", function(req, res){

    const id = req.params.id;
    pool.query("DELETE FROM user WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

app.get("/users", function(req, res){
    pool.query("SELECT * FROM user", function(err, data) {
        if(err) return console.log(err);
        return res.send({ users: data });
    });
});

const jsonParser = express.json();

app.post("/user", jsonParser,function(req, res){
    console.log(req.body);
    if(!req.body) return res.sendStatus(400);
    res.json(req.body);
    console.log(1);
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));