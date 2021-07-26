import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routes/posts.js'
import {mainPage} from './controlers/Main.js'

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors);

app.get('/',mainPage)
app.use('/posts',postRouter)


const CONNECTION_URL=`mongodb+srv://Rachit_3015:Rachit_3015@rachit.olb01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT=process.env.port||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
    mongoose.set('useFindAndModify',false);
