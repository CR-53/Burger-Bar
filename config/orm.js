const connection = require("./connection");

const orm = {
    selectAll: function(tableInput, cb) {
        var selectQuery = `SELECT * FROM ${tableInput};`;
        connection.query(selectQuery, function (err, res) {
            if (err) throw err;
            else {
                console.table(res);
                cb(res);
            }
        });
    },
    insertOne: function(tableInput, newBurgerName, cb) {
        var insertQuery = `INSERT INTO ${tableInput} SET ?;`;
        connection.query(insertQuery, {name: newBurgerName, devoured: false}, function (err, res) {
            if (err) throw err;
            else {
                console.table(res);
                cb(res);
            }
        });
    },
    updateOne: function(tableInput, newBurgerName, burgerId, cb) {
        var updateQuery = `UPDATE ${tableInput} SET ? WHERE ${tableInput}.? = ?;`;
        connection.query(updateQuery, {name: newBurgerName, id: burgerId}, function (err, res) {
            if (err) throw err;
            else {
                console.table(res);
                cb(res);
            }
        });
    }
}

module.exports = orm;