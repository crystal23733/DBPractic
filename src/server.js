import express from 'express';

const PORT = 7700;

const app = express();

app.listen(() => {
  console.log(`http://localhost:${PORT}`);
})