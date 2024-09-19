import express from 'express';
const app = express();
import userRouters from './routes/users.js';

const PORT = process.env.PORT || 3000;

app.use('/api/users', userRouters);
app.listen(PORT, () => {
  console.log(`Server Running on port:http://localhost:3000`);
});
