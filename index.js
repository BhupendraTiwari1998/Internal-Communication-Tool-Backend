import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"; 
dotenv.config()

import userRouter from './routers/user.router'
import postRouter from './routers/post.router'

const app = express();
app.use(express.json())
app.use(cors());

const port = 3004;

mongoose.connect('mongodb://localhost:27017/Feeds_Application')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`App listening on port${port}`)
})

app.use(userRouter)
app.use(postRouter)
