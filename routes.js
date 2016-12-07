/***    ROUTES.JS PSEUDOCODE    ***/

    //Require any Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const mysql = require("mysql");
const router = express.Router();

    //Connect to DataBase
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "employeeRegistry"
});

connection.connect();

    //Declare Routes for both GET and POST
router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

	// API Route
router.get("/getMyData", function(req, res) {
	connection.query("SELECT * FROM employees", function(err, data) {
		if (err) throw err;
		res.send(data);
	});
});

	// Employee Get Route
router.get("/newEmployee", function(req, res) {
	res.sendFile(path.join(__dirname, "newEmployee.html"));
});

	//Employee Post Route

router.post("/newEmployee", function(req, res) {
	console.log(req.body);

	let first_name = req.body.first_name;
	let last_name = req.body.last_name;
	let age = req.body.age;
	let enjoys = req.body.enjoys;

	connection.query("INSERT INTO employees (first_name, last_name, age, enjoys)
		VALUES('"' + first_name + )");

		res.redirect("/");
}); // end newEmployee post route

    //Export Routes

module.exports = router;