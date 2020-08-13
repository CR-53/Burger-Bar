const connection = require("../config/connection");
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burger", function(response){
            cb(response);
        });
    }
}

module.exports = burger;