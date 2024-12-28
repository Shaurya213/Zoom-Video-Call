import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import {connectSocket} from './controllers/socketManager.js';
import crypto from 'crypto';
import userRoutes from './routes/user.routes.js';


const app = express();
const server = createServer(app);
const io = connectSocket(server);

app.set('port',(process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:'40kb'}));
app.use(express.urlencoded({limit:'40kb' ,extended:true}));

app.use('/api/v1/users',userRoutes);

const start = async ()=>{
    app.set('mongo_user')
    const connectionDB = await mongoose.connect('mongodb+srv://shauryagupta213:shaurya@zoom.lbcf2.mongodb.net/')
    console.log(`MongoDB connected: ${connectionDB.connection.host}`)
    server.listen(app.get('port'), ()=>{
        console.log('Server is running on port 8000');
    })
}
start();