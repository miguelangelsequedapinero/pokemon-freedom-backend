const express = require('express');
const router = express.Router();
const md5 = require('md5');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'jdccyfex',
    host: 'balarama.db.elephantsql.com',
    database: 'jdccyfex',
    password: 'XysbeUw1JJydkjJwrVwDcoapCZtVc0Kc',
    port: 5432,
});


router.post('/', (req, res) => {
    const { username, password } = req.body;

    pool
        .query(`SELECT * FROM users WHERE username='${username}';`)
        .then((data) => {
            const returnedTable = data.rows; // Array of records

            if (returnedTable.length === 0) {
                // This return is to exit from function
                return res.send({ error: 'Sorry no records found' });
            }

            const userFromDb = returnedTable[0];

            const detailedInfoAboutUser = {
                firstName: userFromDb.first_name,
                lastName: userFromDb.last_name,
                secretToken: 'Secret!!!!!'
            };

            // Building hash for received from request password
            const salt = 'SECRET_HERE';
            const receivedHashedPassword = md5(password + salt);

            const passwordsHashesMatch = userFromDb.password_hash === receivedHashedPassword;

            if (passwordsHashesMatch) {
                res.send(detailedInfoAboutUser);
            } else {
                res.send({ error: 'Failed' });
            }
        })
        .catch(err => {
            res.send({ error: err.message });
        });
});

module.exports = router;
