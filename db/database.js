const { Pool } = require('pg');

const db = new Pool(
    {
        user: 'postgres',
        password: 'Larush77123',
        host: 'localhost',
        database: 'employeedb'
    },
)

module.exports = db;