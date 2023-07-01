import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://CodeZera3:hWamgfFLyAgHDdkB@mern-social-media-app.itnpmx6.mongodb.net/';
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>{console.log(`Server running on port: ${PORT}`)}))
    .catch((err) => {console.log(err.message)})


// hWamgfFLyAgHDdkB