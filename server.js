const express = require("express");
const mysql = require("mysql");
const util = require("util");
const connection = require("./config/connection");
const orm = require("./config/orm");
const router = require("./controllers/burgers_controller");

function init() {
    console.log(`app online`);
};

init();