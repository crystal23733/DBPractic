const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.db', (err) => {
  if(err){
    console.error(err.message);
  }
  console.log('DB가 연결되었습니다.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE)`);
})