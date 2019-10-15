const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./fjd.sqlite");

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS users`);
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        mail TEXT NOT NULL,
        subject TEXT DEFAULT ""
    )`);
});
