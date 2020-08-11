const mysql = require("mysql");
const util = require("util");
const connection = require("./connection");

function init() {
    console.log(`Burger Bar v1.0`);
    connection.query("SELECT * FROM burgers");
}

init();