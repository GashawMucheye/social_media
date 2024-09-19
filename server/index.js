import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on port:http://localhost:3000`);
});
