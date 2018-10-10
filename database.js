const sqlite3 = require('sqlite3').verbose();
const con = new sqlite3.Database('dictionaryE_V.db');
con.run("CREATE TABLE dictionary (word TEXT, detail)")

module.exports = con;