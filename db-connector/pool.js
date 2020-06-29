const { Pool } = require('pg');

const pool = new Pool({
    user: 'jdccyfex',
    host: 'balarama.db.elephantsql.com',
    database: 'jdccyfex',
    password: 'XysbeUw1JJydkjJwrVwDcoapCZtVc0Kc',
    port: 5432,
});

pool.connect();

module.exports = pool;
