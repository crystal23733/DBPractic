const path = require('path');
const db = require('../db.js');

const home = (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  return res.status(200).sendFile(filePath);
}

const create = (req, res) => {
  const { title } = req.body;
  const { content } = req.body;
  db.run(`INSERT INTO notes (title, content) VALUES (?, ?)`, [title, content], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`성공적으로 저장되었습니다.`);
  });
  return res.redirect('/');
}

module.exports = {home, create};