import express from 'express';
import colors from 'colors';
const app = express();
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';

const PORT = process.env.PORT || 3000;

//!middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.listen(PORT, () => {
  console.log(
    `Server Running on port:http://localhost:3000`.bgYellow.underline
  );
});
