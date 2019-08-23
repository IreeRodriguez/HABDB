var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'youaretheboss',
    database: 'HabDB_beagle'
});


module.exports = function (app, db) {

    app.get('/species/:id', (req, res) => {
        let name = req.params.id;

        connection.query(`SELECT * FROM Species WHERE name LIKE '${name}%'`, function (error, results, fields) {
            if (error){ 
                // throw error
                console.log(error);
            };
            res.send(results);
        });
    });
};