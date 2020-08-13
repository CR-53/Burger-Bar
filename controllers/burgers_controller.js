const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/test", function(req, res) {
    console.log(`successful request`);
    res.send(`successful request`);
});

module.exports = router;