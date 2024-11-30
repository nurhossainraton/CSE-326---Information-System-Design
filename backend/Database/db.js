import mysql from 'mysql';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nurhossain",
    database: "researchabroad"
});

export default db;